import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const nucGeo = new THREE.SphereGeometry(0.12, 16, 16);
const elecGeo = new THREE.SphereGeometry(0.08, 16, 16);
const protonMat = new THREE.MeshStandardMaterial({ color: '#ef4444', roughness: 0.4 });
const neutronMat = new THREE.MeshStandardMaterial({ color: '#94a3b8', roughness: 0.4 });
const elecMat = new THREE.MeshStandardMaterial({ color: '#06b6d4', emissive: '#06b6d4', emissiveIntensity: 0.5 });

function Nucleus({ protons, neutrons }: { protons: number; neutrons: number }) {
  const particles = useMemo(() => {
    const arr = [];
    // Calculate a rough radius to tightly pack the nucleus
    const radius = Math.pow(protons + neutrons, 1 / 3) * 0.12;
    for (let i = 0; i < protons; i++) {
      arr.push({ type: 'proton', pos: new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * radius) });
    }
    for (let i = 0; i < neutrons; i++) {
      arr.push({ type: 'neutron', pos: new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * radius) });
    }
    return arr;
  }, [protons, neutrons]);

  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((_, delta) => {
    if (groupRef.current) {
      // Very slow spin for the nucleus
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} geometry={nucGeo} material={p.type === 'proton' ? protonMat : neutronMat} position={p.pos} />
      ))}
    </group>
  );
}

function ElectronShells({ shells }: { shells: number[] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {shells.map((count, shellIndex) => {
        const radius = 2 + shellIndex * 1.2;
        const electrons = [];
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2;
          electrons.push(
            <mesh key={i} geometry={elecGeo} material={elecMat} position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]} />
          );
        }
        return (
          <group key={shellIndex}>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <torusGeometry args={[radius, 0.01, 16, 64]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
            </mesh>
            {electrons}
          </group>
        );
      })}
    </group>
  );
}

export function AtomModel3D({ atomicNumber, atomicMass, shells }: { atomicNumber: number; atomicMass: string; shells: number[] }) {
  const parsedMass = parseFloat(atomicMass.replace(/[()]/g, '')) || atomicNumber * 2;
  const neutrons = Math.max(0, Math.round(parsedMass) - atomicNumber);
  
  return (
    <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden bg-black/10 dark:bg-black/20 border border-white/5 relative">
      <Canvas camera={{ position: [0, 4, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Nucleus protons={atomicNumber} neutrons={neutrons} />
        <ElectronShells shells={shells} />
        
        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
      {/* Legend */}
      <div className="absolute bottom-2 left-2 flex gap-3 text-[0.55rem] sm:text-[0.65rem] text-white/90 bg-black/60 px-2 py-1.5 rounded-md backdrop-blur-md">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"/> Protons ({atomicNumber})</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-400"/> Neutrons ({neutrons})</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-500"/> Electrons ({atomicNumber})</span>
      </div>
    </div>
  );
}
