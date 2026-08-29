import { Radar, ShieldCheck, Workflow, ClipboardList, Eye, Network, BrickWall, Bug, Scale, Lock } from 'lucide-react';
import { Reveal, SectionHeader } from './Reveal';
import { TOOL_CATEGORIES } from '../data/portfolio';

const ICONS = { Radar, ShieldCheck, Workflow, ClipboardList, Eye, Network, BrickWall, Bug, Scale };

export default function Tools() {
  return (
    <section id="tools" data-testid="tools-section" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          number="03"
          title="Security Tools & Technologies"
          subtitle="The arsenal I work with daily across security operations, threat intelligence, and incident response."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOOL_CATEGORIES.map((cat, i) => {
            const Icon = ICONS[cat.icon] || Lock;
            return (
              <Reveal key={cat.id} delay={0.06 * i} y={24}>
                <div
                  data-testid={`tools-category-${cat.id}`}
                  className="glass-card rounded-2xl p-6 h-full group"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/25 text-cyber-cyan transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(0,240,255,0.35)]">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-slate-100 text-sm md:text-base leading-tight">{cat.name}</h3>
                      <p className="font-code text-[10px] text-slate-500 tracking-widest">{cat.tools.length} TOOL{cat.tools.length > 1 ? 'S' : ''}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool) => (
                      <span
                        key={tool}
                        data-testid={`tool-${tool.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-200 transition-colors duration-300 hover:border-cyber-cyan/50 hover:text-cyber-cyan"
                      >
                        <ShieldCheck className="w-3 h-3 text-cyber-cyan/70" />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
