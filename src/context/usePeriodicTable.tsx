import { createContext, useContext, useState, useMemo, useEffect, type ReactNode } from 'react';
import { elements, type Element } from '../data/elements';

type ViewMode = '2d' | '3d';
type Theme = 'dark' | 'light';

interface PeriodicTableState {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string | null;
  setActiveCategory: (c: string | null) => void;
  temperature: number;
  setTemperature: (t: number) => void;
  selectedElement: Element | null;
  setSelectedElement: (e: Element | null) => void;
  getState: (el: Element) => string;
  filteredElements: Element[];
  viewMode: ViewMode;
  setViewMode: (m: ViewMode) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  heatmapMode: 'none' | 'electronegativity';
  setHeatmapMode: (m: 'none' | 'electronegativity') => void;
}

const Ctx = createContext<PeriodicTableState | null>(null);

export function PeriodicTableProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [temperature, setTemperature] = useState(298);
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('2d');
  const [theme, setTheme] = useState<Theme>('dark');
  const [heatmapMode, setHeatmapMode] = useState<'none' | 'electronegativity'>('none');

  // Sync theme class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const getState = (el: Element): string => {
    if (el.meltingPoint === null) return 'Unknown';
    if (temperature < el.meltingPoint) return 'Solid';
    if (el.boilingPoint === null) return 'Liquid';
    if (temperature < el.boilingPoint) return 'Liquid';
    return 'Gas';
  };

  const filteredElements = useMemo(() => {
    if (!searchQuery) return elements;
    const q = searchQuery.toLowerCase();
    return elements.filter(
      (el) =>
        el.name.toLowerCase().includes(q) ||
        el.symbol.toLowerCase().includes(q) ||
        String(el.atomicNumber).includes(q)
    );
  }, [searchQuery]);

  return (
    <Ctx.Provider
      value={{
        searchQuery, setSearchQuery,
        activeCategory, setActiveCategory,
        temperature, setTemperature,
        selectedElement, setSelectedElement,
        getState, filteredElements,
        viewMode, setViewMode,
        theme, setTheme,
        heatmapMode, setHeatmapMode,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function usePeriodicTable() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('usePeriodicTable must be used within PeriodicTableProvider');
  return ctx;
}
