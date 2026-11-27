import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE_PATH, PRACTICE_METRICS } from '../data/practiceData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onConsultClick: () => void;
  onProjectsClick: () => void;
}

export function Hero({ onConsultClick, onProjectsClick }: HeroProps) {
  return (
    <section id="top" className="bg-white border-b border-[#E5E5E3]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        {/* Top Editorial Headline Band */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-10 border-b border-[#E5E5E3]">
          <div className="lg:col-span-8">
            <p className="text-xs font-medium tracking-wide text-[#A65604] mb-4 tabular-nums">
              LAM A/R 29 · BEM C1976 · Shah Alam, Selangor Darul Ehsan
            </p>
            <h1
              className="font-display font-bold tracking-tight text-[#0F0F0F] leading-[1.06]"
              style={{
                fontSize: 'clamp(2.35rem, 4.4vw, 3.9rem)',
                textWrap: 'balance',
              }}
            >
              Architecture and structural rigor under one roof.
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between gap-5">
            <p className="text-sm sm:text-[15px] leading-[1.65] text-[#4A4A48]">
              RAR Architect &amp; Engineer Sdn. Bhd. unites tropical architectural
              design with civil, structural, and MEP engineering—balancing build
              quality with real-world economics.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onConsultClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#0F0F0F] bg-[#EB8B1D] hover:bg-[#D67A12] transition-colors duration-150 rounded-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F0F0F]"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onProjectsClick}
                className="inline-flex items-center gap-1.5 py-2 text-sm font-semibold text-[#0F0F0F] hover:text-[#A65604] underline underline-offset-4 decoration-[#EB8B1D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Explore Works
              </button>
            </div>
          </div>
        </div>

        {/* Panoramic Showcase Frame + Vertical Dark Metrics Rail */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 border border-[#E5E5E3] rounded-sm overflow-hidden items-stretch">
          <div className="lg:col-span-8 relative min-h-[280px] sm:min-h-[380px] lg:min-h-[440px] bg-[#F7F7F5]">
            <ResilientImage
              src={HERO_IMAGE_PATH}
              alt="Contemporary tropical commercial headquarters designed by RAR Architect & Engineer Sdn. Bhd."
              fallbackTitle="RAR Architectural Showcase"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-6 py-5 flex flex-wrap items-end justify-between gap-4">
              <div className="text-white">
                <p className="text-xs text-white/80">
                  Integrated Principal Submitting Person (PSP) &amp; PE Practice
                </p>
                <p className="font-display text-base sm:text-lg font-semibold mt-0.5">
                  High Rise Proposal Project STIDGARD UNIVERSITY
                </p>
              </div>
              <span className="font-mono text-xs text-[#F5A33E] tabular-nums">
                SSM 785070-P · Est. 2007
              </span>
            </div>
          </div>

          <aside className="lg:col-span-4 bg-[#0F0F0F] text-white divide-y divide-white/15 flex flex-col justify-between">
            {PRACTICE_METRICS.map((metric, index) => (
              <div
                key={metric.label}
                className="px-6 py-5 sm:px-7 flex items-start justify-between gap-4 flex-1"
              >
                <div>
                  <div className="font-display text-2xl sm:text-[28px] font-bold tracking-tight text-white tabular-nums">
                    {metric.value}
                  </div>
                  <div className="mt-0.5 text-sm font-semibold text-[#F5A33E]">
                    {metric.label}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                    {metric.context}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-neutral-500 tabular-nums pt-1">
                  0{index + 1}
                </span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
