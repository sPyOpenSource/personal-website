import React, { useState } from 'react';
import { Settings, Play, Pause, Sun, Orbit, Eye, Sliders, ChevronDown, ChevronUp } from 'lucide-react';
import { ThreeSceneSettings } from '../types';

interface Controls3DOverlayProps {
  settings: ThreeSceneSettings;
  setSettings: React.Dispatch<React.SetStateAction<ThreeSceneSettings>>;
}

export const Controls3DOverlay: React.FC<Controls3DOverlayProps> = ({
  settings,
  setSettings,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-30">
      {!expanded ? (
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 border border-indigo-500/40 text-slate-200 text-xs font-mono backdrop-blur-md shadow-xl hover:bg-slate-800 transition-all hover:scale-105"
        >
          <Sliders className="w-4 h-4 text-indigo-400" />
          <span>3D Controls</span>
        </button>
      ) : (
        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 w-72 shadow-2xl backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-mono font-bold text-slate-200 flex items-center gap-2">
              <Orbit className="w-4 h-4 text-indigo-400" />
              3D Scene Settings
            </span>
            <button
              onClick={() => setExpanded(false)}
              className="p-1 text-slate-400 hover:text-slate-100"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Auto Rotate Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-300">Auto Rotate</span>
            <button
              onClick={() =>
                setSettings((prev) => ({ ...prev, autoRotate: !prev.autoRotate }))
              }
              className={`p-1.5 rounded-lg border text-xs ${
                settings.autoRotate
                  ? 'bg-indigo-600 border-indigo-500 text-white'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              {settings.autoRotate ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Speed Slider */}
          <div>
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Rotation Speed</span>
              <span className="font-mono text-indigo-300">{settings.rotationSpeed}x</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="3"
              step="0.2"
              value={settings.rotationSpeed}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  rotationSpeed: parseFloat(e.target.value),
                }))
              }
              className="w-full accent-indigo-500 bg-slate-800 rounded-lg h-1.5 cursor-pointer"
            />
          </div>

          {/* Lighting Mode */}
          <div>
            <span className="block text-xs text-slate-400 mb-1.5">Lighting Atmosphere</span>
            <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
              {(['default', 'cyberpunk', 'sunset', 'monochrome'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSettings((prev) => ({ ...prev, lightingMode: mode }))}
                  className={`px-2 py-1.5 rounded-lg border capitalize transition-colors ${
                    settings.lightingMode === mode
                      ? 'bg-indigo-600/30 border-indigo-500 text-indigo-200 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Camera Target */}
          <div>
            <span className="block text-xs text-slate-400 mb-1.5">Focus Camera Target</span>
            <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
              {(['overview', 'moon', 'cube', 'space'] as const).map((target) => (
                <button
                  key={target}
                  onClick={() => setSettings((prev) => ({ ...prev, cameraTarget: target }))}
                  className={`px-2 py-1.5 rounded-lg border capitalize transition-colors ${
                    settings.cameraTarget === target
                      ? 'bg-purple-600/30 border-purple-500 text-purple-200 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {target}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
