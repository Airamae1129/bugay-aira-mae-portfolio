import { motion } from 'framer-motion';
import { BadgeCheck, MapPin, GraduationCap } from 'lucide-react';
import PawPrint from './PawPrint';
import { Reveal, SectionHeader } from './Reveal';
import { PROFILE, ABOUT_SKILLS, CERTS } from '../data/portfolio';

const SKILL_ICONS = {
  PHP: 'text-indigo-400',
  HTML: 'text-orange-400',
  CSS: 'text-sky-400',
  JavaScript: 'text-yellow-300',
  'React JS': 'text-cyan-300',
  Python: 'text-emerald-400'
};

const SKILL_TAGS = {
  PHP: '<?php',
  HTML: '<html>',
  CSS: '{ css }',
  JavaScript: 'js =>',
  'React JS': '<App />',
  Python: 'py_'
};

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="relative py-24 md:py-32 overflow-hidden">
      <PawPrint className="absolute top-16 right-[6%] w-10 h-10 text-cyber-paw/15 animate-paw-drift hidden lg:block" />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          number="01"
          title="About Me"
          subtitle="Cybersecurity professional by day, cat supervisor around the clock."
        />

        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-16 items-start">
          <Reveal className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyber-cyan/25 via-transparent to-cyber-purple/25 blur-xl" />
              <div className="relative glass-panel rounded-3xl p-3 scan-line overflow-hidden">
                <img
                  src={PROFILE.photo}
                  alt="Aira Mae — professional portrait"
                  data-testid="about-photo"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-xl px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="font-display font-bold text-slate-50 text-sm">{PROFILE.fullName}</p>
                    <p className="font-code text-[10px] tracking-[0.2em] uppercase text-cyber-cyan">24/7 Cyber Defender</p>
                  </div>
                  <PawPrint className="w-6 h-6 text-cyber-paw" />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -top-5 -right-5 glass-panel rounded-2xl px-4 py-3 hidden sm:block"
              >
                <p className="font-display text-2xl font-black text-cyber-cyan">2+</p>
                <p className="text-[10px] font-code tracking-widest uppercase text-slate-400">Years in SOC</p>
              </motion.div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">{PROFILE.summary}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-5 text-sm md:text-base text-slate-400 leading-relaxed">
                Alongside security operations and consulting, I build for the web — crafting secure, dynamic
                applications with PHP, JavaScript, React, and Python. Curious and proactive, I stay ahead of
                evolving threats to keep clients secure and confident.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-code text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyber-cyan" /> {PROFILE.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-cyber-cyan" /> BS Computer Science · Magna Cum Laude
                </span>
              </div>
            </Reveal>

            <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {ABOUT_SKILLS.map((skill, i) => (
                <Reveal key={skill} delay={0.08 * i} y={20}>
                  <div
                    data-testid={`skill-card-${skill.toLowerCase().replace(/[^a-z]/g, '')}`}
                    className="glass-card rounded-2xl px-4 py-5 group cursor-default"
                  >
                    <span className={`font-code text-xs ${SKILL_ICONS[skill]}`}>{SKILL_TAGS[skill]}</span>
                    <p className="mt-2 font-display font-bold text-slate-100 text-sm md:text-base group-hover:text-cyber-cyan transition-colors duration-300">
                      {skill}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-9">
                <p className="overline-label mb-4">Certifications & Training</p>
                <div className="flex flex-wrap gap-2">
                  {CERTS.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1.5 text-[11px] font-code px-3 py-1.5 rounded-full border border-slate-700/80 text-slate-300 hover:border-cyber-cyan/50 hover:text-cyber-cyan transition-colors duration-300"
                    >
                      <BadgeCheck className="w-3 h-3 text-cyber-cyan" />
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
