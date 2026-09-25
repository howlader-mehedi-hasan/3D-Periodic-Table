import { motion } from 'framer-motion';
import { usePeriodicTable } from '../context/usePeriodicTable';
import type { Element } from '../data/elements';
import { GROUP_COLORS } from '../data/elements';

export function ElementCell({ element }: { element: Element }) {
  const { activeCategory, setActiveCategory, setSelectedElement, getState, filteredElements } = usePeriodicTable();

  const isFiltered = filteredElements.includes(element);
  const isDimmed = activeCategory !== null && element.groupBlock !== activeCategory;
  const currentState = getState(element);
  const colors = GROUP_COLORS[element.groupBlock] || GROUP_COLORS['Nonmetal'];

  const stateIndicator =
    currentState === 'Gas'
      ? 'ring-2 ring-red-400/50'
      : currentState === 'Liquid'
        ? 'ring-2 ring-sky-400/60'
        : 'ring-1 ring-white/10 dark:ring-white/10 ring-gray-300';

  return (
    <motion.button
      layout
      onClick={() => setSelectedElement(element)}
      onMouseEnter={() => setActiveCategory(element.groupBlock)}
      onMouseLeave={() => setActiveCategory(null)}
      className={`
        relative flex flex-col items-center justify-center
        rounded-lg border cursor-pointer select-none
        transition-all duration-200
        min-w-0 aspect-square p-0.5 sm:p-1
        ${colors.bg} ${colors.border}
        ${stateIndicator}
        ${isDimmed ? 'opacity-20 scale-95' : 'opacity-100'}
        ${!isFiltered ? 'opacity-10' : ''}
        hover:scale-110 hover:z-10 hover:shadow-lg hover:shadow-current/20
      `}
      style={{
        gridColumn: element.x,
        gridRow: element.y,
      }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-[0.45rem] sm:text-[0.55rem] dark:text-white/50 text-gray-600 self-start leading-none">
        {element.atomicNumber}
      </span>
      <span className={`text-sm sm:text-lg font-bold leading-none ${colors.text}`}>
        {element.symbol}
      </span>
      <span className="text-[0.4rem] sm:text-[0.5rem] dark:text-white/40 text-gray-500 leading-none truncate w-full text-center">
        {element.atomicMass}
      </span>
      {/* State dot */}
      <span
        className={`absolute top-0.5 right-0.5 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${
          currentState === 'Gas'
            ? 'bg-red-400'
            : currentState === 'Liquid'
              ? 'bg-sky-400 animate-pulse'
              : 'dark:bg-white/30 bg-gray-400'
        }`}
      />
    </motion.button>
  );
}
