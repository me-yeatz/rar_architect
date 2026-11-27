import { useEffect } from 'react';
import { X } from 'lucide-react';

interface TermsConditionsModalProps {
  open: boolean;
  onClose: () => void;
}

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: '1. Introduction',
    body: [
      'These Terms and Conditions ("Terms") govern the use of the website and the professional services offered by RAR Architect & Engineer Sdn. Bhd. ("RAR", "we", "us", or "our"). By accessing this website or engaging our services, you agree to be bound by these Terms.',
      'RAR Architect & Engineer Sdn. Bhd. is a registered architectural and engineering consultancy (SSM 785070-P), incorporated on 17th August 2007, with its principal office at No. 6-1, Jalan Opera D U2/D, Taman TTDI Jaya, 40150 Shah Alam, Selangor Darul Ehsan, Malaysia.',
    ],
  },
  {
    title: '2. Services',
    body: [
      'RAR provides integrated architectural design, civil and structural engineering, MEP engineering, masterplanning, authority submission, and contract administration services, delivered under the governance of our registered professionals (LAM A/R 29; BEM C1976).',
      'The scope, deliverables, fees, and timelines for any specific commission are defined in a separate written agreement or quotation accepted by both parties. Website content is informational only and does not constitute a binding offer.',
    ],
  },
  {
    title: '3. Use of Website',
    body: [
      'You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict the use of, this website by any third party.',
      'You must not attempt to gain unauthorised access to the website, its server, or any database connected to it, nor introduce viruses, trojans, or other malicious material.',
    ],
  },
  {
    title: '4. Intellectual Property',
    body: [
      'All content on this website — including text, graphics, logos, images, and project case studies — is the property of RAR Architect & Engineer Sdn. Bhd. or its licensors and is protected by applicable intellectual property laws.',
      'You may not reproduce, distribute, or create derivative works from any content without our prior written consent. Project images and case studies are showcased for portfolio purposes only.',
    ],
  },
  {
    title: '5. Confidentiality',
    body: [
      'Any project brief, site information, or feasibility document submitted through our consultation form or directly to our principals is treated as confidential professional communication.',
      'We will not disclose such information to third parties without your consent, except where required by law or professional obligation.',
    ],
  },
  {
    title: '6. Fees & Payment',
    body: [
      'Professional fees are quoted in writing based on the agreed scope of services and are subject to the terms of the signed appointment letter or agreement.',
      'Unless otherwise agreed, fees are payable in accordance with the payment schedule stated in the appointment letter. Late payments may attract interest as provided under Malaysian law.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, RAR shall not be liable for any indirect, incidental, special, or consequential loss arising from the use of this website or reliance on its content.',
      'Our liability in respect of professional services is limited to the terms set out in the relevant appointment agreement and applicable professional indemnity coverage.',
    ],
  },
  {
    title: '8. Third-Party Links',
    body: [
      'This website may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of those websites and do not endorse them.',
    ],
  },
  {
    title: '9. Governing Law',
    body: [
      'These Terms are governed by and construed in accordance with the laws of Malaysia. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Malaysia.',
    ],
  },
  {
    title: '10. Changes to These Terms',
    body: [
      'We reserve the right to update these Terms from time to time. The latest version will be posted on this website with an updated effective date. Continued use of the website constitutes acceptance of the revised Terms.',
    ],
  },
  {
    title: '11. Contact',
    body: [
      'For questions regarding these Terms, please contact RAR Architect & Engineer Sdn. Bhd. at rar_consultant@yahoo.com or +60 3-7846 5272 / +60 3-7846 8557, No. 6-1, Jalan Opera D U2/D, Taman TTDI Jaya, 40150 Shah Alam, Selangor Darul Ehsan.',
    ],
  },
];

export function TermsConditionsModal({ open, onClose }: TermsConditionsModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-[#E5E5E3] rounded-sm overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-[#E5E5E3] bg-white shrink-0">
          <div className="min-w-0">
            <p className="text-xs text-[#666663] tabular-nums">
              RAR Architect &amp; Engineer Sdn. Bhd.
            </p>
            <h3
              id="terms-modal-title"
              className="font-display text-lg sm:text-xl font-bold text-[#0F0F0F]"
            >
              Terms &amp; Conditions
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close terms and conditions"
            className="w-11 h-11 inline-flex items-center justify-center text-[#0F0F0F] border border-[#E5E5E3] hover:bg-[#F7F7F5] rounded-sm shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-6">
          <p className="text-xs text-[#666663]">
            Effective date: 1 January 2026. Last updated: 1 January 2026.
          </p>
          {SECTIONS.map((section) => (
            <section key={section.title} className="space-y-2">
              <h4 className="font-display text-sm font-bold text-[#0F0F0F]">
                {section.title}
              </h4>
              {section.body.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-sm leading-relaxed text-[#4A4A48]"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="px-6 py-4 border-t border-[#E5E5E3] bg-[#F7F7F5] flex items-center justify-between gap-4 shrink-0">
          <span className="text-xs text-[#4A4A48]">
            © {new Date().getFullYear()} RAR Architect &amp; Engineer Sdn. Bhd.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-semibold text-[#0F0F0F] bg-[#EB8B1D] hover:bg-[#D67A12] rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}