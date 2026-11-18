import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  Play,
  Pause,
  Sparkles,
  ExternalLink,
  Bot,
  Mail,
  Calendar,
  Send,
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { RippleButton } from './InteractiveEffects';

interface ProjectModalProps {
  project: ProjectItem | null;
  initialTab: 'demo' | 'case-study';
  aiWorkflowImage?: string | null;
  onClose: () => void;
  onStartProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  initialTab,
  aiWorkflowImage,
  onClose,
  onStartProject,
}) => {
  const [tab, setTab] = useState<'demo' | 'case-study'>(initialTab);
  const [demoPlayback, setDemoPlayback] = useState(true);
  const [aiQuery, setAiQuery] = useState('Enterprise redesign + CRM bot');
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  useEffect(() => {
    setTab(initialTab);
    setAiResponse(null);
  }, [project, initialTab]);

  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  const handleSimulateWorkflow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;
    setAiResponse(
      `Classified "${aiQuery.trim()}" as High-Priority B2B Engagement. CRM contact enriched, scope brief drafted, and discovery slot proposed in 42 seconds.`
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/[0.12] bg-[#050505] shadow-[0_0_90px_-20px_rgba(37,99,235,0.45)]"
      >
        {/* Top Modal Header */}
        <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-[#050505]/95 backdrop-blur-xl border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#60A5FA] font-medium mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true" className="text-white/30">
                ·
              </span>
              <span className="text-[#B3B8C5]">{project.client}</span>
            </div>
            <h3
              id="project-modal-title"
              className="font-display text-lg sm:text-xl font-bold text-white"
            >
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-[#0B1120] border border-white/[0.08]">
              <button
                type="button"
                onClick={() => setTab('demo')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  tab === 'demo'
                    ? 'bg-[#2563EB] text-white'
                    : 'text-[#B3B8C5] hover:text-white'
                }`}
              >
                Live Demo
              </button>
              <button
                type="button"
                onClick={() => setTab('case-study')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  tab === 'case-study'
                    ? 'bg-[#2563EB] text-white'
                    : 'text-[#B3B8C5] hover:text-white'
                }`}
              >
                Case Study
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="w-9 h-9 rounded-lg border border-white/[0.1] bg-[#0B1120] text-white hover:border-[#2563EB] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {tab === 'demo' ? (
            <div className="space-y-6">
              {/* Interactive Preview Frame */}
              <div className="rounded-xl border border-white/[0.1] bg-[#0B1120]/70 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#050505]">
                  <span className="text-xs text-[#B3B8C5]">
                    Interactive Showcase · {project.technologies.join(' / ')}
                  </span>
                  <span className="font-mono-tabular text-xs text-[#60A5FA]">
                    {project.impactMetric}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-7 aspect-[4/3] bg-[#050505] overflow-hidden">
                    {project.category === 'AI Automation' && !aiWorkflowImage ? (
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
                      <img
                        src={
                          project.category === 'AI Automation' && aiWorkflowImage
                            ? aiWorkflowImage
                            : project.image
                        }
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="md:col-span-5 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/[0.08]">
                    <div>
                      <h4 className="font-display text-base font-semibold text-white mb-2">
                        Interactive Walkthrough
                      </h4>
                      <p className="text-xs sm:text-sm text-[#B3B8C5] leading-relaxed mb-5">
                        {project.shortDescription}
                      </p>

                      {project.demoType === 'ai' && (
                        <form onSubmit={handleSimulateWorkflow} className="space-y-3">
                          <label
                            htmlFor="ai-demo-input"
                            className="block text-xs font-medium text-white"
                          >
                            Test Automated Lead Classifier
                          </label>
                          <input
                            id="ai-demo-input"
                            type="text"
                            value={aiQuery}
                            onChange={(e) => setAiQuery(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/[0.12] text-xs text-white focus:outline-none focus:border-[#2563EB]"
                          />
                          <RippleButton
                            type="submit"
                            variant="primary"
                            className="w-full py-2 text-xs"
                          >
                            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                            Run Sample Pipeline
                          </RippleButton>
                          {aiResponse && (
                            <p className="p-3 rounded-lg bg-[#2563EB]/15 border border-[#2563EB]/40 text-xs text-white leading-relaxed">
                              {aiResponse}
                            </p>
                          )}
                        </form>
                      )}

                      {project.demoType === 'video' && (
                        <div className="space-y-3">
                          <div className="p-3 rounded-lg bg-[#050505] border border-white/[0.08]">
                            <div className="flex items-center justify-between text-xs mb-2">
                              <span className="text-white font-medium">
                                Mastering Reel Preview
                              </span>
                              <button
                                type="button"
                                onClick={() => setDemoPlayback((p) => !p)}
                                className="inline-flex items-center gap-1 text-[#60A5FA] hover:text-white cursor-pointer"
                              >
                                {demoPlayback ? (
                                  <>
                                    <Pause className="w-3.5 h-3.5" /> Pause
                                  </>
                                ) : (
                                  <>
                                    <Play className="w-3.5 h-3.5" /> Play
                                  </>
                                )}
                              </button>
                            </div>
                            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                              <div
                                className={`h-full bg-[#2563EB] transition-all duration-700 ${
                                  demoPlayback ? 'w-3/4' : 'w-1/3'
                                }`}
                              />
                            </div>
                          </div>
                          <p className="text-xs text-[#B3B8C5]">
                            Delivered in 16:9 broadcast master, 9:16 vertical social cutdowns,
                            and clean ProRes motion templates.
                          </p>
                        </div>
                      )}

                      {(project.demoType === 'web' || project.demoType === 'commerce') && (
                        <div className="space-y-3">
                          {project.demoHighlights.map((item) => (
                            <div
                              key={item.label}
                              className="flex items-center justify-between p-3 rounded-lg bg-[#050505] border border-white/[0.08]"
                            >
                              <span className="text-xs text-[#B3B8C5]">{item.label}</span>
                              <span className="font-mono-tabular text-sm font-semibold text-white">
                                {item.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-5 mt-5 border-t border-white/[0.08] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setTab('case-study')}
                        className="text-xs font-medium text-[#60A5FA] hover:text-white inline-flex items-center gap-1 cursor-pointer"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onStartProject(project.title)}
                        className="text-xs font-medium text-white hover:text-[#60A5FA] inline-flex items-center gap-1 cursor-pointer"
                      >
                        Build Similar
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.demoHighlights.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 rounded-xl bg-[#0B1120]/70 border border-white/[0.08]"
                  >
                    <div className="text-xs text-[#B3B8C5] mb-1">{metric.label}</div>
                    <div className="font-mono-tabular text-xl font-bold text-white">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-display text-lg font-semibold text-white mb-2.5">
                    The Challenge
                  </h4>
                  <p className="text-sm sm:text-base text-[#B3B8C5] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-white mb-2.5">
                    The Architecture &amp; Solution
                  </h4>
                  <p className="text-sm sm:text-base text-[#B3B8C5] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <h4 className="font-display text-lg font-semibold text-white mb-4">
                  Measured Outcomes
                </h4>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-3 text-sm sm:text-base text-white/90"
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Modal Footer CTA */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#B3B8C5]">
              Stack: {project.technologies.join(' · ')}
            </div>
            <RippleButton
              variant="primary"
              onClick={() => onStartProject(project.title)}
              className="px-5 py-2.5 text-sm"
            >
              Request Similar Project
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </RippleButton>
          </div>
        </div>
      </div>
    </div>
  );
};
