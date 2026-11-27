import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  PROJECT_CATEGORIES,
  PROJECTS,
  type ProjectCaseStudy,
  type ProjectCategory,
} from '../data/practiceData';
import { ResilientImage } from './ResilientImage';

interface ProjectsSectionProps {
  onInspectProject: (project: ProjectCaseStudy) => void;
}

export function ProjectsSection({ onInspectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Works');

  const filteredProjects =
    activeCategory === 'All Works'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const [leadProject, ...secondaryProjects] = filteredProjects;

  return (
    <section id="projects" className="bg-white py-16 lg:py-24 border-b border-[#E5E5E3]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E5E5E3]">
          <div>
            <p className="text-sm font-semibold text-[#A65604]">03. Selected Works</p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F0F0F]"
              style={{ textWrap: 'balance' }}
            >
              An exploration of architecture through innovation, functionality, and contextual design.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by sector"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F7F7F5] border border-[#E5E5E3] rounded-sm"
          >
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EB8B1D] ${
                    isActive
                      ? 'bg-[#0F0F0F] text-white'
                      : 'text-[#4A4A48] hover:text-[#0F0F0F] hover:bg-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Lead Case Study Feature Split */}
        {leadProject && (
          <article className="mt-10 grid grid-cols-1 lg:grid-cols-12 border border-[#E5E5E3] rounded-sm overflow-hidden items-stretch bg-white hover:border-[#0F0F0F] transition-colors">
            <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto bg-[#F7F7F5] border-b lg:border-b-0 lg:border-r border-[#E5E5E3]">
              <ResilientImage
                src={leadProject.image}
                alt={leadProject.imageAlt}
                fallbackTitle={leadProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#666663] tabular-nums">
                  <span className="font-semibold text-[#A65604]">
                    Featured Case Study
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{leadProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadProject.location}</span>
                </div>

                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F0F0F]">
                  {leadProject.title}
                </h3>

                <p className="mt-3 text-sm sm:text-[15px] leading-[1.65] text-[#4A4A48]">
                  {leadProject.summary}
                </p>

                <div className="mt-6 pt-5 border-t border-[#E5E5E3] grid grid-cols-2 gap-4 text-xs tabular-nums">
                  <div>
                    <span className="text-[#666663] block">Gross Floor Area</span>
                    <span className="font-display text-base font-bold text-[#0F0F0F]">
                      {leadProject.gfa}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#666663] block">Completion</span>
                    <span className="font-display text-base font-bold text-[#0F0F0F]">
                      {leadProject.year}
                    </span>
                  </div>
                </div>

                <p className="mt-5 p-4 bg-[#F7F7F5] border border-[#E5E5E3] rounded-sm text-xs sm:text-sm font-semibold text-[#0F0F0F]">
                  <span className="text-[#A65604] block text-xs mb-0.5">
                    Verified Outcome
                  </span>
                  {leadProject.impactHeadline}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E5E5E3] flex items-center justify-between gap-4">
                <span className="text-xs text-[#666663] truncate">
                  {leadProject.client}
                </span>
                <button
                  type="button"
                  onClick={() => onInspectProject(leadProject)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#0F0F0F] bg-[#EB8B1D] hover:bg-[#D67A12] rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Inspect Dossier
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
        )}

        {/* Secondary Portfolio Strip */}
        {secondaryProjects.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <article
                key={project.id}
                className="group border border-[#E5E5E3] bg-white rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#0F0F0F] transition-colors"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#F7F7F5] border-b border-[#E5E5E3]">
                    <ResilientImage
                      src={project.image}
                      alt={project.imageAlt}
                      fallbackTitle={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#666663] tabular-nums">
                      <span className="font-medium text-[#0F0F0F]">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.gfa}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-[#0F0F0F]">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#4A4A48]">
                      {project.impactHeadline}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#E5E5E3] flex items-center justify-between gap-3">
                  <span className="text-xs text-[#666663] truncate">
                    {project.location}
                  </span>
                  <button
                    type="button"
                    onClick={() => onInspectProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F0F0F] hover:text-[#A65604] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Dossier
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
