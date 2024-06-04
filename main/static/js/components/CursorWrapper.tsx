import React from 'react';
import { useCursor } from './CursorContext';

interface CursorWrapperProps {
  children: React.ReactNode;
}

const CursorWrapper: React.FC<CursorWrapperProps> = ({ children }) => {
  const { enableCursor, disableCursor } = useCursor();

  return (
    <div className='App relative' onMouseEnter={enableCursor} onMouseLeave={disableCursor}>
      {children}
    </div>
  );
};

export default CursorWrapper;