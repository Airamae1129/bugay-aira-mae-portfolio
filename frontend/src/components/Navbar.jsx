import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import PawPrint from './PawPrint';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'tools', label: 'Security Tools' },
  { id: 'devstack', label: 'Dev Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled ? 'glass-panel border-b border-cyan-400/10' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
        <button
          data-testid="nav-brand-logo"
          onClick={() => go('hero')}
          className="flex items-center gap-2.5 group"
        >
          <span className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-cyan-400/30 bg-cyan-400/5 text-cyber-cyan transition-colors duration-300 group-hover:bg-cyan-400/15">
            <PawPrint className="w-4.5 h-4.5 w-[18px] h-[18px]" />
          </span>
          <span className="font-display font-bold tracking-tight text-slate-50 text-lg">
            aira<span className="text-cyber-cyan">.</span>mae
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="px-3.5 py-2 text-sm text-slate-400 hover:text-cyber-cyan transition-colors duration-300 font-medium"
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="nav-cta-contact"
            onClick={() => go('contact')}
            className="ml-3 px-5 py-2 rounded-full text-sm font-semibold bg-cyber-cyan text-cyber-bg hover:shadow-[0_0_24px_rgba(0,240,255,0.45)] transition-shadow duration-300"
          >
            Hire Me
          </button>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          className="lg:hidden text-slate-200 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden glass-panel border-b border-cyan-400/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  data-testid={`nav-mobile-link-${l.id}`}
                  onClick={() => go(l.id)}
                  className="text-left px-3 py-3 text-slate-300 hover:text-cyber-cyan transition-colors font-medium border-b border-slate-800/60 last:border-0"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
