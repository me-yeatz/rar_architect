import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, Plus, Trash2, UserPlus, X } from 'lucide-react';
import {
  DIRECTORS,
  INITIAL_TEAM_PROFILES,
  TEAM_DIVISIONS,
  type DirectorProfile,
  type TeamDivision,
  type TeamMemberProfile,
} from '../data/practiceData';
import { ResilientImage } from './ResilientImage';

interface LeadershipTeamSectionProps {
  onConsultDirector: (typologyPreset: string) => void;
}

const DIVISION_CODES: Record<Exclude<TeamDivision, 'All Divisions'>, string> = {
  'Architecture Studio': 'AR',
  'Civil & Structural': 'CS',
  'MEP & Sustainability': 'ME',
  'BIM & Contract': 'BM',
  'Administration': 'AD',
};

export function LeadershipTeamSection({
  onConsultDirector,
}: LeadershipTeamSectionProps) {
  const [selectedDirector, setSelectedDirector] = useState<DirectorProfile | null>(
    null,
  );
  const [activeDivision, setActiveDivision] =
    useState<TeamDivision>('All Divisions');
  const [teamMembers, setTeamMembers] =
    useState<TeamMemberProfile[]>(INITIAL_TEAM_PROFILES);
  const [isTemplateFormOpen, setIsTemplateFormOpen] = useState(false);

  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    division: 'Architecture Studio' as Exclude<TeamDivision, 'All Divisions'>,
    credentials: '',
    experience: '',
    specialization: '',
  });
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedDirector) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedDirector(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedDirector]);

  const filteredMembers =
    activeDivision === 'All Divisions'
      ? teamMembers
      : teamMembers.filter((member) => member.division === activeDivision);

  const handleAddMember = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newMember.name.trim() || !newMember.role.trim()) {
      setFormError('Please enter both a full name and a role title.');
      return;
    }

    const nextIndex = String(teamMembers.length + 1).padStart(2, '0');
    const prefix = DIVISION_CODES[newMember.division];
    const created: TeamMemberProfile = {
      id: `team-custom-${Date.now()}`,
      code: `${prefix}-${nextIndex}`,
      name: newMember.name.trim(),
      role: newMember.role.trim(),
      division: newMember.division,
      credentials: newMember.credentials.trim() || 'Registered Technical Staff',
      experience: newMember.experience.trim() || '5+ Years',
      specialization:
        newMember.specialization.trim() ||
        'Integrated architectural and engineering project delivery.',
    };

    setTeamMembers((prev) => [...prev, created]);
    setActiveDivision('All Divisions');
    setNewMember({
      name: '',
      role: '',
      division: 'Architecture Studio',
      credentials: '',
      experience: '',
      specialization: '',
    });
    setFormError(null);
    setIsTemplateFormOpen(false);
  };

  const handleRemoveCustomMember = (id: string) => {
    setTeamMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const getInitials = (fullName: string) => {
    const cleaned = fullName
      .replace(/^(Ar\.|Ir\.|Ts\.|Engr\.|Hfz\.|Dr\.)\s*/i, '')
      .trim();
    const parts = cleaned.split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  };

  return (
    <section
      id="leadership"
      className="bg-[#F7F7F5] py-16 lg:py-24 border-b border-[#E5E5E3]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E5E5E3]">
          <div>
            <p className="text-sm font-semibold text-[#A65604]">
              03. Leadership &amp; Studio Team
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F0F0F]"
              style={{ textWrap: 'balance' }}
            >
              Principal-led governance across architecture and engineering.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4A4A48] max-w-[46ch] leading-relaxed">
            Every commission is directly overseen by our Managing Director and
            Engineering Director, supported by dedicated studio discipline leads.
          </p>
        </div>

        {/* Part A: Full-Width Alternating Editorial Director Vitae Rows */}
        <div className="mt-10 space-y-8">
          {DIRECTORS.map((director, idx) => {
            const reverseDesktop = idx % 2 === 1;
            return (
              <article
                key={director.id}
                className="bg-white border border-[#E5E5E3] rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                {/* Portrait Column (4 cols) */}
                <div
                  className={`lg:col-span-4 bg-[#F7F7F5] min-h-[320px] lg:min-h-[400px] border-b lg:border-b-0 border-[#E5E5E3] ${
                    reverseDesktop
                      ? 'lg:order-2 lg:border-l'
                      : 'lg:order-1 lg:border-r'
                  }`}
                >
                  <ResilientImage
                    src={director.portrait}
                    alt={director.portraitAlt}
                    fallbackTitle={director.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Vitae Content Column (8 cols) */}
                <div
                  className={`lg:col-span-8 p-7 sm:p-9 flex flex-col justify-between ${
                    reverseDesktop ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E5E5E3]">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#666663] tabular-nums">
                        <span className="font-semibold text-[#A65604]">
                          {director.role}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{director.disciplineLead}</span>
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#0F0F0F] tabular-nums">
                        {director.experienceYears}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F0F0F]">
                      {director.name}
                    </h3>

                    <p className="mt-3 text-sm sm:text-[15px] leading-[1.65] text-[#4A4A48] max-w-[66ch]">
                      {director.summary}
                    </p>

                    {/* Structured Qualifications & Registration Grid */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 border-t border-[#E5E5E3] text-xs sm:text-sm">
                      <div>
                        <h4 className="font-display text-xs font-bold text-[#0F0F0F] mb-2">
                          Professional Qualification
                        </h4>
                        <ul className="space-y-1.5 text-[#4A4A48]">
                          {director.qualifications.map((q) => (
                            <li key={`${q.degree}-${q.institution}`}>
                              <span className="font-medium text-[#0F0F0F]">
                                {q.degree}
                              </span>
                              <span className="block text-xs text-[#666663]">
                                {q.institution}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-display text-xs font-bold text-[#0F0F0F] mb-2">
                          Registration &amp; Membership
                        </h4>
                        <ul className="space-y-1.5 text-[#4A4A48]">
                          {director.registrationsList.map((r) => (
                            <li key={r.title}>
                              <span className="font-medium text-[#0F0F0F]">
                                {r.title}
                              </span>
                              <span className="block text-xs text-[#666663]">
                                {r.detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Working Experience Strip */}
                    <div className="mt-5 pt-5 border-t border-[#E5E5E3]">
                      <h4 className="font-display text-xs font-bold text-[#0F0F0F] mb-3">
                        Working Experience
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {director.workingExperience.map((exp, stepIdx) => (
                          <div
                            key={`${exp.role}-${exp.organization}`}
                            className="p-3 bg-[#F7F7F5] border border-[#E5E5E3] rounded-sm"
                          >
                            <span className="font-mono text-[11px] font-semibold text-[#A65604] tabular-nums">
                              0{stepIdx + 1}
                            </span>
                            <p className="mt-1 text-xs font-semibold text-[#0F0F0F]">
                              {exp.role}
                            </p>
                            <p className="text-[11px] text-[#4A4A48] mt-0.5 leading-snug">
                              {exp.organization}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E5E5E3] flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-[#666663]">
                      Key Stewardship: {director.signatureProjects[0]}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedDirector(director)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0F0F0F] bg-[#EB8B1D] hover:bg-[#D67A12] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      View Full Vitae
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Part B: Studio Team Profile Template (2-Column Architectural Ledger) */}
        <div className="mt-14 pt-12 border-t border-[#E5E5E3]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-[#0F0F0F]">
                Multidisciplinary Team Directory
              </h3>
              <p className="mt-1.5 text-sm text-[#4A4A48]">
                Standardized studio profile template — filter by discipline or add a
                team member profile.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div
                role="tablist"
                aria-label="Filter team by division"
                className="flex flex-wrap items-center gap-1 p-1 bg-white border border-[#E5E5E3] rounded-sm"
              >
                {TEAM_DIVISIONS.map((division) => {
                  const isActive = activeDivision === division;
                  return (
                    <button
                      key={division}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveDivision(division)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#0F0F0F] text-white'
                          : 'text-[#4A4A48] hover:text-[#0F0F0F] hover:bg-[#F7F7F5]'
                      }`}
                    >
                      {division}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setIsTemplateFormOpen((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0F0F0F] bg-[#EB8B1D] hover:bg-[#D67A12] rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <UserPlus className="w-3.5 h-3.5" aria-hidden="true" />
                {isTemplateFormOpen ? 'Close Profile Form' : 'Add Team Profile'}
              </button>
            </div>
          </div>

          {/* Interactive Team Profile Template Creator */}
          {isTemplateFormOpen && (
            <form
              onSubmit={handleAddMember}
              className="mt-6 bg-white border border-[#0F0F0F]/25 rounded-sm p-6 space-y-5"
            >
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E5E5E3]">
                <div>
                  <h4 className="font-display text-base font-bold text-[#0F0F0F]">
                    New Team Member Profile Template
                  </h4>
                  <p className="text-xs text-[#666663] mt-0.5">
                    Populate the fields below to preview a standardized profile row in
                    the directory.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsTemplateFormOpen(false)}
                  aria-label="Close team profile template form"
                  className="w-9 h-9 inline-flex items-center justify-center border border-[#E5E5E3] hover:bg-[#F7F7F5] rounded-sm text-[#0F0F0F] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="team-name"
                    className="block text-xs font-semibold text-[#0F0F0F] mb-1.5"
                  >
                    Full Name &amp; Title *
                  </label>
                  <input
                    id="team-name"
                    type="text"
                    value={newMember.name}
                    onChange={(e) =>
                      setNewMember((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="e.g. Ar. Hafizuddin Salleh"
                    className="w-full px-3 py-2 text-sm border border-[#E5E5E3] rounded-sm focus:outline-none focus:border-[#0F0F0F]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="team-role"
                    className="block text-xs font-semibold text-[#0F0F0F] mb-1.5"
                  >
                    Studio Role *
                  </label>
                  <input
                    id="team-role"
                    type="text"
                    value={newMember.role}
                    onChange={(e) =>
                      setNewMember((p) => ({ ...p, role: e.target.value }))
                    }
                    placeholder="e.g. Senior Resident Engineer"
                    className="w-full px-3 py-2 text-sm border border-[#E5E5E3] rounded-sm focus:outline-none focus:border-[#0F0F0F]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="team-division"
                    className="block text-xs font-semibold text-[#0F0F0F] mb-1.5"
                  >
                    Division
                  </label>
                  <select
                    id="team-division"
                    value={newMember.division}
                    onChange={(e) =>
                      setNewMember((p) => ({
                        ...p,
                        division: e.target.value as Exclude<
                          TeamDivision,
                          'All Divisions'
                        >,
                      }))
                    }
                    className="w-full px-3 py-2 text-sm border border-[#E5E5E3] rounded-sm bg-white focus:outline-none focus:border-[#0F0F0F]"
                  >
                    <option value="Architecture Studio">Architecture Studio</option>
                    <option value="Civil & Structural">Civil &amp; Structural</option>
                    <option value="MEP & Sustainability">
                      MEP &amp; Sustainability
                    </option>
                    <option value="BIM & Contract">BIM &amp; Contract</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="team-credentials"
                    className="block text-xs font-semibold text-[#0F0F0F] mb-1.5"
                  >
                    Registrations &amp; Degree
                  </label>
                  <input
                    id="team-credentials"
                    type="text"
                    value={newMember.credentials}
                    onChange={(e) =>
                      setNewMember((p) => ({ ...p, credentials: e.target.value }))
                    }
                    placeholder="e.g. BEM PE · B.Eng (Hons)"
                    className="w-full px-3 py-2 text-sm border border-[#E5E5E3] rounded-sm focus:outline-none focus:border-[#0F0F0F]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="team-experience"
                    className="block text-xs font-semibold text-[#0F0F0F] mb-1.5"
                  >
                    Years of Experience
                  </label>
                  <input
                    id="team-experience"
                    type="text"
                    value={newMember.experience}
                    onChange={(e) =>
                      setNewMember((p) => ({ ...p, experience: e.target.value }))
                    }
                    placeholder="e.g. 9 Years"
                    className="w-full px-3 py-2 text-sm border border-[#E5E5E3] rounded-sm focus:outline-none focus:border-[#0F0F0F]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="team-spec"
                    className="block text-xs font-semibold text-[#0F0F0F] mb-1.5"
                  >
                    Key Practice Focus
                  </label>
                  <input
                    id="team-spec"
                    type="text"
                    value={newMember.specialization}
                    onChange={(e) =>
                      setNewMember((p) => ({
                        ...p,
                        specialization: e.target.value,
                      }))
                    }
                    placeholder="e.g. High-rise structural detailing & site QA"
                    className="w-full px-3 py-2 text-sm border border-[#E5E5E3] rounded-sm focus:outline-none focus:border-[#0F0F0F]"
                  />
                </div>
              </div>

              {formError && (
                <p className="text-xs font-medium text-red-700">{formError}</p>
              )}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsTemplateFormOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#4A4A48] hover:text-[#0F0F0F] border border-[#E5E5E3] rounded-sm cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-[#0F0F0F] bg-[#EB8B1D] hover:bg-[#D67A12] rounded-sm cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                  Add to Directory
                </button>
              </div>
            </form>
          )}

          {/* 2-Column Architectural Roster */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 border border-[#E5E5E3] bg-white rounded-sm overflow-hidden">
            {filteredMembers.map((member, index) => {
              const isCustom = member.id.startsWith('team-custom-');
              return (
                <article
                  key={member.id}
                  className={`p-6 flex flex-col sm:flex-row sm:items-start gap-4 border-b border-[#E5E5E3] ${
                    index % 2 === 0 ? 'lg:border-r' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-sm bg-[#0F0F0F] text-white flex items-center justify-center font-display text-sm font-bold tracking-wide shrink-0">
                    {getInitials(member.name)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#666663] tabular-nums">
                          <span className="font-mono font-semibold text-[#A65604]">
                            {member.code}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="font-medium text-[#0F0F0F]">
                            {member.division}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{member.experience}</span>
                        </div>
                        <h4 className="mt-1 font-display text-lg font-bold text-[#0F0F0F]">
                          {member.name}
                        </h4>
                        <p className="text-xs font-medium text-[#4A4A48]">
                          {member.role} · {member.credentials}
                        </p>
                      </div>

                      {isCustom && (
                        <button
                          type="button"
                          onClick={() => handleRemoveCustomMember(member.id)}
                          aria-label={`Remove ${member.name}`}
                          className="p-1.5 text-[#666663] hover:text-red-700 rounded-sm cursor-pointer shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#4A4A48]">
                      {member.specialization}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Director Detailed Vitae Modal */}
      {selectedDirector && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="director-modal-title"
          onClick={() => setSelectedDirector(null)}
        >
          <div
            className="w-full max-w-2xl bg-white border border-[#E5E5E3] rounded-sm overflow-hidden my-auto max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-[#E5E5E3] shrink-0">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#A65604]">
                  {selectedDirector.role} · {selectedDirector.experienceYears}
                </p>
                <h3
                  id="director-modal-title"
                  className="font-display text-lg sm:text-xl font-bold text-[#0F0F0F] truncate"
                >
                  {selectedDirector.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDirector(null)}
                aria-label="Close director dossier"
                className="w-11 h-11 inline-flex items-center justify-center border border-[#E5E5E3] hover:bg-[#F7F7F5] rounded-sm text-[#0F0F0F] cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-5 aspect-[3/4] border border-[#E5E5E3] bg-[#F7F7F5] rounded-sm overflow-hidden">
                  <ResilientImage
                    src={selectedDirector.portrait}
                    alt={selectedDirector.portraitAlt}
                    fallbackTitle={selectedDirector.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="sm:col-span-7 space-y-4">
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#0F0F0F]">
                      Principal Practice Profile
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#4A4A48]">
                      {selectedDirector.biography}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E5E3] space-y-3 text-xs text-[#4A4A48]">
                    <div>
                      <span className="font-semibold text-[#0F0F0F] block mb-1">
                        Professional Qualification
                      </span>
                      <ul className="space-y-1">
                        {selectedDirector.qualifications.map((q) => (
                          <li key={`${q.degree}-${q.institution}`}>
                            <span className="font-medium text-[#0F0F0F]">
                              {q.degree}
                            </span>{' '}
                            — {q.institution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="font-semibold text-[#0F0F0F] block mb-1">
                        Registration &amp; Membership
                      </span>
                      <ul className="space-y-1">
                        {selectedDirector.registrationsList.map((r) => (
                          <li key={r.title}>
                            <span className="font-medium text-[#0F0F0F]">
                              {r.title}
                            </span>{' '}
                            — {r.detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E5E3]">
                <h4 className="font-display text-sm font-bold text-[#0F0F0F] mb-3">
                  Working Experience
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedDirector.workingExperience.map((exp, idx) => (
                    <div
                      key={`${exp.role}-${exp.organization}`}
                      className="p-3.5 bg-[#F7F7F5] border border-[#E5E5E3] rounded-sm"
                    >
                      <span className="font-mono text-[11px] font-medium text-[#A65604] tabular-nums">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <p className="mt-1 text-sm font-semibold text-[#0F0F0F]">
                        {exp.role}
                      </p>
                      <p className="text-xs text-[#4A4A48] mt-0.5">
                        {exp.organization}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E5E5E3]">
                <div>
                  <h4 className="font-display text-sm font-bold text-[#0F0F0F] mb-2.5">
                    Core Areas of Governance
                  </h4>
                  <ul className="space-y-2">
                    {selectedDirector.specializations.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-[#4A4A48] flex items-start gap-2.5"
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 bg-[#EB8B1D] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-sm font-bold text-[#0F0F0F] mb-2.5">
                    Selected Project Stewardship
                  </h4>
                  <ul className="space-y-2">
                    {selectedDirector.signatureProjects.map((proj) => (
                      <li
                        key={proj}
                        className="text-sm text-[#4A4A48] flex items-start gap-2.5"
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 bg-[#0F0F0F] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-[#E5E5E3] bg-[#F7F7F5] flex items-center justify-between gap-4 shrink-0">
              <span className="text-xs text-[#666663]">
                RAR Architect &amp; Engineer Sdn. Bhd.
              </span>
              <button
                type="button"
                onClick={() => {
                  const preset =
                    selectedDirector.id === 'rosyatimah-abd-rahman'
                      ? 'Commercial & Mixed-Use'
                      : 'Industrial & Logistics';
                  setSelectedDirector(null);
                  onConsultDirector(preset);
                }}
                className="px-5 py-2.5 text-sm font-semibold text-[#0F0F0F] bg-[#EB8B1D] hover:bg-[#D67A12] rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Request Principal Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
