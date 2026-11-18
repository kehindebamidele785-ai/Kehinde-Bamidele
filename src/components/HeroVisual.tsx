import React, { useState, useEffect, useRef } from 'react';
import { Globe, Film, Cpu, Play, CheckCircle2, ArrowRight } from 'lucide-react';

type ShowcaseMode = 'web' | 'video' | 'ai';

export const HeroVisual: React.FC = () => {
  const [mode, setMode] = useState<ShowcaseMode>('web');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [aiStep, setAiStep] = useState<number>(0);
  const [videoPlaying, setVideoPlaying] = useState<boolean>(true);
  const [playhead, setPlayhead] = useState<number>(34);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle interactive geometric lattice canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationId: number;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const nodes = Array.from({ length: 18 }, (_, i) => ({
      angle: (i / 18) * Math.PI * 2,
      radius: 72 + (i % 3) * 38,
      speed: 0.003 + (i % 4) * 0.0012,
      size: 1.5 + (i % 3) * 0.8,
    }));

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.48;

      // Ambient radial cobalt glow
      const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.max(w, h) * 0.55);
      grad.addColorStop(0, 'rgba(37, 99, 235, 0.22)');
      grad.addColorStop(0.55, 'rgba(37, 99, 235, 0.05)');
      grad.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Orbital concentric rings
      [68, 112, 156].forEach((r, idx) => {
        ctx.beginPath();
        ctx.ellipse(
          cx,
          cy,
          r * 1.15,
          r * 0.72,
          (idx === 1 ? -0.28 : 0.22) + (prefersReduced ? 0 : Math.sin(time * 0.4 + idx) * 0.04),
          0,
          Math.PI * 2
        );
        ctx.strokeStyle =
          idx === 1 ? 'rgba(37, 99, 235, 0.35)' : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Orbiting geometric nodes and subtle connections
      const coords = nodes.map((n, idx) => {
        const a = n.angle + (prefersReduced ? 0 : time * n.speed * 60);
        const tiltFactor = idx % 2 === 0 ? 0.22 : -0.28;
        const rx = Math.cos(a) * n.radius * 1.15;
        const ry = Math.sin(a) * n.radius * 0.72;
        const x = cx + rx * Math.cos(tiltFactor) - ry * Math.sin(tiltFactor);
        const y = cy + rx * Math.sin(tiltFactor) + ry * Math.cos(tiltFactor);
        return { x, y, size: n.size };
      });

      ctx.lineWidth = 0.75;
      for (let i = 0; i < coords.length; i++) {
        const next = coords[(i + 1) % coords.length];
        ctx.beginPath();
        ctx.moveTo(coords[i].x, coords[i].y);
        ctx.lineTo(next.x, next.y);
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.18)';
        ctx.stroke();
      }

      coords.forEach((p, idx) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = idx % 3 === 0 ? '#60A5FA' : 'rgba(255, 255, 255, 0.55)';
        ctx.fill();
      });

      if (!prefersReduced) {
        time += 0.016;
        animationId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  // Video playhead animation when video mode is active
  useEffect(() => {
    if (mode !== 'video' || !videoPlaying) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = setInterval(() => {
      setPlayhead((prev) => (prev >= 100 ? 0 : prev + 1.2));
    }, 100);
    return () => clearInterval(interval);
  }, [mode, videoPlaying]);

  // AI step cycle interaction
  const handleRunAiCycle = () => {
    setAiStep(1);
    setTimeout(() => setAiStep(2), 550);
    setTimeout(() => setAiStep(3), 1150);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -py * 6, y: px * 6 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="relative w-full h-full min-h-[420px] lg:min-h-[500px] rounded-2xl border border-white/[0.1] glass-surface overflow-hidden transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_80px_-24px_rgba(37,99,235,0.45)] flex flex-col justify-between p-5 sm:p-6"
    >
      {/* Background Orbital Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full"
      />

      {/* Top Interactive Discipline Selector */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-medium text-[#B3B8C5] tracking-wide">
          Interactive Discipline Preview
        </span>

        <div
          role="tablist"
          aria-label="Preview KB Dev disciplines"
          className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#050505]/80 border border-white/[0.08]"
        >
          {(
            [
              { id: 'web', label: 'Web', icon: Globe },
              { id: 'video', label: 'Video', icon: Film },
              { id: 'ai', label: 'AI', icon: Cpu },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const active = mode === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => setMode(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                  active
                    ? 'bg-[#2563EB] text-white shadow-[0_0_20px_-4px_rgba(37,99,235,0.7)]'
                    : 'text-[#B3B8C5] hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Central 3D-Inspired Glass Prism Core */}
      <div className="relative z-10 my-6 flex-1 flex items-center justify-center">
        {mode === 'web' && (
          <div className="w-full max-w-md space-y-4 animate-kb-float">
            <div className="rounded-xl border border-white/[0.12] bg-[#050505]/85 backdrop-blur-md p-4 shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.07]">
                <div className="flex items-center gap-2 text-xs text-[#B3B8C5]">
                  <span className="font-medium text-white">Storefront Architecture</span>
                  <span aria-hidden="true">·</span>
                  <span>Next.js &amp; Shopify</span>
                </div>
                <span className="font-mono-tabular text-xs text-[#60A5FA]">0.7s LCP</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 rounded-lg bg-[#0B1120] border border-white/[0.06] p-3">
                  <div className="h-2 w-16 rounded bg-[#2563EB]/70 mb-2.5" />
                  <div className="h-3 w-4/5 rounded bg-white/80 mb-2" />
                  <div className="h-2 w-3/5 rounded bg-white/25 mb-4" />
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-20 rounded-md bg-[#2563EB]" />
                    <div className="h-6 w-16 rounded-md border border-white/15" />
                  </div>
                </div>
                <div className="col-span-1 rounded-lg bg-gradient-to-br from-[#2563EB]/25 to-[#0B1120] border border-[#2563EB]/30 p-3 flex flex-col justify-between">
                  <span className="text-[11px] text-[#B3B8C5]">Conversion</span>
                  <span className="font-mono-tabular text-xl font-semibold text-white">
                    +142%
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {mode === 'video' && (
          <div className="w-full max-w-md space-y-4 animate-kb-float-delayed">
            <div className="rounded-xl border border-white/[0.12] bg-[#050505]/85 backdrop-blur-md p-4 shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.07]">
                <div className="flex items-center gap-2 text-xs text-[#B3B8C5]">
                  <span className="font-medium text-white">Commercial Cutdown Suite</span>
                  <span aria-hidden="true">·</span>
                  <span>4K 60fps</span>
                </div>
                <button
                  type="button"
                  onClick={() => setVideoPlaying((p) => !p)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#60A5FA] hover:text-white transition-colors cursor-pointer"
                >
                  <Play className="w-3 h-3" aria-hidden="true" />
                  {videoPlaying ? 'Pause' : 'Play'}
                </button>
              </div>
              {/* Simulated Multi-track Video Timeline */}
              <div className="relative space-y-2 py-2">
                <div
                  aria-hidden="true"
                  style={{ left: `${playhead}%` }}
                  className="absolute top-0 bottom-0 w-[1.5px] bg-[#2563EB] z-20 transition-all duration-100"
                />
                <div className="h-7 rounded-md bg-[#0B1120] border border-white/[0.06] flex items-center px-2 gap-1.5 overflow-hidden">
                  <div className="h-4 w-1/4 rounded bg-[#2563EB]/45 border border-[#2563EB]/60" />
                  <div className="h-4 w-2/5 rounded bg-[#2563EB]/25 border border-[#2563EB]/40" />
                  <div className="h-4 w-1/3 rounded bg-white/10" />
                </div>
                <div className="h-6 rounded-md bg-[#0B1120] border border-white/[0.06] flex items-center px-2 gap-2">
                  <div className="h-3 w-1/3 rounded bg-white/15" />
                  <div className="h-3 w-1/2 rounded bg-[#60A5FA]/30" />
                </div>
                <div className="flex items-center justify-between pt-2 text-[11px] text-[#B3B8C5]">
                  <span>Premiere Pro · After Effects</span>
                  <span className="font-mono-tabular text-white">74% Completion</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {mode === 'ai' && (
          <div className="w-full max-w-md space-y-3">
            <div className="rounded-xl border border-white/[0.12] bg-[#050505]/85 backdrop-blur-md p-4 shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.07]">
                <span className="text-xs font-medium text-white">
                  AI Lead &amp; Ops Pipeline
                </span>
                <button
                  type="button"
                  onClick={handleRunAiCycle}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#60A5FA] hover:text-white transition-colors cursor-pointer"
                >
                  Test Sequence
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </button>
              </div>
              <div className="space-y-2.5">
                {[
                  { title: 'Inbound Lead Capture', meta: 'Webhook & Form Validation' },
                  { title: 'Gemini / OpenAI Triage', meta: 'Intent Scoring & Drafting' },
                  { title: 'CRM Sync & Calendar Book', meta: 'Automated Response in 42s' },
                ].map((node, idx) => {
                  const active = aiStep >= idx + 1 || aiStep === 0;
                  const highlighted = aiStep === idx + 1;
                  return (
                    <div
                      key={node.title}
                      className={`flex items-center justify-between rounded-lg px-3 py-2.5 border transition-all duration-200 ${
                        highlighted
                          ? 'bg-[#2563EB]/20 border-[#2563EB]/70'
                          : active
                          ? 'bg-[#0B1120]/90 border-white/[0.08]'
                          : 'bg-[#0B1120]/40 border-white/[0.04] opacity-55'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-medium text-white">{node.title}</div>
                        <div className="text-[11px] text-[#B3B8C5]">{node.meta}</div>
                      </div>
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          highlighted ? 'text-[#60A5FA]' : 'text-[#2563EB]'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Clean Architectural Footer of Showcase Card */}
      <div className="relative z-10 flex items-center justify-between gap-4 pt-4 border-t border-white/[0.08] text-xs text-[#B3B8C5]">
        <span>Website Design · Video Editing · AI Automation</span>
        <span className="font-mono-tabular text-white shrink-0">KB Dev Studio</span>
      </div>
    </div>
  );
};
