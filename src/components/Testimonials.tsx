import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Reveal, TiltCard } from './InteractiveEffects';

export const Testimonials: React.FC = () => {
  const [failedAvatars, setFailedAvatars] = useState<Record<string, boolean>>({});

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#60A5FA] mb-3">
                Client Testimonials
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
                style={{ textWrap: 'balance' }}
              >
                Trusted by Founders &amp; Brand Leaders
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B3B8C5] max-w-md leading-relaxed">
              Direct partnerships built on fast execution, clear communication, and
              quantifiable business outcomes.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.08} className="flex">
              <TiltCard className="w-full glass-surface border border-white/[0.08] hover:border-[#2563EB]/45 p-7 sm:p-8 flex flex-col justify-between transition-colors duration-200">
                <div>
                  {/* 5-Star Rating + Measured Outcome */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div
                      className="flex items-center gap-1"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {Array.from({ length: item.rating }).map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="w-4 h-4 fill-[#2563EB] text-[#2563EB]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="font-mono-tabular text-xs font-medium text-[#60A5FA]">
                      {item.outcome}
                    </span>
                  </div>

                  <blockquote className="text-sm sm:text-base text-white/90 leading-relaxed mb-8">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Attributable Client Profile */}
                <div className="pt-5 border-t border-white/[0.08] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/[0.15] bg-[#0B1120] shrink-0 flex items-center justify-center">
                    {!failedAvatars[item.id] ? (
                      <img
                        src={item.avatar}
                        alt={`${item.name}, ${item.role} at ${item.company}`}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        onError={() =>
                          setFailedAvatars((prev) => ({ ...prev, [item.id]: true }))
                        }
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="font-display text-sm font-bold text-white">
                        {item.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white truncate">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#B3B8C5] truncate">
                      {item.role} · {item.company}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
