import { motion } from 'framer-motion';

export function Reveal({ children, delay = 0, y = 32, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal>
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-code text-sm text-cyber-cyan/80 tracking-widest" data-testid={`chapter-${number}`}>
            /{number}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-cyber-cyan/40 to-transparent" />
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-50">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-400 leading-relaxed">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
