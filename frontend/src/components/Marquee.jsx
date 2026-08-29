import PawPrint from './PawPrint';
import { MARQUEE_ITEMS } from '../data/portfolio';

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative border-y border-cyan-400/10 bg-cyber-surface/60 py-5 overflow-hidden" data-testid="skills-marquee">
      <div className="flex w-max animate-marquee gap-10 items-center">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span className="font-display text-sm md:text-base font-semibold tracking-[0.14em] uppercase text-slate-400">
              {item}
            </span>
            <PawPrint className={`w-4 h-4 ${i % 2 === 0 ? 'text-cyber-cyan/40' : 'text-cyber-paw/40'}`} />
          </span>
        ))}
      </div>
    </div>
  );
}
