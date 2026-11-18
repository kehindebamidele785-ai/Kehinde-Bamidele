import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { BlogArticle } from '../data/portfolioData';
import { RippleButton } from './InteractiveEffects';

interface BlogModalProps {
  article: BlogArticle | null;
  onClose: () => void;
  onBookConsultation: (topic: string) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  article,
  onClose,
  onBookConsultation,
}) => {
  useEffect(() => {
    if (!article) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <article
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/[0.12] bg-[#050505] shadow-[0_0_90px_-20px_rgba(37,99,235,0.45)]"
      >
        <div className="sticky top-0 z-20 flex items-center justify-between gap-4 px-6 py-4 bg-[#050505]/95 backdrop-blur-xl border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs text-[#B3B8C5]">
            <span className="text-[#60A5FA] font-medium">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close article"
            className="w-9 h-9 rounded-lg border border-white/[0.1] bg-[#0B1120] text-white hover:border-[#2563EB] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="aspect-[16/9] w-full overflow-hidden bg-[#0B1120] border-b border-white/[0.08]">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-10 space-y-6">
          <h3
            id="blog-modal-title"
            className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight"
          >
            {article.title}
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-[#B3B8C5] leading-relaxed">
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-white/[0.08]">
            <h4 className="font-display text-base font-semibold text-white mb-3">
              Key Takeaways
            </h4>
            <ul className="space-y-2.5">
              {article.keyTakeaways.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-white/90"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[#2563EB] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[#B3B8C5]">
              Written by KB Dev · Digital Solutions Specialist
            </span>
            <RippleButton
              variant="primary"
              onClick={() => onBookConsultation(article.category)}
              className="px-5 py-2.5 text-sm"
            >
              Discuss {article.category}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </RippleButton>
          </div>
        </div>
      </article>
    </div>
  );
};
