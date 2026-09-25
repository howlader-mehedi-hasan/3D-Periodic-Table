export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: string;
  groupBlock: string;
  standardState: string;
  meltingPoint: number | null;
  boilingPoint: number | null;
  electronConfiguration: string;
  electronegativity: number | null;
  yearDiscovered: string;
  x: number;
  y: number;
}

export const GROUP_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  "Alkali Metal":       { bg: "bg-orange-500/20",  border: "border-orange-500", text: "text-orange-300" },
  "Alkaline Earth Metal": { bg: "bg-yellow-500/20", border: "border-yellow-500", text: "text-yellow-300" },
  "Transition Metal":   { bg: "bg-blue-400/20",    border: "border-blue-400",   text: "text-blue-300" },
  "Post-Transition Metal": { bg: "bg-teal-400/20", border: "border-teal-400",   text: "text-teal-300" },
  "Metalloid":          { bg: "bg-emerald-500/20",  border: "border-emerald-500", text: "text-emerald-300" },
  "Nonmetal":           { bg: "bg-green-400/20",    border: "border-green-400",  text: "text-green-300" },
  "Halogen":            { bg: "bg-purple-400/20",   border: "border-purple-400", text: "text-purple-300" },
  "Noble Gas":          { bg: "bg-cyan-400/20",     border: "border-cyan-400",   text: "text-cyan-300" },
  "Lanthanide":         { bg: "bg-pink-400/20",     border: "border-pink-400",   text: "text-pink-300" },
  "Actinide":           { bg: "bg-rose-500/20",     border: "border-rose-500",   text: "text-rose-300" },
};

export const GROUP_HEX_COLORS: Record<string, string> = {
  "Alkali Metal":         "#f97316",
  "Alkaline Earth Metal": "#eab308",
  "Transition Metal":     "#60a5fa",
  "Post-Transition Metal":"#2dd4bf",
  "Metalloid":            "#10b981",
  "Nonmetal":             "#4ade80",
  "Halogen":              "#c084fc",
  "Noble Gas":            "#22d3ee",
  "Lanthanide":           "#f472b6",
  "Actinide":             "#f43f5e",
};

export const STATE_STYLES: Record<string, string> = {
  Solid:   "ring-1 ring-white/20",
  Liquid:  "ring-2 ring-blue-400/60 animate-pulse",
  Gas:     "ring-2 ring-red-400/40 opacity-80",
};

export const elements: Element[] = [
  // Row 1
  { atomicNumber: 1, symbol: "H", name: "Hydrogen", atomicMass: "1.008", groupBlock: "Nonmetal", standardState: "Gas", meltingPoint: 14.01, boilingPoint: 20.28, electronConfiguration: "1s¹", electronegativity: 2.20, yearDiscovered: "1766", x: 1, y: 1 },
  { atomicNumber: 2, symbol: "He", name: "Helium", atomicMass: "4.003", groupBlock: "Noble Gas", standardState: "Gas", meltingPoint: null, boilingPoint: 4.22, electronConfiguration: "1s²", electronegativity: null, yearDiscovered: "1868", x: 18, y: 1 },

  // Row 2
  { atomicNumber: 3, symbol: "Li", name: "Lithium", atomicMass: "6.941", groupBlock: "Alkali Metal", standardState: "Solid", meltingPoint: 453.69, boilingPoint: 1615, electronConfiguration: "[He] 2s¹", electronegativity: 0.98, yearDiscovered: "1817", x: 1, y: 2 },
  { atomicNumber: 4, symbol: "Be", name: "Beryllium", atomicMass: "9.012", groupBlock: "Alkaline Earth Metal", standardState: "Solid", meltingPoint: 1560, boilingPoint: 2742, electronConfiguration: "[He] 2s²", electronegativity: 1.57, yearDiscovered: "1798", x: 2, y: 2 },
  { atomicNumber: 5, symbol: "B", name: "Boron", atomicMass: "10.81", groupBlock: "Metalloid", standardState: "Solid", meltingPoint: 2349, boilingPoint: 4200, electronConfiguration: "[He] 2s² 2p¹", electronegativity: 2.04, yearDiscovered: "1808", x: 13, y: 2 },
  { atomicNumber: 6, symbol: "C", name: "Carbon", atomicMass: "12.01", groupBlock: "Nonmetal", standardState: "Solid", meltingPoint: 3823, boilingPoint: 4098, electronConfiguration: "[He] 2s² 2p²", electronegativity: 2.55, yearDiscovered: "Ancient", x: 14, y: 2 },
  { atomicNumber: 7, symbol: "N", name: "Nitrogen", atomicMass: "14.01", groupBlock: "Nonmetal", standardState: "Gas", meltingPoint: 63.15, boilingPoint: 77.36, electronConfiguration: "[He] 2s² 2p³", electronegativity: 3.04, yearDiscovered: "1772", x: 15, y: 2 },
  { atomicNumber: 8, symbol: "O", name: "Oxygen", atomicMass: "16.00", groupBlock: "Nonmetal", standardState: "Gas", meltingPoint: 54.36, boilingPoint: 90.20, electronConfiguration: "[He] 2s² 2p⁴", electronegativity: 3.44, yearDiscovered: "1774", x: 16, y: 2 },
  { atomicNumber: 9, symbol: "F", name: "Fluorine", atomicMass: "19.00", groupBlock: "Halogen", standardState: "Gas", meltingPoint: 53.53, boilingPoint: 85.03, electronConfiguration: "[He] 2s² 2p⁵", electronegativity: 3.98, yearDiscovered: "1886", x: 17, y: 2 },
  { atomicNumber: 10, symbol: "Ne", name: "Neon", atomicMass: "20.18", groupBlock: "Noble Gas", standardState: "Gas", meltingPoint: 24.56, boilingPoint: 27.07, electronConfiguration: "[He] 2s² 2p⁶", electronegativity: null, yearDiscovered: "1898", x: 18, y: 2 },

  // Row 3
  { atomicNumber: 11, symbol: "Na", name: "Sodium", atomicMass: "22.99", groupBlock: "Alkali Metal", standardState: "Solid", meltingPoint: 370.87, boilingPoint: 1156, electronConfiguration: "[Ne] 3s¹", electronegativity: 0.93, yearDiscovered: "1807", x: 1, y: 3 },
  { atomicNumber: 12, symbol: "Mg", name: "Magnesium", atomicMass: "24.31", groupBlock: "Alkaline Earth Metal", standardState: "Solid", meltingPoint: 923, boilingPoint: 1363, electronConfiguration: "[Ne] 3s²", electronegativity: 1.31, yearDiscovered: "1755", x: 2, y: 3 },
  { atomicNumber: 13, symbol: "Al", name: "Aluminium", atomicMass: "26.98", groupBlock: "Post-Transition Metal", standardState: "Solid", meltingPoint: 933.47, boilingPoint: 2792, electronConfiguration: "[Ne] 3s² 3p¹", electronegativity: 1.61, yearDiscovered: "1825", x: 13, y: 3 },
  { atomicNumber: 14, symbol: "Si", name: "Silicon", atomicMass: "28.09", groupBlock: "Metalloid", standardState: "Solid", meltingPoint: 1687, boilingPoint: 3538, electronConfiguration: "[Ne] 3s² 3p²", electronegativity: 1.90, yearDiscovered: "1824", x: 14, y: 3 },
  { atomicNumber: 15, symbol: "P", name: "Phosphorus", atomicMass: "30.97", groupBlock: "Nonmetal", standardState: "Solid", meltingPoint: 317.30, boilingPoint: 553.65, electronConfiguration: "[Ne] 3s² 3p³", electronegativity: 2.19, yearDiscovered: "1669", x: 15, y: 3 },
  { atomicNumber: 16, symbol: "S", name: "Sulfur", atomicMass: "32.07", groupBlock: "Nonmetal", standardState: "Solid", meltingPoint: 388.36, boilingPoint: 717.87, electronConfiguration: "[Ne] 3s² 3p⁴", electronegativity: 2.58, yearDiscovered: "Ancient", x: 16, y: 3 },
  { atomicNumber: 17, symbol: "Cl", name: "Chlorine", atomicMass: "35.45", groupBlock: "Halogen", standardState: "Gas", meltingPoint: 171.65, boilingPoint: 239.11, electronConfiguration: "[Ne] 3s² 3p⁵", electronegativity: 3.16, yearDiscovered: "1774", x: 17, y: 3 },
  { atomicNumber: 18, symbol: "Ar", name: "Argon", atomicMass: "39.95", groupBlock: "Noble Gas", standardState: "Gas", meltingPoint: 83.80, boilingPoint: 87.30, electronConfiguration: "[Ne] 3s² 3p⁶", electronegativity: null, yearDiscovered: "1894", x: 18, y: 3 },

  // Row 4
  { atomicNumber: 19, symbol: "K", name: "Potassium", atomicMass: "39.10", groupBlock: "Alkali Metal", standardState: "Solid", meltingPoint: 336.53, boilingPoint: 1032, electronConfiguration: "[Ar] 4s¹", electronegativity: 0.82, yearDiscovered: "1807", x: 1, y: 4 },
  { atomicNumber: 20, symbol: "Ca", name: "Calcium", atomicMass: "40.08", groupBlock: "Alkaline Earth Metal", standardState: "Solid", meltingPoint: 1115, boilingPoint: 1757, electronConfiguration: "[Ar] 4s²", electronegativity: 1.00, yearDiscovered: "1808", x: 2, y: 4 },
  { atomicNumber: 21, symbol: "Sc", name: "Scandium", atomicMass: "44.96", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 1814, boilingPoint: 3109, electronConfiguration: "[Ar] 3d¹ 4s²", electronegativity: 1.36, yearDiscovered: "1879", x: 3, y: 4 },
  { atomicNumber: 22, symbol: "Ti", name: "Titanium", atomicMass: "47.87", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 1941, boilingPoint: 3560, electronConfiguration: "[Ar] 3d² 4s²", electronegativity: 1.54, yearDiscovered: "1791", x: 4, y: 4 },
  { atomicNumber: 23, symbol: "V", name: "Vanadium", atomicMass: "50.94", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 2183, boilingPoint: 3680, electronConfiguration: "[Ar] 3d³ 4s²", electronegativity: 1.63, yearDiscovered: "1801", x: 5, y: 4 },
  { atomicNumber: 24, symbol: "Cr", name: "Chromium", atomicMass: "52.00", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 2180, boilingPoint: 2944, electronConfiguration: "[Ar] 3d⁵ 4s¹", electronegativity: 1.66, yearDiscovered: "1797", x: 6, y: 4 },
  { atomicNumber: 25, symbol: "Mn", name: "Manganese", atomicMass: "54.94", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 1519, boilingPoint: 2334, electronConfiguration: "[Ar] 3d⁵ 4s²", electronegativity: 1.55, yearDiscovered: "1774", x: 7, y: 4 },
  { atomicNumber: 26, symbol: "Fe", name: "Iron", atomicMass: "55.85", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 1811, boilingPoint: 3134, electronConfiguration: "[Ar] 3d⁶ 4s²", electronegativity: 1.83, yearDiscovered: "Ancient", x: 8, y: 4 },
  { atomicNumber: 27, symbol: "Co", name: "Cobalt", atomicMass: "58.93", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 1768, boilingPoint: 3200, electronConfiguration: "[Ar] 3d⁷ 4s²", electronegativity: 1.88, yearDiscovered: "1735", x: 9, y: 4 },
  { atomicNumber: 28, symbol: "Ni", name: "Nickel", atomicMass: "58.69", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 1728, boilingPoint: 3186, electronConfiguration: "[Ar] 3d⁸ 4s²", electronegativity: 1.91, yearDiscovered: "1751", x: 10, y: 4 },
  { atomicNumber: 29, symbol: "Cu", name: "Copper", atomicMass: "63.55", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 1357.77, boilingPoint: 2835, electronConfiguration: "[Ar] 3d¹⁰ 4s¹", electronegativity: 1.90, yearDiscovered: "Ancient", x: 11, y: 4 },
  { atomicNumber: 30, symbol: "Zn", name: "Zinc", atomicMass: "65.38", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 692.68, boilingPoint: 1180, electronConfiguration: "[Ar] 3d¹⁰ 4s²", electronegativity: 1.65, yearDiscovered: "1746", x: 12, y: 4 },
  { atomicNumber: 31, symbol: "Ga", name: "Gallium", atomicMass: "69.72", groupBlock: "Post-Transition Metal", standardState: "Solid", meltingPoint: 302.91, boilingPoint: 2477, electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p¹", electronegativity: 1.81, yearDiscovered: "1875", x: 13, y: 4 },
  { atomicNumber: 32, symbol: "Ge", name: "Germanium", atomicMass: "72.63", groupBlock: "Metalloid", standardState: "Solid", meltingPoint: 1211.40, boilingPoint: 3106, electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p²", electronegativity: 2.01, yearDiscovered: "1886", x: 14, y: 4 },
  { atomicNumber: 33, symbol: "As", name: "Arsenic", atomicMass: "74.92", groupBlock: "Metalloid", standardState: "Solid", meltingPoint: 1090, boilingPoint: 887, electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p³", electronegativity: 2.18, yearDiscovered: "Ancient", x: 15, y: 4 },
  { atomicNumber: 34, symbol: "Se", name: "Selenium", atomicMass: "78.96", groupBlock: "Nonmetal", standardState: "Solid", meltingPoint: 494, boilingPoint: 958, electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁴", electronegativity: 2.55, yearDiscovered: "1817", x: 16, y: 4 },
  { atomicNumber: 35, symbol: "Br", name: "Bromine", atomicMass: "79.90", groupBlock: "Halogen", standardState: "Liquid", meltingPoint: 265.80, boilingPoint: 332.00, electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁵", electronegativity: 2.96, yearDiscovered: "1826", x: 17, y: 4 },
  { atomicNumber: 36, symbol: "Kr", name: "Krypton", atomicMass: "83.80", groupBlock: "Noble Gas", standardState: "Gas", meltingPoint: 115.79, boilingPoint: 119.93, electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁶", electronegativity: 3.00, yearDiscovered: "1898", x: 18, y: 4 },

  // Row 5
  { atomicNumber: 37, symbol: "Rb", name: "Rubidium", atomicMass: "85.47", groupBlock: "Alkali Metal", standardState: "Solid", meltingPoint: 312.46, boilingPoint: 961, electronConfiguration: "[Kr] 5s¹", electronegativity: 0.82, yearDiscovered: "1861", x: 1, y: 5 },
  { atomicNumber: 38, symbol: "Sr", name: "Strontium", atomicMass: "87.62", groupBlock: "Alkaline Earth Metal", standardState: "Solid", meltingPoint: 1050, boilingPoint: 1655, electronConfiguration: "[Kr] 5s²", electronegativity: 0.95, yearDiscovered: "1790", x: 2, y: 5 },
  { atomicNumber: 39, symbol: "Y", name: "Yttrium", atomicMass: "88.91", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 1799, boilingPoint: 3609, electronConfiguration: "[Kr] 4d¹ 5s²", electronegativity: 1.22, yearDiscovered: "1794", x: 3, y: 5 },
  { atomicNumber: 40, symbol: "Zr", name: "Zirconium", atomicMass: "91.22", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 2128, boilingPoint: 4682, electronConfiguration: "[Kr] 4d² 5s²", electronegativity: 1.33, yearDiscovered: "1789", x: 4, y: 5 },
  { atomicNumber: 41, symbol: "Nb", name: "Niobium", atomicMass: "92.91", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 2750, boilingPoint: 5017, electronConfiguration: "[Kr] 4d⁴ 5s¹", electronegativity: 1.60, yearDiscovered: "1801", x: 5, y: 5 },
  { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", atomicMass: "95.95", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 2896, boilingPoint: 4912, electronConfiguration: "[Kr] 4d⁵ 5s¹", electronegativity: 2.16, yearDiscovered: "1781", x: 6, y: 5 },
  { atomicNumber: 43, symbol: "Tc", name: "Technetium", atomicMass: "(98)", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 2430, boilingPoint: 4538, electronConfiguration: "[Kr] 4d⁵ 5s²", electronegativity: 1.90, yearDiscovered: "1937", x: 7, y: 5 },
  { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", atomicMass: "101.1", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 2607, boilingPoint: 4423, electronConfiguration: "[Kr] 4d⁷ 5s¹", electronegativity: 2.20, yearDiscovered: "1844", x: 8, y: 5 },
  { atomicNumber: 45, symbol: "Rh", name: "Rhodium", atomicMass: "102.9", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 2237, boilingPoint: 3968, electronConfiguration: "[Kr] 4d⁸ 5s¹", electronegativity: 2.28, yearDiscovered: "1803", x: 9, y: 5 },
  { atomicNumber: 46, symbol: "Pd", name: "Palladium", atomicMass: "106.4", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 1828.05, boilingPoint: 3236, electronConfiguration: "[Kr] 4d¹⁰", electronegativity: 2.20, yearDiscovered: "1803", x: 10, y: 5 },
  { atomicNumber: 47, symbol: "Ag", name: "Silver", atomicMass: "107.9", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 1234.93, boilingPoint: 2435, electronConfiguration: "[Kr] 4d¹⁰ 5s¹", electronegativity: 1.93, yearDiscovered: "Ancient", x: 11, y: 5 },
  { atomicNumber: 48, symbol: "Cd", name: "Cadmium", atomicMass: "112.4", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 594.22, boilingPoint: 1040, electronConfiguration: "[Kr] 4d¹⁰ 5s²", electronegativity: 1.69, yearDiscovered: "1817", x: 12, y: 5 },
  { atomicNumber: 49, symbol: "In", name: "Indium", atomicMass: "114.8", groupBlock: "Post-Transition Metal", standardState: "Solid", meltingPoint: 429.75, boilingPoint: 2345, electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p¹", electronegativity: 1.78, yearDiscovered: "1863", x: 13, y: 5 },
  { atomicNumber: 50, symbol: "Sn", name: "Tin", atomicMass: "118.7", groupBlock: "Post-Transition Metal", standardState: "Solid", meltingPoint: 505.08, boilingPoint: 2875, electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p²", electronegativity: 1.96, yearDiscovered: "Ancient", x: 14, y: 5 },
  { atomicNumber: 51, symbol: "Sb", name: "Antimony", atomicMass: "121.8", groupBlock: "Metalloid", standardState: "Solid", meltingPoint: 903.78, boilingPoint: 1860, electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p³", electronegativity: 2.05, yearDiscovered: "Ancient", x: 15, y: 5 },
  { atomicNumber: 52, symbol: "Te", name: "Tellurium", atomicMass: "127.6", groupBlock: "Metalloid", standardState: "Solid", meltingPoint: 722.66, boilingPoint: 1261, electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁴", electronegativity: 2.10, yearDiscovered: "1783", x: 16, y: 5 },
  { atomicNumber: 53, symbol: "I", name: "Iodine", atomicMass: "126.9", groupBlock: "Halogen", standardState: "Solid", meltingPoint: 386.85, boilingPoint: 457.40, electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁵", electronegativity: 2.66, yearDiscovered: "1811", x: 17, y: 5 },
  { atomicNumber: 54, symbol: "Xe", name: "Xenon", atomicMass: "131.3", groupBlock: "Noble Gas", standardState: "Gas", meltingPoint: 161.36, boilingPoint: 165.03, electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁶", electronegativity: 2.60, yearDiscovered: "1898", x: 18, y: 5 },

  // Row 6
  { atomicNumber: 55, symbol: "Cs", name: "Caesium", atomicMass: "132.9", groupBlock: "Alkali Metal", standardState: "Solid", meltingPoint: 301.59, boilingPoint: 944, electronConfiguration: "[Xe] 6s¹", electronegativity: 0.79, yearDiscovered: "1860", x: 1, y: 6 },
  { atomicNumber: 56, symbol: "Ba", name: "Barium", atomicMass: "137.3", groupBlock: "Alkaline Earth Metal", standardState: "Solid", meltingPoint: 1000, boilingPoint: 2170, electronConfiguration: "[Xe] 6s²", electronegativity: 0.89, yearDiscovered: "1808", x: 2, y: 6 },
  // La-Lu → row 9
  { atomicNumber: 72, symbol: "Hf", name: "Hafnium", atomicMass: "178.5", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 2506, boilingPoint: 4876, electronConfiguration: "[Xe] 4f¹⁴ 5d² 6s²", electronegativity: 1.30, yearDiscovered: "1923", x: 4, y: 6 },
  { atomicNumber: 73, symbol: "Ta", name: "Tantalum", atomicMass: "180.9", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 3290, boilingPoint: 5731, electronConfiguration: "[Xe] 4f¹⁴ 5d³ 6s²", electronegativity: 1.50, yearDiscovered: "1802", x: 5, y: 6 },
  { atomicNumber: 74, symbol: "W", name: "Tungsten", atomicMass: "183.8", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 3695, boilingPoint: 5828, electronConfiguration: "[Xe] 4f¹⁴ 5d⁴ 6s²", electronegativity: 2.36, yearDiscovered: "1783", x: 6, y: 6 },
  { atomicNumber: 75, symbol: "Re", name: "Rhenium", atomicMass: "186.2", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 3459, boilingPoint: 5869, electronConfiguration: "[Xe] 4f¹⁴ 5d⁵ 6s²", electronegativity: 1.90, yearDiscovered: "1925", x: 7, y: 6 },
  { atomicNumber: 76, symbol: "Os", name: "Osmium", atomicMass: "190.2", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 3306, boilingPoint: 5285, electronConfiguration: "[Xe] 4f¹⁴ 5d⁶ 6s²", electronegativity: 2.20, yearDiscovered: "1803", x: 8, y: 6 },
  { atomicNumber: 77, symbol: "Ir", name: "Iridium", atomicMass: "192.2", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 2719, boilingPoint: 4701, electronConfiguration: "[Xe] 4f¹⁴ 5d⁷ 6s²", electronegativity: 2.20, yearDiscovered: "1803", x: 9, y: 6 },
  { atomicNumber: 78, symbol: "Pt", name: "Platinum", atomicMass: "195.1", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 2041.40, boilingPoint: 4098, electronConfiguration: "[Xe] 4f¹⁴ 5d⁹ 6s¹", electronegativity: 2.28, yearDiscovered: "1735", x: 10, y: 6 },
  { atomicNumber: 79, symbol: "Au", name: "Gold", atomicMass: "197.0", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: 1337.33, boilingPoint: 3129, electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", electronegativity: 2.54, yearDiscovered: "Ancient", x: 11, y: 6 },
  { atomicNumber: 80, symbol: "Hg", name: "Mercury", atomicMass: "200.6", groupBlock: "Transition Metal", standardState: "Liquid", meltingPoint: 234.32, boilingPoint: 629.88, electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", electronegativity: 2.00, yearDiscovered: "Ancient", x: 12, y: 6 },
  { atomicNumber: 81, symbol: "Tl", name: "Thallium", atomicMass: "204.4", groupBlock: "Post-Transition Metal", standardState: "Solid", meltingPoint: 577, boilingPoint: 1746, electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", electronegativity: 1.62, yearDiscovered: "1861", x: 13, y: 6 },
  { atomicNumber: 82, symbol: "Pb", name: "Lead", atomicMass: "207.2", groupBlock: "Post-Transition Metal", standardState: "Solid", meltingPoint: 600.61, boilingPoint: 2022, electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", electronegativity: 1.87, yearDiscovered: "Ancient", x: 14, y: 6 },
  { atomicNumber: 83, symbol: "Bi", name: "Bismuth", atomicMass: "209.0", groupBlock: "Post-Transition Metal", standardState: "Solid", meltingPoint: 544.55, boilingPoint: 1837, electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", electronegativity: 2.02, yearDiscovered: "1753", x: 15, y: 6 },
  { atomicNumber: 84, symbol: "Po", name: "Polonium", atomicMass: "(209)", groupBlock: "Post-Transition Metal", standardState: "Solid", meltingPoint: 527, boilingPoint: 1235, electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", electronegativity: 2.00, yearDiscovered: "1898", x: 16, y: 6 },
  { atomicNumber: 85, symbol: "At", name: "Astatine", atomicMass: "(210)", groupBlock: "Halogen", standardState: "Solid", meltingPoint: 575, boilingPoint: 610, electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", electronegativity: 2.20, yearDiscovered: "1940", x: 17, y: 6 },
  { atomicNumber: 86, symbol: "Rn", name: "Radon", atomicMass: "(222)", groupBlock: "Noble Gas", standardState: "Gas", meltingPoint: 202, boilingPoint: 211.30, electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", electronegativity: 2.20, yearDiscovered: "1900", x: 18, y: 6 },

  // Row 7
  { atomicNumber: 87, symbol: "Fr", name: "Francium", atomicMass: "(223)", groupBlock: "Alkali Metal", standardState: "Solid", meltingPoint: 300, boilingPoint: 950, electronConfiguration: "[Rn] 7s¹", electronegativity: 0.70, yearDiscovered: "1939", x: 1, y: 7 },
  { atomicNumber: 88, symbol: "Ra", name: "Radium", atomicMass: "(226)", groupBlock: "Alkaline Earth Metal", standardState: "Solid", meltingPoint: 973, boilingPoint: 2010, electronConfiguration: "[Rn] 7s²", electronegativity: 0.90, yearDiscovered: "1898", x: 2, y: 7 },
  // Ac-Lr → row 10
  { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", atomicMass: "(267)", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d² 7s²", electronegativity: null, yearDiscovered: "1964", x: 4, y: 7 },
  { atomicNumber: 105, symbol: "Db", name: "Dubnium", atomicMass: "(268)", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d³ 7s²", electronegativity: null, yearDiscovered: "1967", x: 5, y: 7 },
  { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", atomicMass: "(269)", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d⁴ 7s²", electronegativity: null, yearDiscovered: "1974", x: 6, y: 7 },
  { atomicNumber: 107, symbol: "Bh", name: "Bohrium", atomicMass: "(270)", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d⁵ 7s²", electronegativity: null, yearDiscovered: "1981", x: 7, y: 7 },
  { atomicNumber: 108, symbol: "Hs", name: "Hassium", atomicMass: "(277)", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d⁶ 7s²", electronegativity: null, yearDiscovered: "1984", x: 8, y: 7 },
  { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", atomicMass: "(278)", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d⁷ 7s²", electronegativity: null, yearDiscovered: "1982", x: 9, y: 7 },
  { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", atomicMass: "(281)", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d⁸ 7s²", electronegativity: null, yearDiscovered: "1994", x: 10, y: 7 },
  { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", atomicMass: "(282)", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d⁹ 7s²", electronegativity: null, yearDiscovered: "1994", x: 11, y: 7 },
  { atomicNumber: 112, symbol: "Cn", name: "Copernicium", atomicMass: "(285)", groupBlock: "Transition Metal", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", electronegativity: null, yearDiscovered: "1996", x: 12, y: 7 },
  { atomicNumber: 113, symbol: "Nh", name: "Nihonium", atomicMass: "(286)", groupBlock: "Post-Transition Metal", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", electronegativity: null, yearDiscovered: "2003", x: 13, y: 7 },
  { atomicNumber: 114, symbol: "Fl", name: "Flerovium", atomicMass: "(289)", groupBlock: "Post-Transition Metal", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", electronegativity: null, yearDiscovered: "1998", x: 14, y: 7 },
  { atomicNumber: 115, symbol: "Mc", name: "Moscovium", atomicMass: "(290)", groupBlock: "Post-Transition Metal", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", electronegativity: null, yearDiscovered: "2003", x: 15, y: 7 },
  { atomicNumber: 116, symbol: "Lv", name: "Livermorium", atomicMass: "(293)", groupBlock: "Post-Transition Metal", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", electronegativity: null, yearDiscovered: "2000", x: 16, y: 7 },
  { atomicNumber: 117, symbol: "Ts", name: "Tennessine", atomicMass: "(294)", groupBlock: "Halogen", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", electronegativity: null, yearDiscovered: "2010", x: 17, y: 7 },
  { atomicNumber: 118, symbol: "Og", name: "Oganesson", atomicMass: "(294)", groupBlock: "Noble Gas", standardState: "Solid", meltingPoint: null, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", electronegativity: null, yearDiscovered: "2002", x: 18, y: 7 },

  // Row 9 - Lanthanides (La 57 - Lu 71)
  { atomicNumber: 57, symbol: "La", name: "Lanthanum", atomicMass: "138.9", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1193, boilingPoint: 3737, electronConfiguration: "[Xe] 5d¹ 6s²", electronegativity: 1.10, yearDiscovered: "1839", x: 3, y: 9 },
  { atomicNumber: 58, symbol: "Ce", name: "Cerium", atomicMass: "140.1", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1068, boilingPoint: 3716, electronConfiguration: "[Xe] 4f¹ 5d¹ 6s²", electronegativity: 1.12, yearDiscovered: "1803", x: 4, y: 9 },
  { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", atomicMass: "140.9", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1208, boilingPoint: 3793, electronConfiguration: "[Xe] 4f³ 6s²", electronegativity: 1.13, yearDiscovered: "1885", x: 5, y: 9 },
  { atomicNumber: 60, symbol: "Nd", name: "Neodymium", atomicMass: "144.2", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1297, boilingPoint: 3347, electronConfiguration: "[Xe] 4f⁴ 6s²", electronegativity: 1.14, yearDiscovered: "1885", x: 6, y: 9 },
  { atomicNumber: 61, symbol: "Pm", name: "Promethium", atomicMass: "(145)", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1315, boilingPoint: 3273, electronConfiguration: "[Xe] 4f⁵ 6s²", electronegativity: 1.13, yearDiscovered: "1945", x: 7, y: 9 },
  { atomicNumber: 62, symbol: "Sm", name: "Samarium", atomicMass: "150.4", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1345, boilingPoint: 2067, electronConfiguration: "[Xe] 4f⁶ 6s²", electronegativity: 1.17, yearDiscovered: "1879", x: 8, y: 9 },
  { atomicNumber: 63, symbol: "Eu", name: "Europium", atomicMass: "152.0", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1099, boilingPoint: 1802, electronConfiguration: "[Xe] 4f⁷ 6s²", electronegativity: 1.20, yearDiscovered: "1901", x: 9, y: 9 },
  { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", atomicMass: "157.3", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1585, boilingPoint: 3546, electronConfiguration: "[Xe] 4f⁷ 5d¹ 6s²", electronegativity: 1.20, yearDiscovered: "1880", x: 10, y: 9 },
  { atomicNumber: 65, symbol: "Tb", name: "Terbium", atomicMass: "158.9", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1629, boilingPoint: 3503, electronConfiguration: "[Xe] 4f⁹ 6s²", electronegativity: 1.10, yearDiscovered: "1843", x: 11, y: 9 },
  { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", atomicMass: "162.5", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1680, boilingPoint: 2840, electronConfiguration: "[Xe] 4f¹⁰ 6s²", electronegativity: 1.22, yearDiscovered: "1886", x: 12, y: 9 },
  { atomicNumber: 67, symbol: "Ho", name: "Holmium", atomicMass: "164.9", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1734, boilingPoint: 2993, electronConfiguration: "[Xe] 4f¹¹ 6s²", electronegativity: 1.23, yearDiscovered: "1878", x: 13, y: 9 },
  { atomicNumber: 68, symbol: "Er", name: "Erbium", atomicMass: "167.3", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1802, boilingPoint: 3141, electronConfiguration: "[Xe] 4f¹² 6s²", electronegativity: 1.24, yearDiscovered: "1842", x: 14, y: 9 },
  { atomicNumber: 69, symbol: "Tm", name: "Thulium", atomicMass: "168.9", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1818, boilingPoint: 2223, electronConfiguration: "[Xe] 4f¹³ 6s²", electronegativity: 1.25, yearDiscovered: "1879", x: 15, y: 9 },
  { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", atomicMass: "173.0", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1097, boilingPoint: 1469, electronConfiguration: "[Xe] 4f¹⁴ 6s²", electronegativity: 1.10, yearDiscovered: "1878", x: 16, y: 9 },
  { atomicNumber: 71, symbol: "Lu", name: "Lutetium", atomicMass: "175.0", groupBlock: "Lanthanide", standardState: "Solid", meltingPoint: 1925, boilingPoint: 3675, electronConfiguration: "[Xe] 4f¹⁴ 5d¹ 6s²", electronegativity: 1.27, yearDiscovered: "1907", x: 17, y: 9 },

  // Row 10 - Actinides (Ac 89 - Lr 103)
  { atomicNumber: 89, symbol: "Ac", name: "Actinium", atomicMass: "(227)", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 1323, boilingPoint: 3471, electronConfiguration: "[Rn] 6d¹ 7s²", electronegativity: 1.10, yearDiscovered: "1899", x: 3, y: 10 },
  { atomicNumber: 90, symbol: "Th", name: "Thorium", atomicMass: "232.0", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 2115, boilingPoint: 5061, electronConfiguration: "[Rn] 6d² 7s²", electronegativity: 1.30, yearDiscovered: "1829", x: 4, y: 10 },
  { atomicNumber: 91, symbol: "Pa", name: "Protactinium", atomicMass: "231.0", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 1841, boilingPoint: 4300, electronConfiguration: "[Rn] 5f² 6d¹ 7s²", electronegativity: 1.50, yearDiscovered: "1913", x: 5, y: 10 },
  { atomicNumber: 92, symbol: "U", name: "Uranium", atomicMass: "238.0", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 1405.30, boilingPoint: 4404, electronConfiguration: "[Rn] 5f³ 6d¹ 7s²", electronegativity: 1.38, yearDiscovered: "1789", x: 6, y: 10 },
  { atomicNumber: 93, symbol: "Np", name: "Neptunium", atomicMass: "(237)", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 917, boilingPoint: 4273, electronConfiguration: "[Rn] 5f⁴ 6d¹ 7s²", electronegativity: 1.36, yearDiscovered: "1940", x: 7, y: 10 },
  { atomicNumber: 94, symbol: "Pu", name: "Plutonium", atomicMass: "(244)", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 912.50, boilingPoint: 3501, electronConfiguration: "[Rn] 5f⁶ 7s²", electronegativity: 1.28, yearDiscovered: "1940", x: 8, y: 10 },
  { atomicNumber: 95, symbol: "Am", name: "Americium", atomicMass: "(243)", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 1449, boilingPoint: 2880, electronConfiguration: "[Rn] 5f⁷ 7s²", electronegativity: 1.13, yearDiscovered: "1944", x: 9, y: 10 },
  { atomicNumber: 96, symbol: "Cm", name: "Curium", atomicMass: "(247)", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 1613, boilingPoint: 3383, electronConfiguration: "[Rn] 5f⁷ 6d¹ 7s²", electronegativity: 1.28, yearDiscovered: "1944", x: 10, y: 10 },
  { atomicNumber: 97, symbol: "Bk", name: "Berkelium", atomicMass: "(247)", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 1259, boilingPoint: 2900, electronConfiguration: "[Rn] 5f⁹ 7s²", electronegativity: 1.30, yearDiscovered: "1949", x: 11, y: 10 },
  { atomicNumber: 98, symbol: "Cf", name: "Californium", atomicMass: "(251)", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 1173, boilingPoint: 1743, electronConfiguration: "[Rn] 5f¹⁰ 7s²", electronegativity: 1.30, yearDiscovered: "1950", x: 12, y: 10 },
  { atomicNumber: 99, symbol: "Es", name: "Einsteinium", atomicMass: "(252)", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 1133, boilingPoint: 1269, electronConfiguration: "[Rn] 5f¹¹ 7s²", electronegativity: 1.30, yearDiscovered: "1952", x: 13, y: 10 },
  { atomicNumber: 100, symbol: "Fm", name: "Fermium", atomicMass: "(257)", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 1800, boilingPoint: null, electronConfiguration: "[Rn] 5f¹² 7s²", electronegativity: 1.30, yearDiscovered: "1952", x: 14, y: 10 },
  { atomicNumber: 101, symbol: "Md", name: "Mendelevium", atomicMass: "(258)", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 1100, boilingPoint: null, electronConfiguration: "[Rn] 5f¹³ 7s²", electronegativity: 1.30, yearDiscovered: "1955", x: 15, y: 10 },
  { atomicNumber: 102, symbol: "No", name: "Nobelium", atomicMass: "(259)", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 1100, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 7s²", electronegativity: 1.30, yearDiscovered: "1957", x: 16, y: 10 },
  { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", atomicMass: "(266)", groupBlock: "Actinide", standardState: "Solid", meltingPoint: 1900, boilingPoint: null, electronConfiguration: "[Rn] 5f¹⁴ 7s² 7p¹", electronegativity: 1.30, yearDiscovered: "1961", x: 17, y: 10 },
];

export const categories = Object.keys(GROUP_COLORS);
