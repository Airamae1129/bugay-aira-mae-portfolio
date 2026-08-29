import { motion } from 'framer-motion';
import { Terminal, Atom, Braces, FileCode2, Code2, Palette } from 'lucide-react';
import { Reveal, SectionHeader } from './Reveal';
import { DEV_STACK } from '../data/portfolio';

const ICONS = { Terminal, Atom, Braces, FileCode2, Code2, Palette };

export default function DevStack() {
  return (
    <section id="devstack" data-testid="devstack-section" className="relative py-24 md:py-32 bg-cyber-surface/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          number="04"
          title="Development Stack"
          subtitle="Building and securing the web — from backend services in PHP to interactive React front-ends and Python automation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="devstack-grid">
          {DEV_STACK.map((skill, i) => {
            const Icon = ICONS[skill.icon];
            return (
              <Reveal key={skill.id} delay={0.07 * i} y={24}>
                <div
                  data-testid={`devstack-card-${skill.id}`}
                  className="glass-card rounded-2xl p-6 group relative overflow-hidden"
                >
                  <span className="absolute top-4 right-5 font-code text-[10px] text-slate-600 group-hover:text-cyber-cyan/60 transition-colors duration-300">
                    {`</${skill.id}>`}
                  </span>
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(168,85,247,0.4)]">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="mt-4 font-display font-bold text-lg text-slate-50">{skill.name}</h3>
                  <p className="mt-1 font-code text-[11px] text-slate-500">{skill.tag}</p>
                  <div className="mt-4 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-purple"
                    />
                  </div>
                  <p className="mt-2 text-right font-code text-[10px] text-cyber-cyan">{skill.level}%</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
