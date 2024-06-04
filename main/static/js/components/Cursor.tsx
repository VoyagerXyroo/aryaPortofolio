import React, { useEffect, useState } from 'react';
import { useCursor } from './CursorContext';

const Cursor = () => {
  const { isGunCursor, isPointerCursor, showCursor, showDrag, showGo, showEmail, showJump } = useCursor();

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update cursor position
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add mouse move listener to the document
    document.addEventListener('mousemove', updatePosition);

    // Cleanup function to remove event listener
    return () => document.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      className={`custom-cursor ${isGunCursor ? 'gun' : ''} ${isPointerCursor ? 'pointer' : ''} ${showCursor ? '' : 'hide'}`}
      style={{
        left: `calc(${position.x}px + 0.11vw)`,
        top: `calc(${position.y}px + 0.11vw)`,
      }}>
      <div className='crosshair relative'>
        <div className='vertical absolute'></div>
        <div className='horizontal absolute'></div>
      </div>
      <div className={`drag uppercase absolute ${showDrag ? 'show' : 'hide'}`}>
        <p>Drag</p>
      </div>
      <div className={`go uppercase absolute ${showGo ? 'show' : 'hide'}`}>
        <p>Open in new tab</p>
      </div>
      <div className={`email uppercase absolute ${showEmail ? 'show' : 'hide'}`}>
        <p>Send an email</p>
      </div>
      <div className={`jump uppercase absolute ${showJump ? 'show' : 'hide'}`}>
        <p>Jump here</p>
      </div>
    </div>
  );
};

export default Cursor;
