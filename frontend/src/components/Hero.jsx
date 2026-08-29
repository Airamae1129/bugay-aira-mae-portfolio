import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ShieldCheck, Mail } from 'lucide-react';
import PawPrint from './PawPrint';
import { PROFILE } from '../data/portfolio';

function ParticleNetwork() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let w, h, raf;
    const N = 55;
    const nodes = [];
    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < N; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.6,
        c: Math.random() > 0.5 ? '0,240,255' : '168,85,247'
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${n.c},0.75)`;
        ctx.fill();
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(56,189,248,${(1 - d / 130) * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-60" aria-hidden="true" />;
}

const lineVariants = {
  hidden: { y: '110%' },
  show: (i) => ({
    y: '0%',
    transition: { duration: 0.9, delay: 0.55 + i * 0.14, ease: [0.22, 1, 0.36, 1] }
  })
};

export default function Hero({ onNavigate }) {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 700], [0, 160]);
  const opacity = useTransform(scrollY, [0, 550], [1, 0]);

  return (
    <section id="hero" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={PROFILE.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        data-testid="hero-video"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg/65 via-cyber-bg/50 to-cyber-bg" />
      <div className="absolute inset-0 cyber-grid-bg opacity-60" />
      <ParticleNetwork />

      <PawPrint className="absolute top-[18%] right-[10%] w-8 h-8 text-cyber-paw/30 animate-paw-drift hidden md:block" />
      <PawPrint className="absolute bottom-[24%] left-[7%] w-6 h-6 text-cyber-cyan/25 animate-paw-drift hidden md:block" style={{ animationDelay: '2s' }} />

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full pt-28 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="inline-flex items-center gap-2.5 glass-panel rounded-full px-4 py-2 mb-8"
          data-testid="hero-status-badge"
        >
          <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse-dot" />
          <span className="font-code text-[11px] tracking-[0.22em] uppercase text-slate-300">
            SOC Guardian Mode: Active
          </span>
          <PawPrint className="w-3.5 h-3.5 text-cyber-paw" />
        </motion.div>

        <h1 className="font-display font-black tracking-tight leading-[1.02] text-5xl sm:text-6xl lg:text-8xl" data-testid="hero-title">
          <span className="block overflow-hidden pb-1">
            <motion.span custom={0} variants={lineVariants} initial="hidden" animate="show" className="block text-slate-50">
              AIRA MAE
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="show"
              className="block text-glow-cyan bg-gradient-to-r from-cyber-cyan via-sky-400 to-cyber-purple bg-clip-text text-transparent"
            >
              SECURES THE WEB
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-5 font-code text-xs sm:text-sm tracking-[0.18em] uppercase text-cyber-cyan"
          data-testid="hero-roles"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-5 max-w-xl text-sm sm:text-base text-slate-300/90 leading-relaxed"
        >
          {PROFILE.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.38, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <button
            data-testid="hero-cta-experience"
            onClick={() => onNavigate('experience')}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-cyber-cyan text-cyber-bg font-semibold text-sm transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(0,240,255,0.5)]"
          >
            <ShieldCheck className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
            View My Experience
          </button>
          <button
            data-testid="hero-cta-contact"
            onClick={() => onNavigate('contact')}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full glass-panel text-slate-100 font-semibold text-sm transition-colors duration-300 hover:border-cyber-purple/60 hover:text-cyber-purple"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        data-testid="hero-scroll-indicator"
        onClick={() => onNavigate('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-400 hover:text-cyber-cyan transition-colors"
        aria-label="Scroll to about"
      >
        <span className="font-code text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce-soft" />
      </motion.button>
    </section>
  );
}
