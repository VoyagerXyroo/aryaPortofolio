import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const incrementCounter = () => {
      if (counter < 101) {
        
        const normalDelay = 30;
        const randomPauseDelay = Math.random() < 0.1 ? 100 + Math.random() * 200 : normalDelay; // 10% chance to pause longer

        setTimeout(() => {
          setCounter(counter + 1);
        }, randomPauseDelay);
      } else {
        setTimeout(onComplete, 500);
      }
    };

    incrementCounter();
  }, [counter, onComplete]);

  return (
    <AnimatePresence>
      {counter < 101 && (
        <motion.div
          id='loading-screen'
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className='fixed top-0 left-0 w-full h-full grid place-items-center'
        >
          <h1 className='relative'>{counter}%</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
