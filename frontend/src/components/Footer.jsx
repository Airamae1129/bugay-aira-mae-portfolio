import { Linkedin, Mail, Phone } from 'lucide-react';
import PawPrint from './PawPrint';
import { PROFILE } from '../data/portfolio';

export default function Footer({ onNavigate }) {
  return (
    <footer className="relative border-t border-cyan-400/10 py-12" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-7">
        <div className="text-center md:text-left">
          <button
            onClick={() => onNavigate('hero')}
            className="inline-flex items-center gap-2 font-display font-bold text-lg text-slate-50"
            data-testid="footer-brand"
          >
            aira<span className="text-cyber-cyan">.</span>mae
            <PawPrint className="w-4 h-4 text-cyber-paw" data-testid="footer-cat-paw-logo" />
          </button>
          <p className="mt-1.5 font-code text-[10px] tracking-[0.18em] uppercase text-slate-500">
            {PROFILE.tagline}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            data-testid="footer-link-linkedin"
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors duration-300"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            data-testid="footer-link-email"
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            data-testid="footer-link-phone"
            href={`tel:${PROFILE.phoneHref}`}
            aria-label="Phone"
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        <p className="font-code text-[10px] text-slate-600 text-center md:text-right">
          © {new Date().getFullYear()} Aira Mae H. Bugay
          <span className="block mt-1 text-slate-700">secured with vigilance & paw prints</span>
        </p>
      </div>
    </footer>
  );
}
