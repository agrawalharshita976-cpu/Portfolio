import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractivePlayground } from './components/InteractivePlayground';
import { SkillsSection } from './components/SkillsSection';
// import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { CommandMenu } from './components/CommandMenu';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen bg-[#08080a] text-zinc-100 ${isLightMode ? 'selection:bg-amber-500 selection:text-white' : ''}`}>
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenProfile={() => setContactOpen(true)}
        isLightMode={isLightMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main>
        {/* Exact Atelier UI Hero Section */}
        <Hero onOpenContact={() => setContactOpen(true)} />

        {/* Selected Projects / Catalog */}
        <ProjectsSection />

        {/* Interactive Lab / Animation Playground */}
        <InteractivePlayground />

        {/* Technical Proficiency */}
        <SkillsSection />

        {/* Work Experience */}
        {/* <ExperienceSection /> */}
      </main>

      {/* Footer */}
      <Footer />

      {/* ⌘K Command Palette Modal */}
      <CommandMenu isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Profile & Contact Drawer */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
