import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Send } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';
import { ThreeSceneSettings } from '../types';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
  setSettings: React.Dispatch<React.SetStateAction<ThreeSceneSettings>>;
}

interface CommandLog {
  command?: string;
  output: React.ReactNode;
  type?: 'input' | 'output' | 'error' | 'success';
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
  setSettings,
}) => {
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-cyan-400 font-bold">Welcome to sPyOpenSource Interactive Shell [v3.4.0]</p>
          <p className="text-slate-400 text-xs">
            Type <span className="text-indigo-300 font-bold">help</span> to view available terminal commands.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newLogs: CommandLog[] = [
      ...logs,
      { command: input, output: null, type: 'input' },
    ];

    switch (cmd) {
      case 'help':
        newLogs.push({
          output: (
            <div className="space-y-1 text-xs">
              <p className="text-indigo-400 font-bold mb-2">Available Commands:</p>
              <div className="grid grid-cols-[100px_1fr] gap-x-2 gap-y-1 text-slate-300">
                <span className="text-cyan-400 font-mono">about</span>
                <span>Display personal bio & contact information</span>
                <span className="text-cyan-400 font-mono">projects</span>
                <span>List top featured open source projects</span>
                <span className="text-cyan-400 font-mono">skills</span>
                <span>Display technical stack and skill levels</span>
                <span className="text-cyan-400 font-mono">3d [target]</span>
                <span>Move 3D camera (overview | moon | cube | space)</span>
                <span className="text-cyan-400 font-mono">contact</span>
                <span>Open direct contact form modal</span>
                <span className="text-cyan-400 font-mono">clear</span>
                <span>Clear the terminal history screen</span>
                <span className="text-cyan-400 font-mono">matrix</span>
                <span>Execute Matrix digital rain simulation</span>
              </div>
            </div>
          ),
        });
        break;

      case 'about':
        newLogs.push({
          output: (
            <div className="space-y-2 text-xs text-slate-300">
              <p><strong className="text-indigo-300">{PERSONAL_INFO.fullName}</strong> — {PERSONAL_INFO.title}</p>
              <p>{PERSONAL_INFO.bio}</p>
              <p className="text-slate-400">Location: {PERSONAL_INFO.location}</p>
            </div>
          ),
        });
        break;

      case 'projects':
        newLogs.push({
          output: (
            <div className="space-y-2 text-xs">
              <p className="text-indigo-400 font-bold">Top Featured Projects:</p>
              <div className="space-y-2">
                {PROJECTS.map((p) => (
                  <div key={p.id} className="border-l-2 border-indigo-500 pl-2 text-slate-300">
                    <p className="font-bold text-slate-100">{p.title} <span className="text-indigo-400">({p.category})</span></p>
                    <p className="text-slate-400 text-[11px]">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ),
        });
        break;

      case 'skills':
        newLogs.push({
          output: (
            <div className="space-y-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title}>
                  <p className="text-indigo-400 font-bold">{cat.title}:</p>
                  <p className="text-slate-300">
                    {cat.skills.map((s) => s.name).join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case 'contact':
        onOpenContact();
        newLogs.push({
          output: <p className="text-emerald-400 text-xs">Opening contact message modal...</p>,
        });
        break;

      case 'clear':
        setLogs([]);
        setInput('');
        return;

      case 'matrix':
        newLogs.push({
          output: (
            <p className="text-emerald-400 font-mono text-xs animate-pulse">
              01001001 01100001 01101101 00100000 01110011 01010000 01111001... Welcome to the matrix!
            </p>
          ),
        });
        break;

      case 'sudo':
      case 'sudo su':
        newLogs.push({
          output: <p className="text-amber-400 text-xs">Nice try! Permission denied: User 'visitor' is not in the sudoers file.</p>,
        });
        break;

      default:
        if (cmd.startsWith('3d')) {
          const parts = cmd.split(' ');
          const target = parts[1] as ThreeSceneSettings['cameraTarget'];
          if (['overview', 'moon', 'cube', 'space'].includes(target)) {
            setSettings((prev) => ({ ...prev, cameraTarget: target }));
            newLogs.push({
              output: <p className="text-cyan-400 text-xs">3D Camera repositioned to target: <strong>{target}</strong></p>,
            });
          } else {
            newLogs.push({
              output: <p className="text-rose-400 text-xs">Invalid target. Usage: 3d [overview | moon | cube | space]</p>,
            });
          }
        } else {
          newLogs.push({
            output: <p className="text-rose-400 text-xs">Command not recognized: '{cmd}'. Type 'help' for command list.</p>,
          });
        }
        break;
    }

    setLogs(newLogs);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div
        className={`bg-slate-950 border border-indigo-500/40 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ${
          isMaximized ? 'w-full h-full rounded-none' : 'w-full max-w-2xl h-[520px]'
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-2">
              <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
              spy@portfolio:~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <button onClick={() => setIsMaximized(!isMaximized)} className="p-1 hover:text-slate-200">
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button onClick={onClose} className="p-1 hover:text-slate-200">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Output Logs */}
        <div className="flex-1 p-4 font-mono text-sm overflow-y-auto space-y-3">
          {logs.map((log, index) => (
            <div key={index}>
              {log.command && (
                <div className="flex items-center gap-2 text-indigo-400 mb-1">
                  <span className="text-emerald-400">spy@portfolio:~$</span>
                  <span className="text-slate-100">{log.command}</span>
                </div>
              )}
              {log.output}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 p-3 bg-slate-900/80 border-t border-slate-800">
          <span className="text-emerald-400 font-mono text-sm font-bold pl-1">spy@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command ('help', 'projects', '3d moon')..."
            className="flex-1 bg-transparent text-slate-100 font-mono text-sm focus:outline-none placeholder-slate-500"
          />
          <button type="submit" className="p-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white">
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
