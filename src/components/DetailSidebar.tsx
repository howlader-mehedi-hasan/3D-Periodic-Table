import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Box, Grid2x2 } from 'lucide-react';
import { usePeriodicTable } from '../context/usePeriodicTable';
import { GROUP_COLORS } from '../data/elements';
import { AtomModel3D } from './AtomModel3D';

function BohrModel({ shells, isDark }: { shells: number[]; isDark: boolean }) {
  const maxR = 70;
  const orbitColor = isDark ? 'white' : '#334155';
  return (
    <svg viewBox="0 0 160 160" className="w-32 h-32 sm:w-40 sm:h-40 mx-auto">
      {shells.map((electrons, i) => {
        const r = 20 + (i * (maxR - 20)) / Math.max(shells.length - 1, 1);
        return (
          <g key={i}>
            <circle cx="80" cy="80" r={r} fill="none" stroke={orbitColor} strokeOpacity="0.15" strokeWidth="1" />
            {Array.from({ length: electrons }).map((_, j) => {
              const angle = (2 * Math.PI * j) / electrons - Math.PI / 2;
              return (
                <motion.circle
                  key={j}
                  cx={80 + r * Math.cos(angle)}
                  cy={80 + r * Math.sin(angle)}
                  r="3"
                  fill="#06b6d4"
                  fillOpacity="0.8"
                  animate={{
                    cx: [80 + r * Math.cos(angle), 80 + r * Math.cos(angle + Math.PI * 2)],
                    cy: [80 + r * Math.sin(angle), 80 + r * Math.sin(angle + Math.PI * 2)],
                  }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: 'linear' }}
                />
              );
            })}
          </g>
        );
      })}
      <circle cx="80" cy="80" r="8" fill="#06b6d4" fillOpacity="0.3" />
      <circle cx="80" cy="80" r="4" fill="#06b6d4" fillOpacity="0.6" />
    </svg>
  );
}

function parseShells(atomicNumber: number): number[] {
  // ponytail: simple shell filling, not real subshell order. Good enough for a visual.
  const maxPerShell = [2, 8, 18, 32, 32, 18, 8];
  const shells: number[] = [];
  let remaining = atomicNumber;
  for (const max of maxPerShell) {
    if (remaining <= 0) break;
    const n = Math.min(remaining, max);
    shells.push(n);
    remaining -= n;
  }
  return shells;
}

export function DetailSidebar() {
  const { selectedElement, setSelectedElement, getState, theme } = usePeriodicTable();
  const [atomView, setAtomView] = useState<'2d' | '3d'>('2d');
  const isDark = theme === 'dark';

  return (
    <AnimatePresence>
      {selectedElement && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedElement(null)}
            className="fixed inset-0 bg-black/30 dark:bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-96 dark:bg-gray-900/95 bg-white/95 backdrop-blur-xl border-l dark:border-white/10 border-gray-200 z-50 overflow-y-auto"
          >
            <div className="p-6 flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="dark:text-white/40 text-gray-400 text-sm">#{selectedElement.atomicNumber}</span>
                  <h2 className="text-3xl font-bold dark:text-white text-gray-900">{selectedElement.name}</h2>
                  <span className={`text-sm ${GROUP_COLORS[selectedElement.groupBlock]?.text || 'dark:text-white/60 text-gray-500'}`}>
                    {selectedElement.groupBlock}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedElement(null)}
                  className="p-2 rounded-lg dark:bg-white/5 bg-gray-100 dark:hover:bg-white/10 hover:bg-gray-200 dark:text-white/60 text-gray-500 dark:hover:text-white hover:text-gray-900 transition-colors cursor-pointer"
                  id="close-detail"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Big symbol */}
              <div className={`text-center py-4 rounded-xl dark:bg-white/5 bg-gray-50 border ${GROUP_COLORS[selectedElement.groupBlock]?.border || 'dark:border-white/10 border-gray-200'}`}>
                <div className={`text-6xl font-bold ${GROUP_COLORS[selectedElement.groupBlock]?.text || 'dark:text-white text-gray-900'}`}>
                  {selectedElement.symbol}
                </div>
                <div className="dark:text-white/50 text-gray-500 text-lg font-mono mt-1">{selectedElement.atomicMass} u</div>
              </div>

              {/* Bohr model */}
              <div className="dark:bg-white/5 bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs dark:text-white/40 text-gray-400 uppercase tracking-wider">Atomic Structure</h3>
                  <div className="flex rounded-lg overflow-hidden border dark:border-white/10 border-gray-300">
                    <button
                      onClick={() => setAtomView('2d')}
                      className={`px-2 py-1 text-[0.6rem] flex items-center gap-1 transition-all ${
                        atomView === '2d' ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                      }`}
                    >
                      <Grid2x2 className="w-3 h-3" /> 2D
                    </button>
                    <button
                      onClick={() => setAtomView('3d')}
                      className={`px-2 py-1 text-[0.6rem] flex items-center gap-1 transition-all ${
                        atomView === '3d' ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                      }`}
                    >
                      <Box className="w-3 h-3" /> 3D
                    </button>
                  </div>
                </div>
                {atomView === '2d' ? (
                  <BohrModel shells={parseShells(selectedElement.atomicNumber)} isDark={isDark} />
                ) : (
                  <AtomModel3D atomicNumber={selectedElement.atomicNumber} atomicMass={selectedElement.atomicMass} shells={parseShells(selectedElement.atomicNumber)} />
                )}
              </div>

              {/* Data grid */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  ['State at T', getState(selectedElement)],
                  ['Electronegativity', selectedElement.electronegativity?.toFixed(2) ?? '—'],
                  ['Melting Point', selectedElement.meltingPoint ? `${selectedElement.meltingPoint} K` : '—'],
                  ['Boiling Point', selectedElement.boilingPoint ? `${selectedElement.boilingPoint} K` : '—'],
                  ['Year Discovered', selectedElement.yearDiscovered],
                  ['Standard State', selectedElement.standardState],
                ].map(([label, value]) => (
                  <div key={label} className="dark:bg-white/5 bg-gray-50 rounded-lg p-3">
                    <div className="text-[0.6rem] dark:text-white/30 text-gray-400 uppercase tracking-wider">{label}</div>
                    <div className="dark:text-white text-gray-900 font-medium text-sm mt-0.5">{value}</div>
                  </div>
                ))}
              </div>

              {/* Electron configuration */}
              <div className="dark:bg-white/5 bg-gray-50 rounded-xl p-4">
                <h3 className="text-xs dark:text-white/40 text-gray-400 uppercase tracking-wider mb-2">Electron Configuration</h3>
                <p className="text-cyan-500 dark:text-cyan-300 font-mono text-sm">{selectedElement.electronConfiguration}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
