import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { RippleButton } from './InteractiveEffects';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const MARQUEE_ITEMS = [
  'Website Design',
  'Next.js & React',
  'Shopify & WordPress',
  'Promotional Video Editing',
  'After Effects Motion',
  'AI Chatbots & Assistants',
  'Business Workflow Automation',
  'Conversion Engineering',
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Radial Cobalt Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full bg-[#2563EB]/15 blur-[140px] animate-kb-glow"
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* 2-Column Split Grid with matched height (items-stretch) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Dominant Typographic Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center py-2"
          >
            <p className="text-sm font-medium text-[#60A5FA] tracking-wide mb-4">
              KB Dev · Digital Solutions Specialist
            </p>

            <h1
              className="font-display font-bold tracking-tight text-white leading-[1.08] mb-6"
              style={{
                fontSize: 'clamp(2.35rem, 4.3vw, 3.85rem)',
                textWrap: 'balance',
              }}
            >
              Building Premium Digital Experiences for Modern Businesses.
            </h1>

            <p className="text-base sm:text-lg text-[#B3B8C5] leading-relaxed max-w-xl mb-8">
              KB Dev helps ambitious companies grow faster through conversion-driven
              website design, high-retention video editing, and intelligent AI
              automation systems engineered to scale revenue and save hours every week.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <RippleButton
                variant="primary"
                onClick={() => onNavigate('portfolio')}
                className="px-6 py-3.5 text-sm sm:text-base"
              >
                View My Work
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </RippleButton>

              <RippleButton
                variant="secondary"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 text-sm sm:text-base"
              >
                <Sparkles className="w-4 h-4 text-[#60A5FA]" aria-hidden="true" />
                Let&apos;s Work Together
              </RippleButton>
            </div>
          </motion.div>

          {/* Right Column: Futuristic Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Full-Width Proof & Discipline Ribbon Below Hero Split */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/[0.08] overflow-hidden">
          <div className="flex w-max animate-kb-marquee">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center gap-6 pr-6 text-sm text-[#B3B8C5] whitespace-nowrap"
              >
                <span className="font-medium tracking-wide text-white/80">{item}</span>
                <span aria-hidden="true" className="text-[#2563EB]">
                  /
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
