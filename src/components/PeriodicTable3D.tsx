import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, RoundedBox } from '@react-three/drei';
import { usePeriodicTable } from '../context/usePeriodicTable';
import { elements, GROUP_HEX_COLORS } from '../data/elements';
import type { Element } from '../data/elements';
import * as THREE from 'three';

const CELL_SIZE = 1.2;
const CELL_GAP = 0.15;
const CELL_DEPTH = 0.3;

function getHeight(el: Element, temperature: number): number {
  // ponytail: height = atomic mass mapped to 0.3..1.5 range for visual interest
  const mass = parseFloat(el.atomicMass.replace(/[()]/g, '')) || 1;
  return 0.3 + (mass / 294) * 1.2;
}

function ElementBox({ element, onClick }: { element: Element; onClick: (el: Element) => void }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const { activeCategory, temperature, getState, filteredElements } = usePeriodicTable();

  const color = GROUP_HEX_COLORS[element.groupBlock] || '#4ade80';
  const currentState = getState(element);
  const isFiltered = filteredElements.includes(element);
  const isDimmed = (activeCategory !== null && element.groupBlock !== activeCategory) || !isFiltered;

  const height = getHeight(element, temperature);

  // Center the grid: 18 cols → offset by ~9.5, 10 rows → offset by ~5
  const posX = (element.x - 9.5) * (CELL_SIZE + CELL_GAP);
  const posZ = (element.y - 5.5) * (CELL_SIZE + CELL_GAP);
  const posY = height / 2;

  // Gas elements float slightly
  const floatOffset = currentState === 'Gas' ? 0.3 : currentState === 'Liquid' ? 0.05 : 0;

  const emissiveIntensity = useMemo(() => {
    if (hovered) return 0.8;
    if (currentState === 'Gas') return 0.5;
    if (currentState === 'Liquid') return 0.3;
    return 0.1;
  }, [hovered, currentState]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetY = posY + floatOffset;
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, delta * 3);
    // Gentle bob for gas
    if (currentState === 'Gas') {
      groupRef.current.position.y += Math.sin(Date.now() * 0.003 + element.atomicNumber) * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={[posX, posY, posZ]}>
      <RoundedBox
        args={[CELL_SIZE, height, CELL_SIZE]}
        radius={0.08}
        smoothness={4}
        onClick={(e) => { e.stopPropagation(); onClick(element); }}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          transparent
          opacity={isDimmed ? 0.15 : hovered ? 1 : 0.75}
          roughness={0.3}
          metalness={0.2}
        />
      </RoundedBox>

      {/* Symbol text on top */}
      <Text
        position={[0, height / 2 + 0.02, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
        fillOpacity={isDimmed ? 0.2 : 1}
      >
        {element.symbol}
      </Text>

      {/* Atomic number */}
      <Text
        position={[-CELL_SIZE / 2 + 0.15, height / 2 + 0.02, -CELL_SIZE / 2 + 0.15]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.15}
        color="white"
        anchorX="left"
        anchorY="top"
        fillOpacity={isDimmed ? 0.1 : 0.6}
      >
        {String(element.atomicNumber)}
      </Text>
    </group>
  );
}

function Grid() {
  return (
    <gridHelper
      args={[30, 30, '#333333', '#222222']}
      position={[0, -0.01, 0]}
    />
  );
}

export function PeriodicTable3D() {
  const { setSelectedElement, theme } = usePeriodicTable();

  return (
    <div className="w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden border border-gray-300 dark:border-white/10">
      <Canvas
        camera={{ position: [0, 18, 18], fov: 50 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={[theme === 'dark' ? '#0a0a0f' : '#f0f0f5']} />
        <fog attach="fog" args={[theme === 'dark' ? '#0a0a0f' : '#f0f0f5', 25, 50]} />

        <ambientLight intensity={theme === 'dark' ? 0.3 : 0.6} />
        <directionalLight position={[10, 15, 10]} intensity={1} castShadow />
        <directionalLight position={[-5, 10, -5]} intensity={0.3} color="#60a5fa" />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#22d3ee" distance={20} />

        <Grid />

        {elements.map((el) => (
          <ElementBox
            key={el.atomicNumber}
            element={el}
            onClick={setSelectedElement}
          />
        ))}

        <OrbitControls
          enableDamping
          dampingFactor={0.08}
          minDistance={8}
          maxDistance={40}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </div>
  );
}
