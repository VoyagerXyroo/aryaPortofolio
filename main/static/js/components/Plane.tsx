import * as THREE from 'three';
import { useEffect, useRef } from "react";

const Plane = () => {
  const refContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let currentRefContainer = refContainer.current;
    if (!currentRefContainer) return;

    const scene = new THREE.Scene();
    const width = currentRefContainer.clientWidth;
    const height = currentRefContainer.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    currentRefContainer.appendChild(renderer.domElement);

    // Plane geometry
    const planeGeometry = new THREE.PlaneGeometry(20, 5, 30, 10);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff59, wireframe: true });
    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(planeMesh);
    planeMesh.rotation.x = 150;

    const onWindowResize = () => {
      const width = currentRefContainer!.clientWidth;
      const height = currentRefContainer!.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onWindowResize);

    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.03;

      // Access and modify vertices for ripple effect
      const positions = planeGeometry.attributes.position.array;

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        positions[i + 2] = 0.2 * Math.sin(x * 2 + time) + 0.2 * Math.sin(y * 2 + time);
      }
      planeGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      currentRefContainer!.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={refContainer} className='plane-wrapper w-full h-full'></div>;
};

export default Plane;
