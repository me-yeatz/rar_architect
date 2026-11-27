import { Award, ShieldCheck } from 'lucide-react';
import { COMPANY_CERTIFICATIONS } from '../data/practiceData';

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="bg-white py-16 lg:py-24 border-b border-[#E5E5E3]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E5E5E3]">
          <div>
            <p className="text-sm font-semibold text-[#A65604]">
              02. Registrations &amp; Certifications
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F0F0F]"
              style={{ textWrap: 'balance' }}
            >
              Verified professional registrations and statutory credentials.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4A4A48] max-w-[46ch] leading-relaxed">
            Every commission is delivered under the governance of our registered
            professionals and statutory company registrations.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_CERTIFICATIONS.map((cert) => (
            <article
              key={cert.id}
              className="bg-[#F7F7F5] border border-[#E5E5E3] rounded-sm p-6 flex flex-col gap-4 hover:border-[#0F0F0F] transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-sm bg-[#0F0F0F] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#EB8B1D]" aria-hidden="true" />
                </div>
                <span className="font-mono text-xs font-semibold text-[#A65604] tabular-nums text-right">
                  {cert.registrationNumber}
                </span>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold tracking-tight text-[#0F0F0F]">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#666663] mt-1">
                  {cert.issuer}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-[#4A4A48]">
                {cert.description}
              </p>

              <div className="mt-auto pt-4 border-t border-[#E5E5E3] flex items-center gap-2 text-xs text-[#666663]">
                <Award className="w-3.5 h-3.5 text-[#EB8B1D]" aria-hidden="true" />
                <span>Verified Registration</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}