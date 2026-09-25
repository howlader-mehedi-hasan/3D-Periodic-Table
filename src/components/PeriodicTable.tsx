import { elements } from '../data/elements';
import { ElementCell } from './ElementCell';

export function PeriodicTable() {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div
        className="grid gap-0.5 sm:gap-1 min-w-[720px]"
        style={{
          gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
          gridTemplateRows: 'repeat(10, minmax(0, 1fr))',
        }}
      >
        {elements.map((el) => (
          <ElementCell key={el.atomicNumber} element={el} />
        ))}

        {/* Lanthanide / Actinide labels in the gap area */}
        <div
          className="flex items-center justify-end pr-1 text-[0.5rem] sm:text-xs text-pink-400/60 font-medium"
          style={{ gridColumn: '1 / 3', gridRow: 9 }}
        >
          Lanthanides →
        </div>
        <div
          className="flex items-center justify-end pr-1 text-[0.5rem] sm:text-xs text-rose-400/60 font-medium"
          style={{ gridColumn: '1 / 3', gridRow: 10 }}
        >
          Actinides →
        </div>
      </div>
    </div>
  );
}
