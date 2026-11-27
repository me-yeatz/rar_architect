import { useEffect, useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/practiceData';

interface ConsultationSectionProps {
  selectedTypology: string;
}

interface FormState {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  typology: string;
  estimatedGfa: string;
  brief: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  brief?: string;
}

const TYPOLOGY_OPTIONS = [
  'Commercial & Mixed-Use',
  'Industrial & Infrastructure',
  'Institutional Building Project',
  'Residential High-Rise',
  'Luxury Residential',
  'Structural & MEP Retrofit',
];

export function ConsultationSection({ selectedTypology }: ConsultationSectionProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    typology: selectedTypology || TYPOLOGY_OPTIONS[0],
    estimatedGfa: '',
    brief: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (selectedTypology) {
      setForm((prev) => ({ ...prev, typology: selectedTypology }));
      setSubmittedRef(null);
    }
  }, [selectedTypology]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid work or personal email address.';
    }
    const digitsOnly = form.phone.replace(/[\s\-()+]/g, '');
    if (digitsOnly.length < 8 || !/^\d+$/.test(digitsOnly)) {
      nextErrors.phone =
        'Please enter a valid contact phone number (at least 8 digits).';
    }
    if (form.brief.trim().length < 15) {
      nextErrors.brief =
        'Please provide a short project summary (minimum 15 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const suffix = Math.floor(100 + Math.random() * 900);
    setSubmittedRef(`RAR-2026-${suffix}`);
  };

  const handleReset = () => {
    setForm({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      typology: TYPOLOGY_OPTIONS[0],
      estimatedGfa: '',
      brief: '',
    });
    setErrors({});
    setSubmittedRef(null);
  };

  return (
    <section
      id="consultation"
      className="bg-[#F7F7F5] text-[#0F0F0F] py-16 lg:py-24 border-b border-[#E5E5E3]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="pb-10 border-b border-[#E5E5E3] flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-[#A65604]">
              06. Project Consultation
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F0F0F]"
              style={{ textWrap: 'balance' }}
            >
              Commission an integrated feasibility or design review.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4A4A48] max-w-[46ch] leading-relaxed">
            Share your site location, target gross floor area, and project timeline.
            Our Shah Alam principals will respond within one business day.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 border border-[#E5E5E3] rounded-sm overflow-hidden items-stretch">
          {/* Left Dark Contact Monolith */}
          <div className="lg:col-span-4 bg-[#0F0F0F] text-white p-7 sm:p-9 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#F5A33E]">
                  Studio Contact Desk
                </p>
                <h3 className="mt-1.5 font-display text-xl font-bold text-white">
                  {COMPANY_PROFILE.legalName}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 tabular-nums">
                  SSM {COMPANY_PROFILE.ssmNumber} · {COMPANY_PROFILE.lamRegistration} · BEM{' '}
                  {COMPANY_PROFILE.bemRegistration}
                </p>
              </div>

              <div className="pt-5 border-t border-white/15 space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 text-[#EB8B1D] mt-1 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-white">Principal Office</p>
                    <p className="text-neutral-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {COMPANY_PROFILE.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    className="w-4 h-4 text-[#EB8B1D] mt-1 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-white">Telephone &amp; Fax</p>
                    <p className="text-neutral-300 text-xs sm:text-sm mt-0.5 tabular-nums">
                      Tel: {COMPANY_PROFILE.telephone}
                    </p>
                    <p className="text-neutral-400 text-xs mt-0.5 tabular-nums">
                      Fax: {COMPANY_PROFILE.fax}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    className="w-4 h-4 text-[#EB8B1D] mt-1 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-white">Official Email</p>
                    <p className="text-neutral-300 text-xs sm:text-sm mt-0.5">
                      {COMPANY_PROFILE.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-white/15 text-xs text-neutral-400">
              All project briefs and feasibility documents are handled under strict
              professional confidentiality.
            </div>
          </div>

          {/* Right Form Canvas */}
          <div className="lg:col-span-8 bg-white p-7 sm:p-10">
            {submittedRef ? (
              <div className="py-6 space-y-5" role="status" aria-live="polite">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F0F0F]">
                  <CheckCircle2
                    className="w-5 h-5 text-[#EB8B1D]"
                    aria-hidden="true"
                  />
                  <span>Consultation Brief Logged</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#0F0F0F]">
                  Thank you, {form.fullName}.
                </h3>

                <p className="text-sm leading-relaxed text-[#4A4A48]">
                  Your inquiry for{' '}
                  <strong className="text-[#0F0F0F]">{form.typology}</strong> has been
                  assigned reference{' '}
                  <span className="font-mono font-semibold text-[#0F0F0F] tabular-nums">
                    {submittedRef}
                  </span>
                  . Our Shah Alam architectural and engineering leads will follow up via{' '}
                  <span className="font-medium text-[#0F0F0F]">{form.email}</span>.
                </p>

                <div className="pt-4 border-t border-[#E5E5E3]">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 text-sm font-semibold text-[#0F0F0F] bg-[#F7F7F5] hover:bg-[#EB8B1D] border border-[#E5E5E3] hover:border-[#EB8B1D] rounded-sm transition-colors cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="rar-full-name"
                      className="block text-xs font-semibold text-[#0F0F0F] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="rar-full-name"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="e.g. Amirul Hakim"
                      className="w-full px-3.5 py-2.5 text-sm text-[#0F0F0F] bg-white border border-[#E5E5E3] rounded-sm focus:outline-none focus:border-[#0F0F0F]"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1.5">
                        <AlertCircle
                          className="w-3.5 h-3.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="rar-organization"
                      className="block text-xs font-semibold text-[#0F0F0F] mb-1.5"
                    >
                      Company / Organization
                    </label>
                    <input
                      id="rar-organization"
                      type="text"
                      value={form.organization}
                      onChange={(e) =>
                        setForm({ ...form, organization: e.target.value })
                      }
                      placeholder="e.g. Sentral Properties Sdn. Bhd."
                      className="w-full px-3.5 py-2.5 text-sm text-[#0F0F0F] bg-white border border-[#E5E5E3] rounded-sm focus:outline-none focus:border-[#0F0F0F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="rar-email"
                      className="block text-xs font-semibold text-[#0F0F0F] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="rar-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@company.com.my"
                      className="w-full px-3.5 py-2.5 text-sm text-[#0F0F0F] bg-white border border-[#E5E5E3] rounded-sm focus:outline-none focus:border-[#0F0F0F]"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1.5">
                        <AlertCircle
                          className="w-3.5 h-3.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="rar-phone"
                      className="block text-xs font-semibold text-[#0F0F0F] mb-1.5"
                    >
                      Contact Number *
                    </label>
                    <input
                      id="rar-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+60 12-345 6789"
                      className="w-full px-3.5 py-2.5 text-sm text-[#0F0F0F] bg-white border border-[#E5E5E3] rounded-sm focus:outline-none focus:border-[#0F0F0F] tabular-nums"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1.5">
                        <AlertCircle
                          className="w-3.5 h-3.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="rar-typology"
                      className="block text-xs font-semibold text-[#0F0F0F] mb-1.5"
                    >
                      Project Typology
                    </label>
                    <select
                      id="rar-typology"
                      value={form.typology}
                      onChange={(e) => setForm({ ...form, typology: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm text-[#0F0F0F] bg-white border border-[#E5E5E3] rounded-sm focus:outline-none focus:border-[#0F0F0F]"
                    >
                      {TYPOLOGY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="rar-gfa"
                      className="block text-xs font-semibold text-[#0F0F0F] mb-1.5"
                    >
                      Estimated GFA / Site Area
                    </label>
                    <input
                      id="rar-gfa"
                      type="text"
                      value={form.estimatedGfa}
                      onChange={(e) =>
                        setForm({ ...form, estimatedGfa: e.target.value })
                      }
                      placeholder="e.g. 25,000 m² · Shah Alam"
                      className="w-full px-3.5 py-2.5 text-sm text-[#0F0F0F] bg-white border border-[#E5E5E3] rounded-sm focus:outline-none focus:border-[#0F0F0F]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="rar-brief"
                    className="block text-xs font-semibold text-[#0F0F0F] mb-1.5"
                  >
                    Project Brief &amp; Required Disciplines *
                  </label>
                  <textarea
                    id="rar-brief"
                    rows={4}
                    value={form.brief}
                    onChange={(e) => setForm({ ...form, brief: e.target.value })}
                    placeholder="Describe your development objectives, site location, and whether you require Architecture, C&S, MEP, or full PSP submission services."
                    className="w-full px-3.5 py-2.5 text-sm text-[#0F0F0F] bg-white border border-[#E5E5E3] rounded-sm focus:outline-none focus:border-[#0F0F0F] resize-y"
                  />
                  {errors.brief && (
                    <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1.5">
                      <AlertCircle
                        className="w-3.5 h-3.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{errors.brief}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-[#666663]">
                    Direct submission to RAR Shah Alam principal desk.
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3.5 text-sm font-semibold text-[#0F0F0F] bg-[#EB8B1D] hover:bg-[#D67A12] transition-colors duration-150 rounded-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F0F0F]"
                  >
                    Request Consultation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
