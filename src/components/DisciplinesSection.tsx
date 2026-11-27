import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DISCIPLINES } from '../data/practiceData';

interface DisciplinesSectionProps {
  onSelectDiscipline: (typologyPreset: string) => void;
}

export function DisciplinesSection({ onSelectDiscipline }: DisciplinesSectionProps) {
  const [activeId, setActiveId] = useState<string>(DISCIPLINES[0].id);
  const activeDiscipline =
    DISCIPLINES.find((d) => d.id === activeId) ?? DISCIPLINES[0];

  return (
    <section
      id="disciplines"
      className="bg-[#F7F7F5] py-16 lg:py-24 border-b border-[#E5E5E3]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E5E5E3]">
          <div>
            <p className="text-sm font-semibold text-[#A65604]">
              01. Integrated Disciplines
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F0F0F]"
              style={{ textWrap: 'balance' }}
            >
              One studio accountable from schematic massing to structural sign-off.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4A4A48] max-w-[46ch] leading-relaxed">
            Select a core discipline to inspect deliverables, technical scope, and
            authority coordination standards.
          </p>
        </div>

        {/* Master-Detail Interactive Architectural Workbench */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 border border-[#E5E5E3] bg-white rounded-sm overflow-hidden items-stretch">
          {/* Left Selector Rail */}
          <div
            role="tablist"
            aria-label="Practice Disciplines"
            className="lg:col-span-5 divide-y divide-[#E5E5E3] border-b lg:border-b-0 lg:border-r border-[#E5E5E3] bg-[#F7F7F5]/60 flex flex-col"
          >
            {DISCIPLINES.map((item) => {
              const isActive = item.id === activeDiscipline.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left px-6 py-6 flex items-start justify-between gap-4 transition-colors duration-150 flex-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#EB8B1D] ${
                    isActive
                      ? 'bg-[#0F0F0F] text-white'
                      : 'bg-white text-[#0F0F0F] hover:bg-[#F7F7F5]'
                  }`}
                >
                  <div>
                    <span
                      className={`font-mono text-xs font-semibold tabular-nums ${
                        isActive ? 'text-[#F5A33E]' : 'text-[#A65604]'
                      }`}
                    >
                      {item.number}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p
                      className={`mt-1.5 text-xs leading-relaxed ${
                        isActive ? 'text-neutral-300' : 'text-[#666663]'
                      }`}
                    >
                      {item.typologyPreset}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                      isActive ? 'text-[#EB8B1D] translate-x-0.5' : 'text-[#666663]'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detail Panel */}
          <div
            role="tabpanel"
            className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between bg-white"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#E5E5E3]">
                <span className="font-mono text-sm font-semibold text-[#A65604] tabular-nums">
                  {activeDiscipline.number} Discipline Specification
                </span>
                <span className="text-xs font-medium text-[#666663]">
                  Typical Sector: {activeDiscipline.typologyPreset}
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F0F0F]">
                {activeDiscipline.title}
              </h3>

              <p className="mt-4 text-base leading-[1.7] text-[#4A4A48] max-w-[60ch]">
                {activeDiscipline.summary}
              </p>

              <div className="mt-8">
                <h4 className="font-display text-sm font-bold text-[#0F0F0F] mb-4">
                  Core Technical Deliverables
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeDiscipline.deliverables.map((deliv) => (
                    <li
                      key={deliv}
                      className="p-3.5 bg-[#F7F7F5] border border-[#E5E5E3] rounded-sm text-sm text-[#0F0F0F] flex items-start gap-2.5"
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 bg-[#EB8B1D] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E5E3] flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#4A4A48] max-w-[44ch]">
                <span className="font-semibold text-[#0F0F0F]">Measured Impact: </span>
                {activeDiscipline.outcomeMetric}
              </p>

              <button
                type="button"
                onClick={() => onSelectDiscipline(activeDiscipline.typologyPreset)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0F0F0F] bg-[#EB8B1D] hover:bg-[#D67A12] rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Inquire Scope
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
