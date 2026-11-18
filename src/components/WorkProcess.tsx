import React, { useState } from 'react';
import { WORK_PROCESS } from '../data/portfolioData';
import { Reveal } from './InteractiveEffects';
import { CheckCircle2 } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const current = WORK_PROCESS.find((s) => s.step === activeStep) || WORK_PROCESS[0];

  return (
    <section
      id="process"
      className="py-20 sm:py-28 bg-[#0B1120]/35 border-y border-white/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#60A5FA] mb-3">
                Work Process
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
                style={{ textWrap: 'balance' }}
              >
                Seven Disciplined Stages from Discovery to Support
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B3B8C5] max-w-md leading-relaxed">
              Predictable milestones, transparent staging links, and zero guesswork at
              every stage of production.
            </p>
          </div>
        </Reveal>

        {/* Interactive 7-Stage Timeline Grid */}
        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 mb-8">
            {WORK_PROCESS.map((item) => {
              const isSelected = activeStep === item.step;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(item.step)}
                  onMouseEnter={() => setActiveStep(item.step)}
                  className={`text-left rounded-xl p-4 border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                    isSelected
                      ? 'bg-[#2563EB]/18 border-[#2563EB] shadow-[0_0_24px_-8px_rgba(37,99,235,0.6)]'
                      : 'bg-[#050505]/75 border-white/[0.08] hover:border-white/[0.2]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono-tabular text-xs font-semibold ${
                        isSelected ? 'text-[#60A5FA]' : 'text-[#B3B8C5]'
                      }`}
                    >
                      0{item.step}
                    </span>
                    <span className="text-[11px] text-[#B3B8C5]">{item.cadence}</span>
                  </div>
                  <div className="font-display text-base font-bold text-white mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#B3B8C5] line-clamp-2 leading-relaxed">
                    {item.description}
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active Stage Detail Spotlight */}
        <Reveal delay={0.14}>
          <div className="glass-surface border border-white/[0.1] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-medium text-[#60A5FA] mb-2">
                <span className="font-mono-tabular">Stage 0{current.step} of 07</span>
                <span aria-hidden="true" className="text-white/30">
                  ·
                </span>
                <span className="text-[#B3B8C5]">{current.cadence}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                {current.step}. {current.title}
              </h3>
              <p className="text-sm sm:text-base text-[#B3B8C5] leading-relaxed">
                {current.description}
              </p>
            </div>

            <div className="md:text-right shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-white/[0.08]">
              <div className="text-xs text-[#B3B8C5] mb-1.5">Key Deliverable</div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                <span>{current.deliverable}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
