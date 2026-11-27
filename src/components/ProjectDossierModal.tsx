import { useEffect, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import type { ProjectCaseStudy } from '../data/practiceData';
import { ResilientImage } from './ResilientImage';

interface ProjectDossierModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onDiscussSimilar: (category: string) => void;
}

export function ProjectDossierModal({
  project,
  onClose,
  onDiscussSimilar,
}: ProjectDossierModalProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => {
    setGalleryOpen(false);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-[#E5E5E3] rounded-sm overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-[#E5E5E3] bg-white shrink-0">
          <div className="min-w-0">
            <p className="text-xs text-[#666663] truncate tabular-nums">
              {project.category} · {project.location} · {project.gfa} · {project.year}
            </p>
            <h3
              id="dossier-modal-title"
              className="font-display text-lg sm:text-xl font-bold text-[#0F0F0F] truncate"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project dossier"
            className="w-11 h-11 inline-flex items-center justify-center text-[#0F0F0F] border border-[#E5E5E3] hover:bg-[#F7F7F5] rounded-sm shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Technical Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="aspect-[16/9] w-full overflow-hidden border border-[#E5E5E3] bg-[#F7F7F5] rounded-sm">
            <ResilientImage
              src={project.image}
              alt={project.imageAlt}
              fallbackTitle={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setGalleryOpen((open) => !open)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0F0F0F] bg-[#EB8B1D] hover:bg-[#D67A12] rounded-sm transition-colors cursor-pointer"
              >
                {galleryOpen ? 'Hide Gallery' : 'View Gallery Project'}
              </button>
              {galleryOpen && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((src, index) => (
                    <div
                      key={src}
                      className="aspect-[4/3] w-full overflow-hidden border border-[#E5E5E3] bg-[#F7F7F5] rounded-sm"
                    >
                      <ResilientImage
                        src={src}
                        alt={`${project.title} gallery image ${index + 1}`}
                        fallbackTitle={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="p-4 bg-[#F7F7F5] border border-[#E5E5E3] rounded-sm">
            <p className="text-xs font-semibold text-[#A65604]">Verified Project Outcome</p>
            <p className="mt-1 font-display text-lg font-bold text-[#0F0F0F]">
              {project.impactHeadline}
            </p>
          </div>

          <div>
            <div className="space-y-2">
              <h4 className="font-display text-sm font-bold text-[#0F0F0F]">
                Project Overview
              </h4>
              <p className="text-sm leading-relaxed text-[#4A4A48]">
                {project.architecturalApproach}
              </p>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#E5E5E3] bg-[#F7F7F5] flex flex-wrap items-center justify-between gap-4 shrink-0">
          <span className="text-xs text-[#4A4A48]">Client: {project.client}</span>
          <button
            type="button"
            onClick={() => onDiscussSimilar(project.category)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0F0F0F] bg-[#EB8B1D] hover:bg-[#D67A12] rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Discuss a Similar Project
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
