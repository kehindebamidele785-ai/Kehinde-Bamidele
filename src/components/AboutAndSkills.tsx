import React, { useState } from 'react';
import { ABOUT_STATS, SKILLS_LIST } from '../data/portfolioData';
import { Reveal, TiltCard } from './InteractiveEffects';

const SKILL_DOMAINS = [
  'All',
  'Frontend & Web',
  'Platforms & Backend',
  'AI & Automation',
  'Creative & Motion',
] as const;

export const AboutAndSkills: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<(typeof SKILL_DOMAINS)[number]>('All');
  const [portraitError, setPortraitError] = useState(false);

  const visibleSkills =
    selectedDomain === 'All'
      ? SKILLS_LIST
      : SKILLS_LIST.filter((s) => s.domain === selectedDomain);

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-20">
        {/* About Portrait + Narrative + 4-Column Stat Strip */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14">
            {/* Left Column: KB Dev Portrait Card */}
            <Reveal className="lg:col-span-5">
              <TiltCard className="max-w-md mx-auto lg:mx-0 rounded-2xl p-[1px] bg-gradient-to-br from-[#2563EB]/65 via-white/[0.12] to-[#2563EB]/25 shadow-[0_24px_75px_-20px_rgba(37,99,235,0.48)]">
                <div className="relative aspect-square w-full overflow-hidden rounded-[15px] bg-[#0B1120]">
                  {!portraitError ? (
                    <img
                      src="/assets/aistudio/Polished_Tech_Professional_Portrait_f5a419fe.png"
                      alt="KB Dev – Digital Solutions Specialist"
                      referrerPolicy="no-referrer"
                      onError={() => setPortraitError(true)}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B1120] to-[#050505]">
                      <span className="font-display text-4xl font-bold text-white">
                        KB
                      </span>
                    </div>
                  )}

                  {/* Measured Bottom Scrim for High-Contrast Attribution */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/25 to-transparent"
                  />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <div className="font-display text-lg font-bold text-white leading-tight">
                        KB Dev
                      </div>
                      <div className="text-xs text-[#B3B8C5]">
                        Digital Solutions Specialist
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[#60A5FA] shrink-0">
                      Web · Video · AI
                    </span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            {/* Right Column: Narrative */}
            <Reveal delay={0.08} className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-sm font-medium text-[#60A5FA] mb-3">
                  About KB Dev
                </p>
                <h2
                  className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
                  style={{ textWrap: 'balance' }}
                >
                  Digital Craftsmanship Engineered for Measurable Business Growth
                </h2>
              </div>

              <div className="space-y-5 text-base sm:text-lg text-[#B3B8C5] leading-relaxed">
                <p>
                  KB Dev is a Digital Solutions Specialist focused on building
                  complete digital products and media systems that help modern
                  businesses increase sales, improve customer experience, and
                  automate repetitive operational tasks.
                </p>
                <p>
                  Every engagement combines engineering rigor with visual restraint:
                  fast, accessible websites in React, Next.js, WordPress, and Shopify;
                  commercial video narratives edited in Premiere Pro and After Effects;
                  and reliable AI workflows powered by n8n, OpenAI, and Google Gemini.
                </p>
              </div>
            </Reveal>
          </div>

          {/* 4-Column Architectural Statistics Row */}
          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {ABOUT_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-surface border border-white/[0.08] rounded-2xl p-6 sm:p-7 hover:border-[#2563EB]/45 transition-colors duration-200"
                >
                  <div className="font-display font-mono-tabular text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#B3B8C5] leading-relaxed">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Skills & Technologies Matrix */}
        <div className="pt-12 border-t border-white/[0.08]">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-sm font-medium text-[#60A5FA] mb-2">
                  Skills &amp; Technologies
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Modern Production Stack Across Code, Media &amp; AI
                </h3>
              </div>

              <div
                role="tablist"
                aria-label="Filter technologies by domain"
                className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#0B1120] border border-white/[0.08] self-start"
              >
                {SKILL_DOMAINS.map((domain) => {
                  const active = selectedDomain === domain;
                  return (
                    <button
                      key={domain}
                      role="tab"
                      type="button"
                      aria-selected={active}
                      onClick={() => setSelectedDomain(domain)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                        active
                          ? 'bg-[#2563EB] text-white'
                          : 'text-[#B3B8C5] hover:text-white'
                      }`}
                    >
                      {domain}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {visibleSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group rounded-xl border border-white/[0.08] bg-[#0B1120]/55 hover:bg-[#0B1120] hover:border-[#2563EB]/60 p-4 transition-all duration-200"
                >
                  <div className="text-sm font-semibold text-white group-hover:text-[#60A5FA] transition-colors mb-1">
                    {skill.name}
                  </div>
                  <div className="text-xs text-[#B3B8C5]">{skill.proficiency}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
