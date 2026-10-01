import { Search, Thermometer, Sun, Moon, Box, Grid2x2 } from 'lucide-react';
import { usePeriodicTable } from '../context/usePeriodicTable';
import { categories, GROUP_COLORS } from '../data/elements';

export function Controls() {
  const {
    searchQuery, setSearchQuery,
    temperature, setTemperature,
    activeCategory, setActiveCategory,
    viewMode, setViewMode,
    theme, setTheme,
  } = usePeriodicTable();

  const tempColor =
    temperature < 300
      ? 'text-blue-400'
      : temperature < 1000
        ? 'text-green-400'
        : temperature < 3000
          ? 'text-yellow-400'
          : 'text-red-400';

  return (
    <div className="flex flex-col gap-4 p-4 sm:p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-black/5 dark:shadow-black/20">
      {/* Top row: search + toggles */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-white/40" />
          <input
            type="text"
            placeholder="Search by name, symbol, or number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
            id="element-search"
          />
        </div>

        {/* Toggle buttons */}
        <div className="flex items-center gap-2">
          {/* View mode toggle */}
          <div className="flex rounded-lg overflow-hidden border border-gray-300 dark:border-white/10">
            <button
              onClick={() => setViewMode('2d')}
              className={`px-3 py-2 text-xs flex items-center gap-1.5 cursor-pointer transition-all ${
                viewMode === '2d'
                  ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400'
                  : 'bg-transparent text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/60'
              }`}
              id="view-2d"
            >
              <Grid2x2 className="w-3.5 h-3.5" /> 2D
            </button>
            <button
              onClick={() => setViewMode('3d')}
              className={`px-3 py-2 text-xs flex items-center gap-1.5 cursor-pointer transition-all ${
                viewMode === '3d'
                  ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400'
                  : 'bg-transparent text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/60'
              }`}
              id="view-3d"
            >
              <Box className="w-3.5 h-3.5" /> 3D
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-all cursor-pointer"
            id="theme-toggle"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Temperature slider */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Thermometer className={`w-4 h-4 ${tempColor}`} />
            <span className="text-xs text-gray-500 dark:text-white/60">Temperature</span>
          </div>
          <span className={`text-sm font-mono font-bold ${tempColor}`}>
            {temperature} K
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={6000}
          step={10}
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
          className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-cyan-400
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-cyan-400/30
          "
          id="temperature-slider"
        />
        <div className="flex justify-between text-[0.6rem] text-gray-400 dark:text-white/30">
          <span>0 K</span>
          <span>298 K (Room)</span>
          <span>6000 K</span>
        </div>
      </div>

      {/* Legend / Category filter */}
      <div className="flex flex-wrap gap-1.5">
        {categories.map((cat) => {
          const colors = GROUP_COLORS[cat];
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(isActive ? null : cat)}
              className={`
                px-2 py-1 rounded-md text-[0.6rem] sm:text-xs border transition-all cursor-pointer
                ${colors.border} ${colors.bg} ${colors.text}
                ${isActive ? 'opacity-100 scale-105 shadow-md' : 'opacity-60 hover:opacity-90'}
              `}
              id={`category-${cat.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* State legend */}
      <div className="flex items-center gap-3 text-[0.6rem] text-gray-500 dark:text-white/40 border-t border-gray-200 dark:border-white/5 pt-2">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-white/30" /> Solid</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" /> Liquid</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400" /> Gas</span>
      </div>
    </div>
  );
}
