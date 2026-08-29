import { useState } from 'react';
import { ExternalLink, X, FlaskConical } from 'lucide-react';
import { Reveal, SectionHeader } from './Reveal';
import PawPrint from './PawPrint';
import { PROJECTS } from '../data/portfolio';

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" data-testid="projects-section" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          number="05"
          title="Projects"
          subtitle="Representative lab builds drawn from my real-world SOC, consulting, and web development work."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={0.08 * (i % 2)} y={28}>
              <article
                data-testid={`project-card-${i + 1}`}
                className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-cyber-bg/30 to-transparent" />
                  <span className="absolute top-4 left-4 font-code text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 rounded-full glass-panel text-cyber-cyan">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg md:text-xl text-slate-50 group-hover:text-cyber-cyan transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed flex-1">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[10px] font-code px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-code text-[11px] text-cyber-purple">{p.metric}</span>
                    <button
                      data-testid={`project-view-${i + 1}`}
                      onClick={() => setActive(p)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyber-cyan hover:gap-3 transition-all duration-300"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-5 bg-cyber-bg/80 backdrop-blur-md"
          onClick={() => setActive(null)}
          data-testid="project-modal-backdrop"
        >
          <div
            className="glass-panel rounded-3xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            data-testid="project-modal"
          >
            <div className="relative h-56">
              <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-surface to-transparent" />
              <button
                data-testid="project-modal-close"
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-cyber-cyan transition-colors"
                aria-label="Close project details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-7">
              <p className="overline-label">{active.tag}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-slate-50">{active.title}</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{active.description}</p>
              <p className="mt-4 font-code text-xs text-cyber-purple">{active.metric}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {active.tech.map((t) => (
                  <span key={t} className="text-[10px] font-code px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2.5 text-xs text-slate-500 border-t border-slate-800 pt-5">
                <FlaskConical className="w-4 h-4 text-cyber-cyan" />
                Concept build based on production SOC & web workflows
                <PawPrint className="w-4 h-4 text-cyber-paw ml-auto" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
