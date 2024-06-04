import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useCursor } from './CursorContext';
import { motion } from 'framer-motion';

interface PrismProps {
  sizeInVW: number;
  id: string;
  shape: string;
  delay: number;
  loadingComplete: boolean;
}

/*
  This prism component can render a triangle, cube, or sphere 3-D primitive.
  The shapes will have an initial rotating animation.
  The rotation will increase on scroll & can go negative if scrolling backwards.
  The user will also be able to click and drag a shape to rotate it.
*/

const Prism: React.FC<PrismProps> = ({sizeInVW, id, shape, delay, loadingComplete}) => {
  const { enablePointerCursor, disablePointerCursor, enableDrag, disableDrag } = useCursor();
  const refContainer = useRef<HTMLDivElement | null>(null);

  // Framer Motion transition
  const baseTransition = {
    duration: 0.2,
    ease: [0.075, 0.82, 0.165, 1]
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    // The portfolio is built in VW so we need to convert to pixels
    const sizeInPixels = (sizeInVW / 100) * window.innerWidth;

    renderer.setSize(sizeInPixels, sizeInPixels);
    let currentRefContainer = refContainer.current;
    currentRefContainer!.appendChild(renderer.domElement);
    
    let geometry;

    if(shape === 'triangle') {
      geometry = new THREE.SphereGeometry(50, 4, 1);
    } else if (shape === 'box') {
      geometry = new THREE.BoxGeometry(50, 50, 50, 1);
    } else if (shape === 'sphere') {
      geometry = new THREE.SphereGeometry(50, 15, 15);
    }

    const material = new THREE.MeshBasicMaterial({ color: 0x00ff59, wireframe: true });
    const prism = new THREE.Mesh(geometry, material);

    // Orientate the initial position of the shapes
    if(shape === 'triangle') {
      prism.rotation.x = -25;
    } else if (shape === 'box') {
      prism.rotation.x = -100;
    } else if (shape === 'sphere') {
      prism.rotation.x = -149.9;
    }

    scene.add(prism);
    camera.position.z = 100;

    // Animate the rotating shapes & increase rotation speed on scroll
    let lastScroll = window.scrollY;

    const animate = function () {
      requestAnimationFrame(animate);
      const currentScroll = window.scrollY;
      const scrollSpeed = currentScroll - lastScroll;
      const additionalSpeed = scrollSpeed * 0.003;

      if (shape === 'sphere') {
        prism.rotation.y += 0.003 + additionalSpeed/2;
      } else {
        prism.rotation.y += 0.01 + additionalSpeed;
      }
      renderer.render(scene, camera);
      lastScroll = currentScroll;
    };

    animate();

    // Allow user to click & drag to rotate shapes
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const sensitivity = 0.2;

    const onCanvasMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        const deltaMove = {
          x: event.offsetX - previousMousePosition.x,
          y: event.offsetY - previousMousePosition.y
        };

        const rotateAngleX = (deltaMove.y / renderer.domElement.clientHeight) * Math.PI * 2 * sensitivity;
        const rotateAngleY = (deltaMove.x / renderer.domElement.clientWidth) * Math.PI * 2 * sensitivity;

        prism.rotation.x += rotateAngleX;
        prism.rotation.y += rotateAngleY;

        previousMousePosition = {
          x: event.offsetX,
          y: event.offsetY
        };
      }
    };

    const onCanvasMouseDown = (event: MouseEvent) => {
      if (event.button === 0) { // Left mouse button
        isDragging = true;
        previousMousePosition = {
          x: event.offsetX,
          y: event.offsetY
        };
      }
    };

    // If user is dragging and lets go of click, stop rotating shape
    const onCanvasMouseUp = () => {
      isDragging = false;
    };

    // If user is dragging and leaves canvas, stop rotating shape
    const onCanvasMouseLeave = () => {
      isDragging = false;
    };

    const canvas = renderer.domElement;
    canvas.addEventListener('mousedown', onCanvasMouseDown, false);
    canvas.addEventListener('mousemove', onCanvasMouseMove, false);
    canvas.addEventListener('mouseup', onCanvasMouseUp, false);
    canvas.addEventListener('mouseleave', onCanvasMouseLeave, false);
    window.addEventListener('mouseup', onCanvasMouseUp, false);

    // Allows 3D objects to be responsive
    window.addEventListener('resize', () => {
      const sizeInPixels = (sizeInVW / 100) * window.innerWidth;
      renderer.setSize(sizeInPixels, sizeInPixels);
      camera.aspect = sizeInPixels / sizeInPixels;
      camera.updateProjectionMatrix();
    });

    // Clean-up functions
    return () => {
      canvas.removeEventListener('mousedown', onCanvasMouseDown, false);
      canvas.removeEventListener('mousemove', onCanvasMouseMove, false);
      canvas.removeEventListener('mouseup', onCanvasMouseUp, false);
      canvas.removeEventListener('mouseleave', onCanvasMouseLeave, false);
      window.removeEventListener('mouseup', onCanvasMouseUp, false);

      if (currentRefContainer && currentRefContainer.contains(renderer.domElement)) {
        currentRefContainer.removeChild(renderer.domElement);
      }
    };
  }, [shape, sizeInVW]);

  return (
    <motion.div 
      initial= {{ scale: 0 }}
      animate= {loadingComplete ? { scale: 1 } : {}}
      transition={{...baseTransition, delay }}
      onMouseEnter={() => { enablePointerCursor(); enableDrag(); }}
      onMouseLeave={() => { disablePointerCursor(); disableDrag(); }}
      ref={refContainer}
      id={id}
      className='prism absolute'
    ></motion.div>
  );
};

export default Prism;
