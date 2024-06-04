import React, { useEffect, useRef, useState } from "react";
import { useCursor } from './CursorContext';

const Scrollbar = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [initialY, setInitialY] = useState(0);
  const [initialScrollTop, setInitialScrollTop] = useState(0);

  const { enablePointerCursor, disablePointerCursor, enableJump, disableJump } = useCursor();


  const handleClickOnTrack = (event: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const clickPositionRelativeY = event.clientY - trackRect.top;
    const trackHeight = track.clientHeight;

    const clickPositionPercentage = clickPositionRelativeY / trackHeight;

    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const maxScrollableHeight = documentHeight - windowHeight;

    const newScrollTop = clickPositionPercentage * maxScrollableHeight;

    window.scrollTo(0, newScrollTop);
  };

  useEffect(() => {
    let currentBarRef = barRef.current;

    const handleScroll = () => {
      if (isDragging) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;

      const maxScrollableHeight = documentHeight - windowHeight;
      const scrollPercentage = Math.min(scrollTop / maxScrollableHeight, 1);

      const thumbHeight = currentBarRef ? currentBarRef.offsetHeight : 0;
      const trackHeight = document.getElementById('track')!.clientHeight;

      const maxThumbTop = trackHeight - thumbHeight;
      const translateY = maxThumbTop * scrollPercentage;

      if (currentBarRef) {
        currentBarRef.style.transform = `translateY(${translateY}px)`;
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      setIsDragging(true);
      setInitialY(event.clientY);
      setInitialScrollTop(document.documentElement.scrollTop);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;

      const deltaY = event.clientY - initialY;
      const trackHeight = document.getElementById('track')!.clientHeight;
      const thumbHeight = currentBarRef ? currentBarRef.offsetHeight : 0;
      const maxThumbTop = trackHeight - thumbHeight;

      const scrollPercentage = deltaY / maxThumbTop;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScrollableHeight = documentHeight - windowHeight;
      const scrollTop = initialScrollTop + scrollPercentage * maxScrollableHeight;

      // Update the thumb's position as well
      const translateY = deltaY + (initialScrollTop / maxScrollableHeight) * maxThumbTop;
      if (currentBarRef) {
        currentBarRef.style.transform = `translateY(${Math.min(Math.max(translateY, 0), maxThumbTop)}px)`;
      }

      window.scrollTo(0, scrollTop);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    currentBarRef?.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      currentBarRef?.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isDragging, initialY, initialScrollTop]);

  return (
    <div id='scrollbar'>
      <div 
        id='track' 
        ref={trackRef} 
        className='relative h-full' 
        onClick={handleClickOnTrack} 
        onMouseEnter={()=> {enableJump(); enablePointerCursor()}} 
        onMouseLeave={() => {disableJump(); disablePointerCursor();}}
      >
        </div>
        <div 
          id='bar' 
          ref={barRef} 
          style={{ position: 'absolute', top: '0', right: '0', cursor: 'grab' }}
          onMouseEnter={()=> {disableJump(); disablePointerCursor()}} 
        ></div>
    </div>
  );
};

export default Scrollbar;