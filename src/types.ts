export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full Stack' | '3D & WebGL' | 'Open Source' | 'Tools';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  stars?: number;
  forks?: number;
  image?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  type: 'Work' | 'Open Source' | 'Education';
}

export interface CameraTargetPreset {
  name: string;
  id: 'overview' | 'moon' | 'cube' | 'space';
  position: [number, number, number];
  lookAt: [number, number, number];
}

export interface ThreeSceneSettings {
  autoRotate: boolean;
  rotationSpeed: number;
  starDensity: number;
  lightingMode: 'default' | 'cyberpunk' | 'monochrome' | 'sunset';
  cameraTarget: 'overview' | 'moon' | 'cube' | 'space';
}
