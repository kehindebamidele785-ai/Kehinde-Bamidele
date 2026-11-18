import React, { useState } from 'react';
import {
  Linkedin,
  Github,
  Mail,
  MessageCircle,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { RippleButton } from './InteractiveEffects';

interface FooterProps {
  onNavigate: (id: string) => void;
}

const QUICK_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError(null);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail.trim())) {
      setNewsletterError('Enter a valid email address.');
      return;
    }
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050505]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.08]">
          {/* Brand Summary */}
          <div className="md:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-block font-display text-2xl font-bold tracking-tight text-white"
            >
              KB Dev
            </a>
            <p className="text-sm text-[#B3B8C5] leading-relaxed max-w-xs">
              Digital Solutions Specialist crafting high-converting websites,
              commercial video edits, and AI automation systems for modern
              businesses.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KB Dev on LinkedIn"
                className="w-9 h-9 rounded-lg border border-white/[0.1] bg-[#0B1120]/70 flex items-center justify-center text-[#B3B8C5] hover:text-white hover:border-[#2563EB] transition-colors"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KB Dev on GitHub"
                className="w-9 h-9 rounded-lg border border-white/[0.1] bg-[#0B1120]/70 flex items-center justify-center text-[#B3B8C5] hover:text-white hover:border-[#2563EB] transition-colors"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/15550192834"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KB Dev on WhatsApp"
                className="w-9 h-9 rounded-lg border border-white/[0.1] bg-[#0B1120]/70 flex items-center justify-center text-[#B3B8C5] hover:text-white hover:border-[#2563EB] transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KB Dev on Fiverr"
                className="w-9 h-9 rounded-lg border border-white/[0.1] bg-[#0B1120]/70 flex items-center justify-center text-[#B3B8C5] hover:text-white hover:border-[#2563EB] transition-colors"
              >
                <Briefcase className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:hello@kbdev.studio"
                aria-label="Email KB Dev"
                className="w-9 h-9 rounded-lg border border-white/[0.1] bg-[#0B1120]/70 flex items-center justify-center text-[#B3B8C5] hover:text-white hover:border-[#2563EB] transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-display text-sm font-semibold text-white">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                    className="text-sm text-[#B3B8C5] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-display text-sm font-semibold text-white">
              Newsletter Subscription
            </h3>
            <p className="text-sm text-[#B3B8C5] leading-relaxed">
              Occasional dispatches on conversion web architecture, practical AI
              workflows, and commercial video production. No spam.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/40 text-sm text-white">
                <CheckCircle2
                  className="w-4 h-4 text-[#60A5FA] shrink-0"
                  aria-hidden="true"
                />
                <span>You&apos;re subscribed to KB Dev dispatches.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <label htmlFor="footer-newsletter" className="sr-only">
                    Email address for newsletter
                  </label>
                  <input
                    id="footer-newsletter"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#0B1120]/80 border border-white/[0.1] text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[#2563EB]"
                  />
                  <RippleButton
                    type="submit"
                    variant="primary"
                    className="px-5 py-2.5 text-sm"
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </RippleButton>
                </div>
                {newsletterError && (
                  <p className="text-xs text-red-300">{newsletterError}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B3B8C5]">
          <p>&copy; {new Date().getFullYear()} KB Dev. All rights reserved.</p>
          <p>Website Design · Video Editing · AI Automation</p>
        </div>
      </div>
    </footer>
  );
};
