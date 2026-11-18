import React, { useState } from 'react';
import { ExternalLink, FileText, Layers, Bot, Mail, Calendar, Send } from 'lucide-react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../data/portfolioData';
import { Reveal, RippleButton, TiltCard } from './InteractiveEffects';

interface PortfolioProps {
  onOpenProject: (project: ProjectItem, initialTab: 'demo' | 'case-study') => void;
  aiWorkflowImage?: string | null;
}

const CATEGORIES = ['All', 'Website Design', 'Video Editing', 'AI Automation'] as const;

export const Portfolio: React.FC<PortfolioProps> = ({
  onOpenProject,
  aiWorkflowImage,
}) => {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('All');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28 bg-[#0B1120]/35 border-y border-white/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#60A5FA] mb-3">
                Featured Portfolio
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
                style={{ textWrap: 'balance' }}
              >
                Selected Client Work &amp; Engineered Outcomes
              </h2>
            </div>

            {/* Interactive Segmented Category Filter */}
            <div
              role="tablist"
              aria-label="Filter portfolio projects"
              className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-xl bg-[#050505] border border-white/[0.08] self-start"
            >
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                      isActive
                        ? 'bg-[#2563EB] text-white shadow-[0_0_20px_-4px_rgba(37,99,235,0.6)]'
                        : 'text-[#B3B8C5] hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const resolvedImage =
              project.category === 'AI Automation'
                ? aiWorkflowImage || ''
                : project.image;

            return (
              <Reveal key={project.id} delay={idx * 0.08} className="flex">
                <TiltCard className="w-full glass-surface border border-white/[0.08] hover:border-[#2563EB]/50 overflow-hidden flex flex-col justify-between transition-colors duration-200">
                  <div>
                    {/* Large 4:3 Preview Image Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#050505] border-b border-white/[0.08] group">
                      {resolvedImage && !failedImages[project.id] ? (
                        <img
                          src={resolvedImage}
                          alt={`${project.title} showcase preview`}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          onError={() =>
                            setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                          }
                          className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                        />
                      ) : project.category === 'AI Automation' ? (
                        <div
                          className="w-full h-full p-6 bg-[#070B14] flex flex-col justify-center gap-4"
                          style={{
                            backgroundImage:
                              'radial-gradient(rgba(148, 163, 184, 0.25) 1px, transparent 1px)',
                            backgroundSize: '18px 18px',
                          }}
                        >
                          <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="rounded-xl bg-[#0B1120] border border-white/[0.12] p-3">
                              <Send className="w-4 h-4 text-[#60A5FA] mb-1.5" aria-hidden="true" />
                              <div className="text-xs font-semibold text-white">Telegram</div>
                              <div className="text-[11px] text-[#B3B8C5]">Trigger Node</div>
                            </div>
                            <div className="rounded-xl bg-[#0B1120] border border-[#2563EB]/70 p-3 shadow-[0_0_24px_-6px_rgba(37,99,235,0.5)]">
                              <Bot className="w-4 h-4 text-[#60A5FA] mb-1.5" aria-hidden="true" />
                              <div className="text-xs font-semibold text-white">n8n AI Agent</div>
                              <div className="text-[11px] text-[#B3B8C5]">OpenAI · Gemini</div>
                            </div>
                            <div className="space-y-2">
                              <div className="rounded-lg bg-[#0B1120] border border-white/[0.12] px-3 py-2 flex items-center gap-2 text-xs text-white">
                                <Mail className="w-3.5 h-3.5 text-[#60A5FA]" aria-hidden="true" />
                                Gmail
                              </div>
                              <div className="rounded-lg bg-[#0B1120] border border-white/[0.12] px-3 py-2 flex items-center gap-2 text-xs text-white">
                                <Calendar className="w-3.5 h-3.5 text-[#60A5FA]" aria-hidden="true" />
                                Calendar
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0B1120] to-[#050505] text-center">
                          <Layers
                            className="w-10 h-10 text-[#2563EB] mb-3"
                            aria-hidden="true"
                          />
                          <span className="font-display text-lg font-semibold text-white">
                            {project.title}
                          </span>
                        </div>
                      )}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent"
                    />
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-4 text-xs">
                      <span className="font-medium text-white/95">
                        {project.impactMetric}
                      </span>
                      <span className="font-mono-tabular text-[#B3B8C5]">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8">
                    {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#60A5FA] font-medium mb-3">
                      <span>{project.category}</span>
                      <span aria-hidden="true" className="text-white/30">
                        ·
                      </span>
                      <span className="text-[#B3B8C5]">
                        {project.technologies.join(' / ')}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white tracking-tight mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#B3B8C5] leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 flex flex-wrap items-center gap-3">
                  <RippleButton
                    variant="primary"
                    onClick={() => onOpenProject(project, 'demo')}
                    className="px-4 py-2.5 text-xs sm:text-sm"
                  >
                    Live Demo
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </RippleButton>

                  <RippleButton
                    variant="secondary"
                    onClick={() => onOpenProject(project, 'case-study')}
                    className="px-4 py-2.5 text-xs sm:text-sm"
                  >
                    Case Study
                    <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                  </RippleButton>
                </div>
              </TiltCard>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
