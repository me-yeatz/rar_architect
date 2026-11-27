import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_ASSET_PATH } from '../data/practiceData';

interface NavbarProps {
  onConsultClick: () => void;
}

const NAV_LINKS = [
  { label: 'The Firm', href: '#disciplines' },
  { label: 'Projects', href: '#projects' },
  { label: 'About Us / Background', href: '#practice-heritage' },
  { label: 'Leadership', href: '#leadership' },
];

export function Navbar({ onConsultClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileNav = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E5E5E3]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB8B1D]"
        >
          <img
            src={LOGO_ASSET_PATH}
            alt="RAR Architect & Engineer Sdn. Bhd. monogram"
            className="w-8 h-8 object-contain object-top shrink-0"
          />
          <span className="font-display text-base sm:text-lg font-bold tracking-tight text-[#0F0F0F] whitespace-nowrap shrink-0">
            RAR Architect &amp; Engineer
          </span>
        </a>

        {/* Zone 2: 4 Single-line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A4A48]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#0F0F0F] transition-colors duration-150 after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#EB8B1D] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB8B1D]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onConsultClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#0F0F0F] bg-[#EB8B1D] hover:bg-[#D67A12] transition-colors duration-150 rounded-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F0F0F]"
          >
            Consult With Us
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#0F0F0F] border border-[#E5E5E3] rounded-sm hover:bg-[#F7F7F5] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E5E5E3] bg-white px-5 py-5 space-y-4">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNav(link.href);
                }}
                className="py-2.5 px-2 text-base font-medium text-[#0F0F0F] hover:text-[#B86207] border-b border-[#E5E5E3]/70 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onConsultClick();
            }}
            className="w-full py-3 px-4 text-sm font-semibold text-[#0F0F0F] bg-[#EB8B1D] hover:bg-[#D67A12] rounded-sm transition-colors cursor-pointer"
          >
            Consult With Us
          </button>
        </div>
      )}
    </header>
  );
}
