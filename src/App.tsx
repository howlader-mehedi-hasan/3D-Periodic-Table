import { Suspense } from 'react';
import { PeriodicTableProvider, usePeriodicTable } from './context/usePeriodicTable';
import { Controls } from './components/Controls';
import { PeriodicTable } from './components/PeriodicTable';
import { PeriodicTable3D } from './components/PeriodicTable3D';
import { DetailSidebar } from './components/DetailSidebar';
import { Atom, Loader2 } from 'lucide-react';

function AppContent() {
  const { viewMode } = usePeriodicTable();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white font-[Inter,sans-serif] transition-colors duration-300">
      {/* Header */}
      <header className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2">
        <div className="flex items-center gap-3 mb-4">
          <Atom className="w-7 h-7 text-cyan-400" />
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Periodic Table of Elements
          </h1>
        </div>
        <Controls />
      </header>

      {/* Table */}
      <main className="px-4 sm:px-6 py-4">
        {viewMode === '2d' ? (
          <PeriodicTable />
        ) : (
          <Suspense
            fallback={
              <div className="w-full h-[60vh] flex items-center justify-center rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5">
                <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
              </div>
            }
          >
            <PeriodicTable3D />
          </Suspense>
        )}
      </main>

      <DetailSidebar />
    </div>
  );
}

export default function App() {
  return (
    <PeriodicTableProvider>
      <AppContent />
    </PeriodicTableProvider>
  );
}
