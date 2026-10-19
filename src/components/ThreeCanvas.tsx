import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ThreeSceneSettings } from '../types';

interface ThreeCanvasProps {
  settings: ThreeSceneSettings;
}

// Helper to generate procedural moon texture
function createMoonTexture(): { colorMap: THREE.CanvasTexture; bumpMap: THREE.CanvasTexture } {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // Base lunar surface color
  ctx.fillStyle = '#8a8d93';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Noise and maria (dark regions)
  for (let i = 0; i < 400; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 80 + 20;
    const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
    grad.addColorStop(0, 'rgba(40, 42, 48, 0.4)');
    grad.addColorStop(0.7, 'rgba(60, 63, 70, 0.2)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Craters
  for (let i = 0; i < 600; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 12 + 2;

    // Crater rim highlight
    ctx.strokeStyle = 'rgba(230, 235, 245, 0.6)';
    ctx.lineWidth = Math.max(1, r * 0.2);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();

    // Crater pit
    ctx.fillStyle = 'rgba(20, 22, 26, 0.7)';
    ctx.beginPath();
    ctx.arc(x + r * 0.1, y + r * 0.1, r * 0.8, 0, Math.PI * 2);
    ctx.fill();
  }

  const colorMap = new THREE.CanvasTexture(canvas);

  // Create Bump Map canvas
  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = 1024;
  bumpCanvas.height = 512;
  const bCtx = bumpCanvas.getContext('2d')!;
  bCtx.fillStyle = '#808080';
  bCtx.fillRect(0, 0, bumpCanvas.width, bumpCanvas.height);

  for (let i = 0; i < 800; i++) {
    const x = Math.random() * bumpCanvas.width;
    const y = Math.random() * bumpCanvas.height;
    const r = Math.random() * 10 + 1.5;
    bCtx.fillStyle = Math.random() > 0.5 ? '#ffffff' : '#000000';
    bCtx.beginPath();
    bCtx.arc(x, y, r, 0, Math.PI * 2);
    bCtx.fill();
  }

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  return { colorMap, bumpMap };
}

// Helper to generate custom avatar box texture
function createAvatarTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, 512, 512);
  grad.addColorStop(0, '#0f172a');
  grad.addColorStop(0.5, '#1e1b4b');
  grad.addColorStop(1, '#312e81');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);

  // Border glow
  ctx.strokeStyle = '#6366f1';
  ctx.lineWidth = 16;
  ctx.strokeRect(8, 8, 496, 496);

  // Cyberpunk circuit lines
  ctx.strokeStyle = 'rgba(129, 140, 248, 0.3)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(30, 100); ctx.lineTo(150, 100); ctx.lineTo(200, 150); ctx.lineTo(200, 350);
  ctx.moveTo(480, 200); ctx.lineTo(350, 200); ctx.lineTo(300, 250);
  ctx.stroke();

  // Avatar Icon / Silhouette
  ctx.fillStyle = '#818cf8';
  ctx.beginPath();
  ctx.arc(256, 200, 70, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(256, 380, 120, Math.PI, 0, false);
  ctx.fill();

  // Text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('sPyOpenSource', 256, 450);

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('FULL STACK & 3D', 256, 480);

  return new THREE.CanvasTexture(canvas);
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ settings }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const moonMeshRef = useRef<THREE.Mesh | null>(null);
  const cubeMeshRef = useRef<THREE.Mesh | null>(null);
  const starsRef = useRef<THREE.Points | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const pointLightRef = useRef<THREE.PointLight | null>(null);

  // Mouse & Scroll interaction refs
  const mousePos = useRef({ x: 0, y: 0 });
  const targetCamPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 15));
  const targetCamLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x0a0c16, 0.015);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);
    cameraRef.current = camera;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(12, 12, 10);
    scene.add(dirLight);
    dirLightRef.current = dirLight;

    const pointLight = new THREE.PointLight(0x6366f1, 2.5, 30);
    pointLight.position.set(-8, 5, 5);
    scene.add(pointLight);
    pointLightRef.current = pointLight;

    // 5. Create Moon
    const { colorMap: moonColor, bumpMap: moonBump } = createMoonTexture();
    const moonGeo = new THREE.SphereGeometry(3.2, 64, 64);
    const moonMat = new THREE.MeshStandardMaterial({
      map: moonColor,
      bumpMap: moonBump,
      bumpScale: 0.12,
      roughness: 0.85,
      metalness: 0.1,
    });
    const moonMesh = new THREE.Mesh(moonGeo, moonMat);
    moonMesh.position.set(6, -1, -2);
    scene.add(moonMesh);
    moonMeshRef.current = moonMesh;

    // 6. Create Profile Cube
    const avatarTex = createAvatarTexture();
    const cubeGeo = new THREE.BoxGeometry(2.8, 2.8, 2.8);
    const cubeMat = new THREE.MeshStandardMaterial({
      map: avatarTex,
      roughness: 0.2,
      metalness: 0.3,
    });
    const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
    cubeMesh.position.set(-6, 2, 1);
    scene.add(cubeMesh);
    cubeMeshRef.current = cubeMesh;

    // 7. Particle Stars Field
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 120;
      positions[i3 + 1] = (Math.random() - 0.5) * 120;
      positions[i3 + 2] = (Math.random() - 0.5) * 120;

      // Subtle starry color variations (blue, purple, white, warm)
      const colorType = Math.random();
      if (colorType > 0.8) {
        colors[i3] = 0.6; colors[i3 + 1] = 0.8; colors[i3 + 2] = 1.0;
      } else if (colorType > 0.6) {
        colors[i3] = 0.9; colors[i3 + 1] = 0.6; colors[i3 + 2] = 1.0;
      } else {
        colors[i3] = 0.95; colors[i3 + 1] = 0.95; colors[i3 + 2] = 1.0;
      }
    }

    const starsGeo = new THREE.BufferGeometry();
    starsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starsGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starsMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const starsPoints = new THREE.Points(starsGeo, starsMat);
    scene.add(starsPoints);
    starsRef.current = starsPoints;

    // 8. Mouse & Scroll Listeners
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight || 1;
      const scrollProgress = scrollY / maxScroll;

      // Parallax moon & cube move slightly with scroll
      if (moonMeshRef.current) {
        moonMeshRef.current.position.y = -1 + scrollProgress * 4;
        moonMeshRef.current.position.z = -2 - scrollProgress * 3;
      }
      if (cubeMeshRef.current) {
        cubeMeshRef.current.position.y = 2 - scrollProgress * 5;
        cubeMeshRef.current.rotation.y = scrollProgress * Math.PI * 2;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // 9. Resize Observer
    const handleResize = () => {
      if (!renderer || !camera) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 10. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate Moon
      if (moonMeshRef.current && settings.autoRotate) {
        moonMeshRef.current.rotation.y += 0.003 * settings.rotationSpeed;
        moonMeshRef.current.rotation.x += 0.0008 * settings.rotationSpeed;
      }

      // Rotate & Wobble Avatar Cube
      if (cubeMeshRef.current && settings.autoRotate) {
        cubeMeshRef.current.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;
        cubeMeshRef.current.rotation.y += 0.008 * settings.rotationSpeed;
      }

      // Rotate Stars field slowly
      if (starsRef.current) {
        starsRef.current.rotation.y = elapsedTime * 0.015;
      }

      // Camera Mouse Tilt Parallax
      const targetX = targetCamPos.current.x + mousePos.current.x * 1.5;
      const targetY = targetCamPos.current.y + mousePos.current.y * 1.5;

      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.position.z += (targetCamPos.current.z - camera.position.z) * 0.05;

      camera.lookAt(targetCamLookAt.current);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Handle settings updates (lighting modes & target camera position)
  useEffect(() => {
    // Lighting Mode Updates
    if (dirLightRef.current && pointLightRef.current) {
      if (settings.lightingMode === 'cyberpunk') {
        dirLightRef.current.color.setHex(0x00f0ff);
        pointLightRef.current.color.setHex(0xff007f);
        pointLightRef.current.intensity = 4;
      } else if (settings.lightingMode === 'sunset') {
        dirLightRef.current.color.setHex(0xff7700);
        pointLightRef.current.color.setHex(0xaa00ff);
        pointLightRef.current.intensity = 3;
      } else if (settings.lightingMode === 'monochrome') {
        dirLightRef.current.color.setHex(0xffffff);
        pointLightRef.current.color.setHex(0xaaaaaa);
        pointLightRef.current.intensity = 1.5;
      } else {
        // default
        dirLightRef.current.color.setHex(0xffffff);
        pointLightRef.current.color.setHex(0x6366f1);
        pointLightRef.current.intensity = 2.5;
      }
    }

    // Camera Target Preset Positions
    if (settings.cameraTarget === 'moon') {
      targetCamPos.current.set(6, -1, 6);
      targetCamLookAt.current.set(6, -1, -2);
    } else if (settings.cameraTarget === 'cube') {
      targetCamPos.current.set(-6, 2, 7);
      targetCamLookAt.current.set(-6, 2, 1);
    } else if (settings.cameraTarget === 'space') {
      targetCamPos.current.set(0, 15, 30);
      targetCamLookAt.current.set(0, 0, 0);
    } else {
      // overview
      targetCamPos.current.set(0, 0, 18);
      targetCamLookAt.current.set(0, 0, 0);
    }
  }, [settings]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ background: 'radial-gradient(circle at 50% 50%, #111827 0%, #030712 100%)' }}
    />
  );
};
