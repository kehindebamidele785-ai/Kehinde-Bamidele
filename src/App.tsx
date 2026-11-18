/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AiAutomationShowcase } from './components/AiAutomationShowcase';
import { Portfolio } from './components/Portfolio';
import { AboutAndSkills } from './components/AboutAndSkills';
import { WorkProcess } from './components/WorkProcess';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { BlogModal } from './components/BlogModal';
import { ProjectItem, BlogArticle } from './data/portfolioData';

const TRACKED_SECTIONS = ['home', 'services', 'portfolio', 'about', 'blog', 'contact'];
const PRIMARY_WORKFLOW_IMAGE = '/src/assets/images/youtube_automation_cobalt_1794918581732.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [projectTab, setProjectTab] = useState<'demo' | 'case-study'>('demo');
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [preselectedTopic, setPreselectedTopic] = useState<string | null>(null);
  const [secondaryWorkflowImage, setSecondaryWorkflowImage] = useState<string | null>(() => {
    try {
      return localStorage.getItem('kbdev_workflow_secondary');
    } catch {
      return null;
    }
  });

  const handleUploadSecondary = useCallback((dataUrl: string) => {
    setSecondaryWorkflowImage(dataUrl);
    try {
      localStorage.setItem('kbdev_workflow_secondary', dataUrl);
    } catch {
      // Ignore storage quota issues
    }
  }, []);

  // Scroll spy for sticky nav active state
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    TRACKED_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSelectService = useCallback(
    (serviceTitle: string) => {
      if (serviceTitle === 'AI Automation') {
        scrollToSection('ai-automation');
        return;
      }
      setPreselectedTopic(serviceTitle);
      scrollToSection('contact');
    },
    [scrollToSection]
  );

  const handleOpenProject = useCallback(
    (project: ProjectItem, initialTab: 'demo' | 'case-study') => {
      setSelectedProject(project);
      setProjectTab(initialTab);
    },
    []
  );

  const handleStartSimilarProject = useCallback(
    (projectTitle: string) => {
      setSelectedProject(null);
      setPreselectedTopic(projectTitle);
      scrollToSection('contact');
    },
    [scrollToSection]
  );

  const handleBookFromBlog = useCallback(
    (topic: string) => {
      setSelectedArticle(null);
      setPreselectedTopic(topic);
      scrollToSection('contact');
    },
    [scrollToSection]
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#2563EB]/35 selection:text-white">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <main>
        <Hero onNavigate={scrollToSection} />
        <Services onSelectService={handleSelectService} />
        <AiAutomationShowcase
          onInquire={handleSelectService}
          primaryImage={PRIMARY_WORKFLOW_IMAGE}
          secondaryImage={secondaryWorkflowImage}
          onUploadSecondary={handleUploadSecondary}
        />
        <Portfolio
          onOpenProject={handleOpenProject}
          aiWorkflowImage={PRIMARY_WORKFLOW_IMAGE}
        />
        <AboutAndSkills />
        <WorkProcess />
        <Testimonials />
        <Blog onOpenArticle={setSelectedArticle} />
        <Contact preselectedTopic={preselectedTopic} />
      </main>

      <Footer onNavigate={scrollToSection} />

      <ProjectModal
        project={selectedProject}
        initialTab={projectTab}
        aiWorkflowImage={PRIMARY_WORKFLOW_IMAGE}
        onClose={() => setSelectedProject(null)}
        onStartProject={handleStartSimilarProject}
      />

      <BlogModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onBookConsultation={handleBookFromBlog}
      />
    </div>
  );
}
