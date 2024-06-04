import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

interface NoteProps {
  text: string;
  typingAnimation: boolean;
  delayOffset: number;
  loadingComplete: boolean;
}

const Note: React.FC<NoteProps> = ({ text, typingAnimation, delayOffset, loadingComplete }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const baseTransition = {
    duration: 0.2,
    ease: [0.075, 0.82, 0.165, 1],
  };

  const animationProps = {
    initial: { scaleY: 0 },
    animate: { scaleY: isInView && loadingComplete ? 1 : 0 },
  };

  const textArray = Array.from(text);

  return(
    <motion.p 
      ref={ref} 
      className='absolute note'
      {...animationProps}
      style={{ transformOrigin: 'top' }}
      transition={{ delay: delayOffset }}
    >
      <motion.span 
        className='plus absolute inline-block'
        {...animationProps}
        transition={{ ...baseTransition, delay: delayOffset + 0.25 }}
      >+</motion.span>
      <motion.span 
        className='green-line inline-block absolute'
        {...animationProps}
        transition={{ ...baseTransition, delay: delayOffset + 0.5 }}
        style={{ transformOrigin: 'top'}}
      ></motion.span>
      {typingAnimation && (
        <AnimatePresence>
          {loadingComplete && isInView && (
            <span 
              className='inner-text inline-block'
            >
              {textArray.map((char, index) => (
                <motion.span
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.001, ease: 'easeOut', delay: delayOffset + .75 + index * 0.01 }}
              >
                  {char}
                </motion.span>
              ))}
            </span>
          )}
        </AnimatePresence>
      )}
      {!typingAnimation && (
        <motion.span 
          className='inner-text inline-block'
          initial={{ x: -30, opacity: 0 }}
          animate={loadingComplete && isInView ? { x: 0, opacity: 1 } : {}}
          exit={{ x: 100, opacity: 0 }} 
          transition={{...baseTransition, delay: delayOffset + .75}}
        >
          {text}
        </motion.span>
      )}
    </motion.p>
  );
}

export default Note;
