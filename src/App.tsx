/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyBackgroundSection } from './components/CompanyBackgroundSection';
import { CertificationsSection } from './components/CertificationsSection';
import { DisciplinesSection } from './components/DisciplinesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { LeadershipTeamSection } from './components/LeadershipTeamSection';
import { PracticeMethodSection } from './components/PracticeMethodSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { ProjectDossierModal } from './components/ProjectDossierModal';
import type { ProjectCaseStudy } from './data/practiceData';

export default function App() {
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);
  const [selectedTypology, setSelectedTypology] = useState<string>(
    'Commercial & Mixed-Use',
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectTypologyAndConsult = (typology: string) => {
    setSelectedTypology(typology);
    setActiveProject(null);
    scrollToSection('consultation');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F0F0F]">
      <Navbar onConsultClick={() => scrollToSection('consultation')} />

      <main className="flex-1">
        <Hero
          onConsultClick={() => scrollToSection('consultation')}
          onProjectsClick={() => scrollToSection('projects')}
        />
        <CompanyBackgroundSection />
        <DisciplinesSection />
        <CertificationsSection />
        <ProjectsSection onInspectProject={setActiveProject} />
        <LeadershipTeamSection onConsultDirector={handleSelectTypologyAndConsult} />
        <PracticeMethodSection />
        <ConsultationSection selectedTypology={selectedTypology} />
      </main>

      <Footer />

      <ProjectDossierModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onDiscussSimilar={handleSelectTypologyAndConsult}
      />
    </div>
  );
}
