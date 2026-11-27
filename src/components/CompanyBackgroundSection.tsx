import { COMPANY_PROFILE, LOGO_ASSET_PATH } from '../data/practiceData';

export function CompanyBackgroundSection() {
  return (
    <section
      id="practice-heritage"
      className="bg-white border-b border-[#E5E5E3]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#E5E5E3] rounded-sm overflow-hidden">
          {/* Left Dark Identity Monolith */}
          <div className="lg:col-span-5 bg-[#0F0F0F] text-white p-8 sm:p-10 flex flex-col justify-between gap-8">
            <div className="bg-white rounded-sm p-6 sm:p-8 flex items-center justify-center">
              <img
                src={LOGO_ASSET_PATH}
                alt="Official emblem of RAR Architect & Engineer Sdn. Bhd."
                className="w-48 sm:w-56 h-auto object-contain"
              />
            </div>

            <div>
              <p className="text-xs font-semibold text-[#F5A33E]">
                Company Background
              </p>
              <h2
                className="mt-2 font-display text-2xl font-bold tracking-tight text-white"
                style={{ textWrap: 'balance' }}
              >
                Balancing quality architecture, economics, and enduring spaces.
              </h2>
              <p className="mt-3 text-sm leading-[1.7] text-neutral-300">
                {COMPANY_PROFILE.backgroundStatement}
              </p>
            </div>
          </div>

          {/* Right White Corporate Particulars Ledger */}
          <div className="lg:col-span-7 bg-white flex flex-col justify-between">
            <div className="px-6 sm:px-8 py-5 bg-[#F7F7F5] border-b border-[#E5E5E3] flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-base font-bold text-[#0F0F0F]">
                  Corporate Registration &amp; Particulars
                </h3>
                <p className="text-xs text-[#666663] mt-0.5">
                  Official Statutory &amp; Practice Registry
                </p>
              </div>
              <span className="font-mono text-xs font-semibold text-[#A65604] tabular-nums">
                SSM {COMPANY_PROFILE.ssmNumber}
              </span>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 flex-1 text-sm">
              <div className="px-6 sm:px-8 py-4 border-b border-[#E5E5E3] sm:border-r">
                <dt className="text-xs text-[#666663]">Company Name</dt>
                <dd className="mt-1 font-semibold text-[#0F0F0F]">
                  {COMPANY_PROFILE.legalName}
                </dd>
              </div>
              <div className="px-6 sm:px-8 py-4 border-b border-[#E5E5E3]">
                <dt className="text-xs text-[#666663]">Date Incorporated</dt>
                <dd className="mt-1 font-medium text-[#0F0F0F] tabular-nums">
                  {COMPANY_PROFILE.dateIncorporated}
                </dd>
              </div>

              <div className="px-6 sm:px-8 py-4 border-b border-[#E5E5E3] sm:border-r">
                <dt className="text-xs text-[#666663]">Principal Business</dt>
                <dd className="mt-1 font-medium text-[#0F0F0F]">
                  {COMPANY_PROFILE.principalBusiness}
                </dd>
              </div>
              <div className="px-6 sm:px-8 py-4 border-b border-[#E5E5E3]">
                <dt className="text-xs text-[#666663]">Board Registrations</dt>
                <dd className="mt-1 font-mono text-xs sm:text-sm font-semibold text-[#0F0F0F] tabular-nums">
                  LAM {COMPANY_PROFILE.lamRegistration.replace('LAM ', '')} · BEM{' '}
                  {COMPANY_PROFILE.bemRegistration}
                </dd>
              </div>

              <div className="px-6 sm:px-8 py-4 border-b border-[#E5E5E3] sm:col-span-2">
                <dt className="text-xs text-[#666663]">Directors</dt>
                <dd className="mt-1 font-medium text-[#0F0F0F]">
                  {COMPANY_PROFILE.directors.join(' · ')}
                </dd>
              </div>

              <div className="px-6 sm:px-8 py-4 border-b border-[#E5E5E3] sm:col-span-2">
                <dt className="text-xs text-[#666663]">Business Address</dt>
                <dd className="mt-1 font-medium text-[#0F0F0F]">
                  {COMPANY_PROFILE.address}
                </dd>
              </div>

              <div className="px-6 sm:px-8 py-4 border-b sm:border-b-0 border-[#E5E5E3] sm:border-r">
                <dt className="text-xs text-[#666663]">Telephone &amp; Fax</dt>
                <dd className="mt-1 font-medium text-[#0F0F0F] tabular-nums">
                  Tel: {COMPANY_PROFILE.telephone}
                  <span className="block text-xs text-[#4A4A48] mt-0.5">
                    Fax: {COMPANY_PROFILE.fax}
                  </span>
                </dd>
              </div>
              <div className="px-6 sm:px-8 py-4">
                <dt className="text-xs text-[#666663]">Official Email</dt>
                <dd className="mt-1 font-medium text-[#0F0F0F]">
                  {COMPANY_PROFILE.email}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
