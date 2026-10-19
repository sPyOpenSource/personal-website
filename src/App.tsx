import React, { useState } from 'react';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ContactModal } from './components/ContactModal';
import { Controls3DOverlay } from './components/Controls3DOverlay';
import { ThreeSceneSettings } from './types';
import { PERSONAL_INFO } from './data/portfolioData';
import { Heart, Code2, Github, ArrowUp } from 'lucide-react';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const [sceneSettings, setSceneSettings] = useState<ThreeSceneSettings>({
    autoRotate: true,
    rotationSpeed: 1.0,
    starDensity: 3000,
    lightingMode: 'default',
    cameraTarget: 'overview',
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      {/* 3D Background Canvas */}
      <ThreeCanvas settings={sceneSettings} />

      {/* Navigation Header */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenContact={() => setContactOpen(true)}
        settings={sceneSettings}
        setSettings={setSceneSettings}
      />

      {/* Page Sections */}
      <main className="relative z-10">
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenContact={() => setContactOpen(true)}
        />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 sm:px-8 border-t border-slate-900 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-indigo-400" />
            <span>
              Designed & Built with React, Three.js & Tailwind by{' '}
              <strong className="text-slate-200">{PERSONAL_INFO.name}</strong>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              <span>sPyOpenSource</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors flex items-center gap-1"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Floating 3D Control Overlay */}
      <Controls3DOverlay settings={sceneSettings} setSettings={setSceneSettings} />

      {/* CLI Terminal Modal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenContact={() => {
          setTerminalOpen(false);
          setContactOpen(true);
        }}
        setSettings={setSceneSettings}
      />

      {/* Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
