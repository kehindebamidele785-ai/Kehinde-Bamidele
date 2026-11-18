import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Mail,
  Linkedin,
  Github,
  Briefcase,
  Copy,
  Check,
} from 'lucide-react';
import { Reveal, RippleButton } from './InteractiveEffects';

interface ContactProps {
  preselectedTopic?: string | null;
}

const BUDGET_OPTIONS = [
  'Under $1,500',
  '$1,500 – $3,500',
  '$3,500 – $7,500',
  '$7,500+',
];

export const Contact: React.FC<ContactProps> = ({ preselectedTopic }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState(BUDGET_OPTIONS[1]);
  const [details, setDetails] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedTopic) {
      setDetails((prev) =>
        prev.trim()
          ? prev
          : `Interested in discussing a ${preselectedTopic} engagement with KB Dev.`
      );
      setSubmitted(false);
    }
  }, [preselectedTopic]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Please enter your name so KB Dev knows who to address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid business or personal email address.');
      return;
    }

    if (details.trim().length < 12) {
      setError('Please share a brief overview of your project goals (at least 12 characters).');
      return;
    }

    setSubmitted(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@kbdev.studio');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      // Fallback if clipboard API unavailable
      window.location.href = 'mailto:hello@kbdev.studio';
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle Cobalt Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[780px] h-[360px] rounded-full bg-[#2563EB]/12 blur-[140px]"
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Channels & Positioning */}
          <Reveal className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-sm font-medium text-[#60A5FA] mb-3">
                Start a Project
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5"
                style={{ textWrap: 'balance' }}
              >
                Let&apos;s Build Something High-Impact Together
              </h2>
              <p className="text-sm sm:text-base text-[#B3B8C5] leading-relaxed">
                Share your goals around website design, commercial video editing,
                or AI automation. Expect a direct response with scope options
                within one business day.
              </p>
            </div>

            {/* Direct Connection Buttons */}
            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              <div className="text-xs font-medium text-[#B3B8C5]">
                Direct Channels
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/15550192834?text=Hi%20KB%20Dev%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#0B1120]/80 border border-white/[0.1] hover:border-[#2563EB]/70 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <MessageCircle
                      className="w-4 h-4 text-[#60A5FA]"
                      aria-hidden="true"
                    />
                    WhatsApp
                  </span>
                  <span className="text-xs text-[#B3B8C5]">Chat</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#0B1120]/80 border border-white/[0.1] hover:border-[#2563EB]/70 text-sm font-medium text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#60A5FA]" aria-hidden="true" />
                    Email
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-[#B3B8C5]">
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#60A5FA]" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </>
                    )}
                  </span>
                </button>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#0B1120]/80 border border-white/[0.1] hover:border-[#2563EB]/70 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Linkedin
                      className="w-4 h-4 text-[#60A5FA]"
                      aria-hidden="true"
                    />
                    LinkedIn
                  </span>
                  <span className="text-xs text-[#B3B8C5]">Connect</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#0B1120]/80 border border-white/[0.1] hover:border-[#2563EB]/70 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[#60A5FA]" aria-hidden="true" />
                    GitHub
                  </span>
                  <span className="text-xs text-[#B3B8C5]">Code</span>
                </a>

                <a
                  href="https://www.fiverr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:col-span-2 inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#0B1120]/80 border border-white/[0.1] hover:border-[#2563EB]/70 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Briefcase
                      className="w-4 h-4 text-[#60A5FA]"
                      aria-hidden="true"
                    />
                    Fiverr Pro Profile
                  </span>
                  <span className="text-xs text-[#B3B8C5]">Hire on Fiverr</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Validated Inquiry Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="glass-surface border border-white/[0.1] rounded-2xl p-6 sm:p-9 shadow-[0_0_60px_-24px_rgba(37,99,235,0.35)]">
              {submitted ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#2563EB]/20 border border-[#2563EB]/50 flex items-center justify-center text-[#60A5FA]">
                    <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Project Inquiry Received
                  </h3>
                  <p className="text-sm sm:text-base text-[#B3B8C5] max-w-md mx-auto leading-relaxed">
                    Thank you, {name}. Your brief for{' '}
                    <span className="text-white font-medium">
                      {company.trim() || 'your business'}
                    </span>{' '}
                    ({budget}) has been logged. KB Dev will reply to{' '}
                    <span className="text-white font-medium">{email}</span> within 24
                    hours.
                  </p>
                  <RippleButton
                    variant="secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setCompany('');
                      setDetails('');
                    }}
                    className="px-5 py-2.5 text-sm"
                  >
                    Send Another Inquiry
                  </RippleButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-[#B3B8C5] mb-2"
                      >
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505]/90 border border-white/[0.1] text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#2563EB] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-[#B3B8C5] mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#050505]/90 border border-white/[0.1] text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#2563EB] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-medium text-[#B3B8C5] mb-2"
                      >
                        Company
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme Digital Inc."
                        className="w-full px-4 py-3 rounded-xl bg-[#050505]/90 border border-white/[0.1] text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#2563EB] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-budget"
                        className="block text-xs font-medium text-[#B3B8C5] mb-2"
                      >
                        Budget Range
                      </label>
                      <select
                        id="contact-budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505]/90 border border-white/[0.1] text-sm text-white focus:outline-none focus:border-[#2563EB] transition-colors cursor-pointer"
                      >
                        {BUDGET_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0B1120]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-details"
                      className="block text-xs font-medium text-[#B3B8C5] mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="contact-details"
                      required
                      rows={4}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Describe your website, video campaign, or AI automation goals and ideal timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#050505]/90 border border-white/[0.1] text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#2563EB] transition-colors resize-y"
                    />
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/35 text-xs sm:text-sm text-red-200"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" aria-hidden="true" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-[#B3B8C5]">
                      Typical response within 24 hours
                    </span>
                    <RippleButton
                      type="submit"
                      variant="primary"
                      className="px-6 py-3.5 text-sm font-semibold"
                    >
                      Send Project Brief
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </RippleButton>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
