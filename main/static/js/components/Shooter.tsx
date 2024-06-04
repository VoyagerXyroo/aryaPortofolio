import { useEffect, useState } from "react";
import { useCursor } from './CursorContext';

const Shooter = () => {

  const { enableGunCursor, disableGunCursor } = useCursor();
  const [score, setScore] = useState(0);

  const createBullet = (x: number, y: number, containerRect: DOMRect) => {

    // Create the bullet flash element
    const bullet = document.createElement('div');
    bullet.className = 'bullet';

    // Position it at the coordinates where the user clicks
    bullet.style.left = `calc(${x - containerRect.left}px - 0.265vw)`;
    bullet.style.top = `calc(${y - containerRect.top}px - 0.265vw)`;

    document.getElementById('shooter-container')?.appendChild(bullet);

    // Remove the bullet flash to after 100ms to simulate gunfire
    setTimeout(() => {
      bullet.remove();
    }, 100);
  };

  const handleTargetHit = (target: HTMLElement) => {
    setScore(currentScore => currentScore + 1);
    target.classList.add('hit');
  };

  useEffect(() => {
    
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement; 
      const container = e.currentTarget as Element;
      const containerRect = container.getBoundingClientRect();
  
      createBullet(e.clientX, e.clientY, containerRect);
  
      // If you clicked a live target, add the hit class and adjust the score
      if (target.classList.contains('target') && !target.classList.contains('hit')) {
        handleTargetHit(target);
      }
    };

    const targetContainer = document.getElementById('target-container');

    if (targetContainer) {
      targetContainer.addEventListener('click', handleClick);

      return () => {
        targetContainer.removeEventListener('click', handleClick);
      };
    }
  }, []);
  
  return (
    <div className='w-full h-full select-none'>
      <div id='shooter-nav' className='flex justify-between w-full'>
        <p>+ Skills & Technologies</p>
        <p>Score: <span>{score}</span></p>
      </div>
      <div onMouseEnter={enableGunCursor} onMouseLeave={disableGunCursor} id='shooter-container' className='overflow-hidden relative'>
        <div className='glow'></div>
        <div className='moving-grid absolute'>
          <div className='grid-inner'>
            <div className='grid-x absolute'></div>
            <div className='grid-y absolute'></div>
          </div>
        </div>
        <div className='black-top absolute w-full'></div>
        <div id='target-container' className='relative'>
          <h4 id='netlify' className='absolute pill target'>Netlify</h4>
          <h4 id='hugo' className='absolute pill target'>Hugo</h4>
          <h4 id='ruby' className='absolute pill target'>Ruby on Rails</h4>
          <h4 id='git' className='absolute pill target'>Git</h4>
          <h4 id='cross' className='absolute pill target'>Cross-browser</h4>
          <h4 id='framer' className='absolute pill target'>Framer</h4>
          <h4 id='accessibility' className='absolute pill target'>Accessibility</h4>
          <h4 id='uiux' className='absolute pill target'>UI/UX design</h4>
          <h4 id='api' className='absolute pill target'>API</h4>
          <h4 id='bootstrap' className='absolute pill target'>Bootstrap</h4>
          <h4 id='react' className='absolute pill target'>React.js</h4>
          <h4 id='responsive' className='absolute pill target'>Responsive design</h4>
          <h4 id='jquery' className='absolute pill target'>jQuery</h4>
          <h4 id='threejs' className='absolute pill target'>Three.js</h4>
          <h4 id='photoshop' className='absolute pill target'>Photoshop</h4>
          <h4 id='tailwind' className='absolute pill target'>Tailwind</h4>
          <h4 id='ts' className='absolute pill target'>TypeScript</h4>
          <h4 id='javascript' className='absolute pill target'>Javascript</h4>
          <h4 id='css' className='absolute pill target'>CSS + SCSS</h4>
          <h4 id='html' className='absolute pill target'>HTML</h4>
        </div>
      </div>
      <p className='text-center'>Break the targets!</p>
    </div>
  );
};

export default Shooter;