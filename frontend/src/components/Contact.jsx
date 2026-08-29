import { useState } from 'react';
import { Linkedin, Mail, Phone, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Reveal, SectionHeader } from './Reveal';
import { PROFILE } from '../data/portfolio';

const API = process.env.REACT_APP_BACKEND_URL;

const CHANNELS = [
  { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', value: 'aira-mae-b-143409285', href: PROFILE.linkedin, external: true },
  { id: 'email', icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { id: 'phone', icon: Phone, label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phoneHref}` }
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('send failed');
      toast.success('Message transmitted securely. I will get back to you soon.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Transmission failed — please email me directly instead.');
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    'w-full bg-slate-900/60 border border-slate-700/70 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyber-cyan/60 focus:ring-1 focus:ring-cyber-cyan/30 transition-colors duration-300';

  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 md:py-32 bg-cyber-surface/40 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          number="06"
          title="Contact Me"
          subtitle="Open an encrypted channel — whether it's a security engagement, a consulting opportunity, or a web build."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.id} delay={0.08 * i} y={20}>
                <a
                  data-testid={`contact-link-${c.id}`}
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noreferrer' : undefined}
                  className="glass-card rounded-2xl p-5 flex items-center gap-4 group"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/25 text-cyber-cyan transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(0,240,255,0.35)]">
                    <c.icon className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block font-code text-[10px] tracking-[0.2em] uppercase text-slate-500">{c.label}</span>
                    <span className="block mt-0.5 text-sm font-semibold text-slate-100 group-hover:text-cyber-cyan transition-colors duration-300 break-all">
                      {c.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="glass-panel rounded-2xl p-5 font-code text-xs text-slate-500 leading-relaxed">
                <span className="text-cyber-cyan">$</span> status --availability
                <br />
                <span className="text-emerald-400">→ Open to cybersecurity & web development opportunities</span>
                <br />
                <span className="text-cyber-cyan">$</span> location --current
                <br />
                <span className="text-slate-400">→ {PROFILE.location} · Remote worldwide</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form data-testid="contact-form" onSubmit={submit} className="glass-panel rounded-3xl p-6 md:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  data-testid="contact-form-name-input"
                  required
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Your name"
                  className={inputCls}
                />
                <input
                  data-testid="contact-form-email-input"
                  required
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="Your email"
                  className={inputCls}
                />
              </div>
              <input
                data-testid="contact-form-subject-input"
                required
                value={form.subject}
                onChange={set('subject')}
                placeholder="Subject"
                className={inputCls}
              />
              <textarea
                data-testid="contact-form-message-input"
                required
                rows={5}
                value={form.message}
                onChange={set('message')}
                placeholder="Your message..."
                className={`${inputCls} resize-none`}
              />
              <button
                data-testid="contact-form-submit-button"
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-cyber-cyan text-cyber-bg font-semibold text-sm transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(0,240,255,0.45)] disabled:opacity-60"
              >
                {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {sending ? 'Transmitting...' : 'Send Message'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
