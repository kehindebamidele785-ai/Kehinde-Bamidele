import React, { useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS, BlogArticle } from '../data/portfolioData';
import { Reveal, TiltCard } from './InteractiveEffects';

interface BlogProps {
  onOpenArticle: (article: BlogArticle) => void;
}

export const Blog: React.FC<BlogProps> = ({ onOpenArticle }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="blog"
      className="py-20 sm:py-28 bg-[#0B1120]/35 border-y border-white/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#60A5FA] mb-3">
                Insights &amp; Notes
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
                style={{ textWrap: 'balance' }}
              >
                Perspectives on Web Design, AI &amp; Video Growth
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#B3B8C5] max-w-md leading-relaxed">
              Practical playbooks from client builds covering conversion design,
              structured AI pipelines, and video retention.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <Reveal key={post.id} delay={idx * 0.08} className="flex">
              <TiltCard className="w-full glass-surface border border-white/[0.08] hover:border-[#2563EB]/50 overflow-hidden flex flex-col justify-between transition-colors duration-200">
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#050505] border-b border-white/[0.08] group">
                    {!failedImages[post.id] ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [post.id]: true }))
                        }
                        className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0B1120] to-[#050505]">
                        <BookOpen
                          className="w-8 h-8 text-[#2563EB] mb-2"
                          aria-hidden="true"
                        />
                        <span className="text-xs text-[#B3B8C5]">{post.category}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-7">
                    {/* Unboxed Metadata (Zero-Pill) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#B3B8C5] mb-3">
                      <span className="text-[#60A5FA] font-medium">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white tracking-tight leading-snug mb-3">
                      {post.title}
                    </h3>

                    <p className="text-sm text-[#B3B8C5] leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenArticle(post)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-[#60A5FA] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
                  >
                    Read Article
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
