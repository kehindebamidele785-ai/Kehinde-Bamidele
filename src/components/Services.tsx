import React from 'react';
import { Globe, Film, Cpu, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/portfolioData';
import { Reveal, TiltCard } from './InteractiveEffects';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const iconMap: Record<ServiceItem['iconName'], React.ComponentType<{ className?: string }>> = {
  globe: Globe,
  film: Film,
  cpu: Cpu,
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#60A5FA] mb-3">
                Core Capabilities
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
                style={{ textWrap: 'balance' }}
              >
                Three Disciplines. One Unified Growth Partner.
              </h2>
            </div>
            <p className="text-[#B3B8C5] text-sm sm:text-base max-w-md leading-relaxed">
              Instead of coordinating separate freelancers for web, video, and AI,
              work directly with a specialist who integrates every piece seamlessly.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = iconMap[service.iconName];
            return (
              <Reveal key={service.id} delay={idx * 0.08} className="flex">
                <TiltCard className="w-full glass-surface border border-white/[0.08] hover:border-[#2563EB]/50 p-7 sm:p-8 flex flex-col justify-between transition-colors duration-200">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#2563EB]/12 border border-[#2563EB]/30 flex items-center justify-center text-[#60A5FA]">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="font-mono-tabular text-sm text-[#B3B8C5]">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white tracking-tight mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#B3B8C5] leading-relaxed mb-6">
                      {service.summary}
                    </p>

                    <ul className="space-y-2.5 pt-5 border-t border-white/[0.08] mb-8">
                      {service.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-center gap-3 text-sm text-white/90"
                        >
                          <Check
                            className="w-4 h-4 text-[#2563EB] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                    <span className="text-xs text-[#B3B8C5] leading-snug">
                      {service.outcome}
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      aria-label={`Inquire about ${service.title}`}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.1] bg-[#0B1120] text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                    >
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </button>
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
