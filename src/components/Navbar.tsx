import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Github, Linkedin, Twitter, Sparkles, Menu, X, Volume2, VolumeX, Eye } from 'lucide-react';
import { ThreeSceneSettings } from '../types';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenContact: () => void;
  settings: ThreeSceneSettings;
  setSettings: React.Dispatch<React.SetStateAction<ThreeSceneSettings>>;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerminal,
  onOpenContact,
  settings,
  setSettings,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      // Play a subtle high tech beep sound effect
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
      } catch (e) {
        // audio fail safe
      }
    }
  };

  const cycleCameraTarget = () => {
    const targets: ThreeSceneSettings['cameraTarget'][] = ['overview', 'moon', 'cube', 'space'];
    const currentIndex = targets.indexOf(settings.cameraTarget);
    const nextTarget = targets[(currentIndex + 1) % targets.length];
    setSettings((prev) => ({ ...prev, cameraTarget: nextTarget }));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/80 px-4 sm:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo / Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                sPy
              </span>
            </div>
          </div>
          <div>
            <span className="font-bold text-slate-100 tracking-wide text-lg group-hover:text-indigo-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="block text-[11px] text-slate-400 font-mono -mt-1">
              portfolio.v3
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-indigo-400 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-indigo-400 transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-indigo-400 transition-colors">
            Experience
          </a>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Camera View Switcher */}
          <button
            onClick={cycleCameraTarget}
            title={`Current view: ${settings.cameraTarget.toUpperCase()} (Click to cycle)`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/90 hover:bg-slate-800 text-indigo-300 border border-slate-700/60 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-indigo-400" />
            <span className="capitalize">{settings.cameraTarget}</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Audio Muted' : 'Enable Audio FX'}
            className="p-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-700/60 transition-colors"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-cyan-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-indigo-950/60 border border-indigo-500/40 text-indigo-300 text-xs font-mono transition-all hover:border-indigo-400 shadow-sm"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>CLI Terminal</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-800 flex flex-col gap-3 text-sm text-slate-200 bg-slate-950/95 p-4 rounded-xl">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-indigo-400"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-indigo-400"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-indigo-400"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-indigo-400"
          >
            Experience
          </a>

          <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-2">
            <button
              onClick={() => {
                onOpenTerminal();
                setMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 border border-indigo-500/30 text-indigo-300 font-mono text-xs"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              CLI Terminal
            </button>
            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
