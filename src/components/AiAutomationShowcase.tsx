import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowRight,
  Maximize2,
  X,
  Bot,
  Mail,
  Calendar,
  Send,
  Cpu,
  Upload,
} from 'lucide-react';
import { Reveal, RippleButton } from './InteractiveEffects';

interface AiAutomationShowcaseProps {
  onInquire: (topic: string) => void;
  primaryImage: string;
  secondaryImage: string | null;
  onUploadSecondary: (dataUrl: string) => void;
}

const CAPABILITIES = [
  'n8n Multi-Step Workflow Orchestration',
  'AI Agents powered by OpenAI & Google Gemini',
  'YouTube Automation, Voice & Video Rendering Pipelines',
  'Telegram, Gmail & Google Calendar Assistant Integrations',
  'Custom REST API & Webhook Business Automation',
];

export const AiAutomationShowcase: React.FC<AiAutomationShowcaseProps> = ({
  onInquire,
  primaryImage,
  secondaryImage,
  onUploadSecondary,
}) => {
  const [activeCard, setActiveCard] = useState<'primary' | 'secondary'>('primary');
  const [lightboxSlot, setLightboxSlot] = useState<'primary' | 'secondary' | null>(null);
  const secondaryInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!lightboxSlot) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxSlot(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxSlot]);

  const handleSecondaryFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onUploadSecondary(reader.result);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const renderAgentArchitectureCard = () => (
    <div className="relative w-full h-full min-h-[220px] sm:min-h-[245px] bg-[#070B14] p-5 flex flex-col justify-between overflow-hidden select-none">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.35) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      <div className="relative z-10 flex items-center justify-between text-[11px] text-[#B3B8C5] mb-3">
        <span className="font-medium text-white">
          Executive AI Agent · Telegram, Gmail &amp; Calendar
        </span>
        <span className="font-mono-tabular text-[#60A5FA]">n8n Agent Core</span>
      </div>

      <div className="relative z-10 grid grid-cols-12 items-center gap-2.5 my-auto">
        <div className="col-span-4 rounded-xl bg-[#0B1120]/95 border border-white/[0.14] p-2.5">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white mb-1">
            <Send className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" aria-hidden="true" />
            <span className="truncate">Telegram</span>
          </div>
          <span className="text-[10px] text-[#B3B8C5] block truncate">
            Inbound trigger
          </span>
        </div>

        <div className="col-span-1 h-[2px] bg-[#2563EB]/80" />

        <div className="col-span-7 rounded-xl bg-[#0B1120]/95 border border-[#2563EB]/70 p-3 shadow-[0_0_24px_-6px_rgba(37,99,235,0.5)]">
          <div className="flex items-center gap-2 mb-1">
            <Bot className="w-4 h-4 text-[#60A5FA] shrink-0" aria-hidden="true" />
            <span className="text-xs font-semibold text-white">
              OpenAI / Gemini Agent
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 pt-1.5">
            <span className="inline-flex items-center gap-1 text-[10px] text-[#B3B8C5]">
              <Cpu className="w-3 h-3 text-[#60A5FA]" aria-hidden="true" />
              Memory
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] text-[#B3B8C5]">
              <Mail className="w-3 h-3 text-[#60A5FA]" aria-hidden="true" />
              Gmail
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] text-[#B3B8C5]">
              <Calendar className="w-3 h-3 text-[#60A5FA]" aria-hidden="true" />
              Calendar
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-3 mt-2 border-t border-white/[0.08] text-[11px] text-[#B3B8C5]">
        <span>Multi-tool assistant orchestration</span>
        <span className="text-[#60A5FA] font-medium">24/7 Active</span>
      </div>
    </div>
  );

  return (
    <section
      id="ai-automation"
      className="py-20 sm:py-28 relative overflow-hidden border-t border-white/[0.06]"
    >
      {/* Ambient Cobalt Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[640px] h-[540px] rounded-full bg-[#2563EB]/16 blur-[150px]"
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Side: AI Automation Solutions */}
          <Reveal className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-sm font-medium text-[#60A5FA] mb-3">
                n8n · AI Agents · APIs
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
                style={{ textWrap: 'balance' }}
              >
                AI Automation Solutions
              </h2>
            </div>

            <p className="text-base text-[#B3B8C5] leading-relaxed">
              I build intelligent workflow automation, AI agents, chatbot systems,
              API integrations, and business process automation using{' '}
              <span className="text-white font-medium">n8n</span>,{' '}
              <span className="text-white font-medium">OpenAI</span>,{' '}
              <span className="text-white font-medium">Google Gemini</span>, and
              custom workflows connecting Telegram, Gmail, Google Calendar, and
              YouTube Automation.
            </p>

            <ul className="space-y-3 pt-2 border-t border-white/[0.08]">
              {CAPABILITIES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/90"
                >
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <RippleButton
                variant="primary"
                onClick={() => onInquire('AI Automation Solutions (n8n & AI Agents)')}
                className="px-6 py-3 text-sm"
              >
                Automate Your Workflow
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </RippleButton>
            </div>
          </Reveal>

          {/* Right Side: Layered 3D Glassmorphism Workflow Showcase Cards */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div
              className="relative space-y-6 lg:space-y-0 lg:pb-24"
              style={{ perspective: '1400px' }}
            >
              <input
                ref={secondaryInputRef}
                type="file"
                accept="image/*"
                aria-label="Upload second workflow screenshot"
                onChange={handleSecondaryFile}
                className="hidden"
              />

              {/* Secondary Supporting Card (Layered Behind / Below with Overlap) */}
              <div
                onClick={() => setActiveCard('secondary')}
                className={`relative lg:ml-auto lg:w-[88%] rounded-2xl p-[1px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] animate-kb-float-delayed cursor-pointer ${
                  activeCard === 'secondary'
                    ? 'z-30 scale-[1.01] shadow-[0_24px_70px_-16px_rgba(37,99,235,0.62)]'
                    : 'z-10 lg:translate-y-12 opacity-92 hover:opacity-100 shadow-[0_20px_50px_-18px_rgba(37,99,235,0.38)]'
                }`}
                style={{
                  background:
                    'linear-gradient(135deg, rgba(37,99,235,0.55) 0%, rgba(255,255,255,0.08) 50%, rgba(37,99,235,0.3) 100%)',
                  transform:
                    activeCard === 'secondary'
                      ? 'rotateY(-2deg) rotateX(1deg)'
                      : 'rotateY(-5deg) rotateX(2.5deg)',
                }}
              >
                <div className="rounded-[15px] glass-surface overflow-hidden">
                  <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.08] bg-[#050505]/85">
                    <div className="flex items-center gap-2 text-xs min-w-0">
                      <span className="font-medium text-white truncate">
                        Multi-Channel AI Assistant Workflow
                      </span>
                      <span aria-hidden="true" className="text-white/30">
                        ·
                      </span>
                      <span className="text-[#60A5FA] shrink-0">
                        Telegram · Gmail · Calendar
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        aria-label="Load second workflow screenshot"
                        onClick={(e) => {
                          e.stopPropagation();
                          secondaryInputRef.current?.click();
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0B1120] border border-white/[0.1] hover:border-[#2563EB] text-[11px] font-medium text-[#B3B8C5] hover:text-white transition-colors cursor-pointer"
                      >
                        <Upload className="w-3 h-3 text-[#60A5FA]" aria-hidden="true" />
                        Add Screenshot
                      </button>
                      <button
                        type="button"
                        aria-label="Expand secondary workflow preview"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxSlot('secondary');
                        }}
                        className="p-1.5 rounded-lg bg-[#0B1120] border border-white/[0.1] hover:border-[#2563EB] text-white cursor-pointer"
                      >
                        <Maximize2 className="w-3 h-3" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="relative bg-[#050505]">
                    {secondaryImage ? (
                      <>
                        <img
                          src={secondaryImage}
                          alt="n8n AI automation workflow screenshot"
                          referrerPolicy="no-referrer"
                          className="w-full h-auto max-h-[340px] object-contain mx-auto block"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 shadow-[inset_0_0_28px_rgba(37,99,235,0.22)]"
                        />
                      </>
                    ) : (
                      renderAgentArchitectureCard()
                    )}
                  </div>
                </div>
              </div>

              {/* Main Featured Card (Uploaded n8n YouTube Automation Workflow) */}
              <div
                onClick={() => setActiveCard('primary')}
                className={`relative lg:w-[92%] lg:-mt-28 rounded-2xl p-[1px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] animate-kb-float cursor-pointer group ${
                  activeCard === 'primary'
                    ? 'z-30 shadow-[0_28px_85px_-14px_rgba(37,99,235,0.68)]'
                    : 'z-20 opacity-95 hover:opacity-100 shadow-[0_20px_50px_-16px_rgba(37,99,235,0.42)]'
                }`}
                style={{
                  background:
                    'linear-gradient(135deg, rgba(37,99,235,0.8) 0%, rgba(255,255,255,0.12) 48%, rgba(37,99,235,0.5) 100%)',
                  transform:
                    activeCard === 'primary'
                      ? 'rotateY(-3deg) rotateX(1.5deg)'
                      : 'rotateY(-6deg) rotateX(3deg)',
                }}
              >
                <div className="rounded-[15px] glass-surface overflow-hidden">
                  <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.08] bg-[#050505]/92">
                    <div className="flex items-center gap-2 text-xs min-w-0">
                      <span className="font-medium text-white truncate">
                        YouTube Automation &amp; AI Agent Pipeline
                      </span>
                      <span aria-hidden="true" className="text-white/30">
                        ·
                      </span>
                      <span className="text-[#60A5FA] shrink-0">
                        n8n · AI Agent · Video APIs
                      </span>
                    </div>
                    <button
                      type="button"
                      aria-label="Inspect full resolution n8n YouTube Automation workflow"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxSlot('primary');
                      }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/50 hover:bg-[#2563EB] text-[11px] font-medium text-white transition-colors shrink-0 cursor-pointer"
                    >
                      <Maximize2 className="w-3 h-3" aria-hidden="true" />
                      Inspect Nodes
                    </button>
                  </div>

                  <div className="relative bg-[#050505] overflow-hidden">
                    <img
                      src={primaryImage}
                      alt="Real n8n YouTube Automation workflow built by KB Dev showing AI Agent, OpenRouter Chat Model, JSON Split, Voice Generator, Image Generator, Video Render, and YouTube Upload nodes"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-contain block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
                    />
                    {/* Subtle cobalt edge gradient preserving crisp node legibility */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(37,99,235,0.08) 0%, transparent 18%, transparent 82%, rgba(37,99,235,0.14) 100%)',
                        boxShadow: 'inset 0 0 36px rgba(37,99,235,0.22)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* High-Resolution Workflow Inspection Lightbox */}
      {lightboxSlot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Workflow architecture full resolution view"
          onClick={() => setLightboxSlot(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/88 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl rounded-2xl border border-[#2563EB]/50 bg-[#050505] overflow-hidden shadow-[0_0_95px_-15px_rgba(37,99,235,0.6)]"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-[#0B1120]/85">
              <span className="text-sm font-medium text-white">
                {lightboxSlot === 'primary'
                  ? 'YouTube Automation Pipeline · n8n · AI Agent · Voice & Video Render · YouTube Upload'
                  : 'Multi-Channel AI Assistant Workflow · Telegram · Gmail · Google Calendar'}
              </span>
              <button
                type="button"
                onClick={() => setLightboxSlot(null)}
                aria-label="Close zoom view"
                className="w-8 h-8 rounded-lg border border-white/[0.12] bg-[#050505] text-white hover:border-[#2563EB] flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
            <div className="p-4 sm:p-6 bg-[#050505]">
              {lightboxSlot === 'primary' ? (
                <img
                  src={primaryImage}
                  alt="Full resolution n8n YouTube Automation workflow"
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[80vh] object-contain mx-auto rounded-lg"
                />
              ) : secondaryImage ? (
                <img
                  src={secondaryImage}
                  alt="Full resolution second n8n workflow"
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[80vh] object-contain mx-auto rounded-lg"
                />
              ) : (
                renderAgentArchitectureCard()
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
