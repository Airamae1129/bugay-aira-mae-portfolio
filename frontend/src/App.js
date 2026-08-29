import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Experience from './components/Experience';
import Tools from './components/Tools';
import DevStack from './components/DevStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  const navigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: id === 'hero' ? 0 : -64 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="bg-cyber-bg text-slate-100 min-h-screen">
      <Navbar onNavigate={navigate} />
      <main>
        <Hero onNavigate={navigate} />
        <Marquee />
        <About />
        <Experience />
        <Tools />
        <DevStack />
        <Projects />
        <Contact />
      </main>
      <Footer onNavigate={navigate} />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
