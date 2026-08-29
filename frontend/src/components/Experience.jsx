import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { Reveal, SectionHeader } from './Reveal';
import { EXPERIENCE } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" data-testid="experience-section" className="relative py-24 md:py-32 bg-cyber-surface/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          number="02"
          title="Experience"
          subtitle="From national security operations to global SOC teams and strategic consulting — defending organisations across four continents."
        />

        <div className="relative" data-testid="experience-timeline">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan/60 via-cyber-purple/40 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-14">
            {EXPERIENCE.map((job, i) => (
              <div key={job.company + job.period} className={`relative md:grid md:grid-cols-2 md:gap-14 ${i % 2 === 1 ? '' : ''}`}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 md:left-1/2 top-1 md:-translate-x-1/2 z-10"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full glass-panel border-cyber-cyan/40 text-cyber-cyan shadow-[0_0_20px_rgba(0,240,255,0.25)]">
                    <Briefcase className="w-4 h-4" />
                  </span>
                </motion.div>

                <Reveal
                  delay={0.08}
                  className={`pl-14 md:pl-0 ${i % 2 === 0 ? 'md:col-start-1 md:pr-4 md:text-right' : 'md:col-start-2 md:pl-4'}`}
                >
                  <div
                    data-testid={`experience-card-${i + 1}`}
                    className="glass-card rounded-2xl p-6 md:p-7 text-left"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="font-code text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/25">
                        {job.period}
                      </span>
                      <span className="font-code text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-slate-700 text-slate-400">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-bold text-slate-50">{job.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-cyber-purple">{job.company}</p>
                    <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-2.5 text-xs md:text-sm text-slate-400 leading-relaxed">
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-cyber-cyan/70 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {job.tools.map((t) => (
                        <span key={t} className="text-[10px] font-code px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
