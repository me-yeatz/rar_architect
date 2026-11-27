import { CLIENT_ENDORSEMENT, PROCESS_STAGES } from '../data/practiceData';

export function PracticeMethodSection() {
  return (
    <section
      id="method"
      className="bg-[#0F0F0F] text-white py-16 lg:py-24 border-b border-white/10"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/15">
          <div>
            <p className="text-sm font-semibold text-[#F5A33E]">05. The RAR Method</p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ textWrap: 'balance' }}
            >
              Four synchronized gates from feasibility to CCC handover.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-[46ch] leading-relaxed">
            Parallel architectural and engineering sign-offs prevent redesign loops
            between Planning Permission, Building Plan approval, and site construction.
          </p>
        </div>

        {/* 4-Column Connected Architectural Gate Track */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/15 rounded-sm overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/15">
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.number}
              className="p-6 sm:p-7 flex flex-col justify-between bg-[#151515]"
            >
              <div>
                <div className="h-[2px] w-10 bg-[#EB8B1D] mb-5" aria-hidden="true" />
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm font-semibold text-[#F5A33E] tabular-nums">
                    {stage.number}
                  </span>
                  <span className="text-xs font-medium text-neutral-400 tabular-nums">
                    {stage.duration}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {stage.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-neutral-300">
                  {stage.description}
                </p>
              </div>

              <p className="mt-6 pt-4 border-t border-white/15 text-xs font-medium text-white">
                Output:{' '}
                <span className="text-neutral-300">{stage.keyOutput}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Client Endorsement Banner */}
        <blockquote className="mt-10 bg-white text-[#0F0F0F] border border-[#E5E5E3] rounded-sm p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold text-[#A65604] mb-2">
              Client Proof &amp; Delivery Track Record
            </p>
            <p className="font-display text-xl sm:text-2xl font-semibold text-[#0F0F0F] leading-snug">
              “{CLIENT_ENDORSEMENT.quote}”
            </p>
          </div>
          <div className="lg:col-span-5 lg:border-l lg:border-[#E5E5E3] lg:pl-8 space-y-3">
            <p className="text-sm leading-relaxed text-[#4A4A48]">
              {CLIENT_ENDORSEMENT.beforeChangeOutcome}
            </p>
            <footer className="pt-3 border-t border-[#E5E5E3] flex flex-wrap items-center gap-2 text-xs text-[#666663]">
              <span className="font-semibold text-[#0F0F0F]">
                {CLIENT_ENDORSEMENT.author}
              </span>
              <span aria-hidden="true">·</span>
              <span>{CLIENT_ENDORSEMENT.role}</span>
              <span aria-hidden="true">·</span>
              <span>{CLIENT_ENDORSEMENT.organization}</span>
            </footer>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
