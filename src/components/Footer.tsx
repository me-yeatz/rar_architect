import { useState } from 'react';
import { COMPANY_PROFILE, LOGO_ASSET_PATH } from '../data/practiceData';
import { TermsConditionsModal } from './TermsConditionsModal';

export function Footer() {
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
    <footer className="bg-white text-[#4A4A48] py-12 border-t border-[#E5E5E3]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#E5E5E3]">
          <div className="flex items-center gap-4">
            <img
              src={LOGO_ASSET_PATH}
              alt="RAR Architect & Engineer Sdn. Bhd."
              className="w-14 h-14 object-contain shrink-0"
            />
            <div>
              <p className="font-display text-base font-bold text-[#0F0F0F]">
                {COMPANY_PROFILE.legalName} ({COMPANY_PROFILE.ssmNumber})
              </p>
              <p className="text-xs text-[#666663] mt-0.5">
                {COMPANY_PROFILE.address}
              </p>
            </div>
          </div>

          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#4A4A48]"
          >
            <a href="#disciplines" className="hover:text-[#0F0F0F] transition-colors">
              The Firm
            </a>
            <a href="#projects" className="hover:text-[#0F0F0F] transition-colors">
              Projects
            </a>
            <a href="#method" className="hover:text-[#0F0F0F] transition-colors">
              Process
            </a>
            <a href="#practice-heritage" className="hover:text-[#0F0F0F] transition-colors">
              Background
            </a>
            <a href="#leadership" className="hover:text-[#0F0F0F] transition-colors">
              Leadership
            </a>
            <a href="#consultation" className="hover:text-[#0F0F0F] transition-colors">
              Consultation
            </a>
            <button
              type="button"
              onClick={() => setTermsOpen(true)}
              className="hover:text-[#0F0F0F] transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#666663] tabular-nums">
          <p>
            © {new Date().getFullYear()} {COMPANY_PROFILE.legalName} All rights
            reserved.
          </p>
          <p>
            Incorporated {COMPANY_PROFILE.dateIncorporated} · {COMPANY_PROFILE.lamRegistration} · BEM {COMPANY_PROFILE.bemRegistration}
          </p>
        </div>
      </div>
    </footer>
    <TermsConditionsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
}
