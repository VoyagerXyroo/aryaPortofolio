import React, { createContext, useContext, useState, ReactNode } from 'react';

type CursorContextType = {
  isGunCursor: boolean;
  enableGunCursor: () => void;
  disableGunCursor: () => void;
  isPointerCursor: boolean;
  enablePointerCursor: () => void;
  disablePointerCursor: () => void;
  showCursor: boolean;
  enableCursor: () => void;
  disableCursor: () => void;
  showDrag: boolean;
  enableDrag: () => void;
  disableDrag: () => void;
  showGo: boolean;
  enableGo: () => void;
  disableGo: () => void;
  showEmail: boolean;
  enableEmail: () => void;
  disableEmail: () => void;
  showJump: boolean;
  enableJump: () => void;
  disableJump: () => void;
};

interface CursorProviderProps {
  children: ReactNode;
}

// Create context with default values
const CursorContext = createContext<CursorContextType>({
  isGunCursor: false,
  enableGunCursor: () => {},
  disableGunCursor: () => {},
  isPointerCursor: false,
  enablePointerCursor: () => {},
  disablePointerCursor: () => {},
  showCursor: true,
  enableCursor: () => {},
  disableCursor: () => {},
  showDrag: false,
  enableDrag: () => {},
  disableDrag: () => {},
  showGo: false,
  enableGo: () => {},
  disableGo: () => {},
  showEmail: false,
  enableEmail: () => {},
  disableEmail: () => {},
  showJump: false,
  enableJump: () => {},
  disableJump: () => {}
});

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [isGunCursor, setIsGunCursor] = useState(false);
  const [isPointerCursor, setIsPointerCursor] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [showDrag, setShowDrag] = useState(false);
  const [showGo, setShowGo] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showJump, setShowJump] = useState(false);


  const enableGunCursor = () => setIsGunCursor(true);
  const disableGunCursor = () => setIsGunCursor(false);

  const enablePointerCursor = () => setIsPointerCursor(true);
  const disablePointerCursor = () => setIsPointerCursor(false);

  const enableCursor = () => setShowCursor(true);
  const disableCursor = () => setShowCursor(false);

  const enableDrag = () => setShowDrag(true);
  const disableDrag = () => setShowDrag(false);

  const enableGo = () => setShowGo(true);
  const disableGo = () => setShowGo(false);

  const enableEmail = () => setShowEmail(true);
  const disableEmail= () => setShowEmail(false);

  const enableJump = () => setShowJump(true);
  const disableJump = () => setShowJump(false);

  return (
    <CursorContext.Provider value={{ 
      isGunCursor, 
      enableGunCursor, 
      disableGunCursor, 
      isPointerCursor, 
      enablePointerCursor, 
      disablePointerCursor, 
      showCursor, 
      enableCursor, 
      disableCursor, 
      showDrag, 
      enableDrag,
      disableDrag,
      showGo, 
      enableGo,
      disableGo,
      showEmail,
      enableEmail,
      disableEmail,
      showJump,
      enableJump,
      disableJump
      }}>

      {children}
    </CursorContext.Provider>
  );
};

// Custom hook to use the cursor context
export const useCursor = () => useContext(CursorContext);
