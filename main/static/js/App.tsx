import 'css/App.scss';
import Note from './components/Note';
import SelectedWorks from './components/SelectedWorks';
import Prism from './components/Prism';
import Plane from './components/Plane';
import Shooter from './components/Shooter';
import Scrollbar from './components/Scrollbar';
import Cursor from './components/Cursor';
import Link from './components/Link';
import CursorWrapper from './components/CursorWrapper';
import { CursorProvider } from './components/CursorContext';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

function App() {

  const experienceRef = useRef(null);
  const expIsInView = useInView(experienceRef, { once: true });

  const imgRef = useRef(null);
  const imgIsInView = useInView(imgRef)

  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {

    if (!loadingComplete) {
      document.body.setAttribute('data-lenis-prevent', 'true');
    } else {
      document.body.removeAttribute('data-lenis-prevent');
    }

    document.body.style.overflow = loadingComplete ? 'visible' : 'hidden';

  }, [loadingComplete]);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <CursorProvider>
      <ReactLenis root>
        <CursorWrapper>
          {!loadingComplete && <LoadingScreen onComplete={handleLoadingComplete} />}
          <div id='hero' className='container relative uppercase'>
            <motion.h1
              transition={{ duration: 1, ease: [0.075, 0.82, 0.165, 1] }}
              initial={{ x: -200, opacity: 0 }}
              animate={loadingComplete ? { x: 0, opacity: 1 } : {}}
              className='absolute z-10'>Frontend developer</motion.h1>
            <h1
              className='absolute z-10'>
              <motion.span
                className='block'
                transition={{ duration: 1, ease: [0.075, 0.82, 0.165, 1], delay: .2 }}
                initial={{ x: -100, opacity: 0 }}
                animate={loadingComplete ? { x: 0, opacity: 1 } : {}}
              >specializing in</motion.span>
              <motion.span
                className='block'
                transition={{ duration: 1, ease: [0.075, 0.82, 0.165, 1], delay: .3 }}
                initial={{ x: -100, opacity: 0 }}
                animate={loadingComplete ? { x: 0, opacity: 1 } : {}}
              >interactive web</motion.span>
              <motion.span
                transition={{ duration: 1, ease: [0.075, 0.82, 0.165, 1], delay: .4 }}
                initial={{ x: -100, opacity: 0 }}
                animate={loadingComplete ? { x: 0, opacity: 1 } : {}}
                className='block'
              >experiences</motion.span>

            </h1>
            <motion.h1
              transition={{ duration: 1, ease: [0.075, 0.82, 0.165, 1], delay: .6 }}
              initial={{ y: 100, opacity: 0 }}
              animate={loadingComplete ? { y: 0, opacity: 1 } : {}}
              className='absolute z-10'>for tech and</motion.h1>
            <motion.h1
              transition={{ duration: 1, ease: [0.075, 0.82, 0.165, 1], delay: .7 }}
              initial={{ y: 100, opacity: 0 }}
              animate={loadingComplete ? { y: 0, opacity: 1 } : {}}
              className='absolute z-10'>creative teams</motion.h1>
            <Note
              text={'Currently seeking new opportunities'}
              typingAnimation={true}
              delayOffset={1}
              loadingComplete={loadingComplete}
            />
            <Prism sizeInVW={45} shape={'box'} delay={.5} id={'prism-1'} loadingComplete={loadingComplete}></Prism>
            <Prism sizeInVW={21} shape={'triangle'} delay={1.25} id={'prism-2'} loadingComplete={loadingComplete}></Prism>
          </div>

          <div id='experience' className='uppercase w-full relative'>
            <div className='container text relative border-top-accent'>
              <motion.h2
                transition={{ duration: 1, ease: [0.075, 0.82, 0.165, 1], delay: .2 }}
                initial={{ x: -100, opacity: 0 }}
                animate={loadingComplete && expIsInView ? { x: 0, opacity: 1 } : {}}
              >Professional experience</motion.h2>
              <motion.h1
                transition={{ duration: 2, ease: [0.075, 0.82, 0.165, 1], delay: .3 }}
                initial={{ y: 10, opacity: 0 }}
                animate={loadingComplete && expIsInView ? { y: 0, opacity: 1 } : {}}
              >Forex & Crypto Analysis 2022&ndash;2024</motion.h1>
              <motion.h1
                ref={experienceRef}
                transition={{ duration: 2, ease: [0.075, 0.82, 0.165, 1], delay: .4 }}
                initial={{ y: 10, opacity: 0 }}
                animate={loadingComplete && expIsInView ? { y: 0, opacity: 1 } : {}}
              >Website Developer 2021&ndash;2024</motion.h1>
              <Note
                text={'At VMware & Pivotal, I designed and developed web applications that achieved hundreds of thousands of impressions, enhancing brand awareness and bolstering customer acquisition. From mockup to launch, I ensured all code adhered to the highest standards of performance, responsiveness & accessibility while emphasizing a unique user experiences.'}
                typingAnimation={false}
                delayOffset={.5}
                loadingComplete={loadingComplete}
              />
            </div>
            <Plane></Plane>
          </div>

          <SelectedWorks></SelectedWorks>

          <div id='skills' className='uppercase'>
            <div className='container'>
              <Shooter></Shooter>
            </div>
          </div>

          <div id='contact' className='uppercase'>
            <div className='container flex justify-end relative border-top-accent'>
              <Prism sizeInVW={70} shape={'sphere'} delay={0} id={'prism-3'} loadingComplete={loadingComplete}></Prism>
              <div className='black-block absolute'></div>
              <motion.div
                transition={{ duration: .5, ease: [0.075, 0.82, 0.165, 1], delay: .5 }}
                initial={{ scaleY: 0 }}
                animate={imgIsInView ? { scaleY: 1 } : {}}
                className='green-block-1 absolute'></motion.div>
              <motion.div
                transition={{ duration: .5, ease: [0.075, 0.82, 0.165, 1], delay: .65 }}
                initial={{ scaleY: 0 }}
                animate={imgIsInView ? { scaleY: 1 } : {}}
                className='green-block-2 absolute'></motion.div>
              <motion.h1
                transition={{ duration: .5, ease: [0.075, 0.82, 0.165, 1], delay: imgIsInView ? .5 : 0 }}
                initial={{ scaleY: 0 }}
                animate={imgIsInView ? { scaleY: 1 } : {}}
                className='absolute part-1 z-10'>+ Let's work</motion.h1>
              <motion.h1
                transition={{ duration: .5, ease: [0.075, 0.82, 0.165, 1], delay: imgIsInView ? .65 : 0 }}
                initial={{ scaleY: 0 }}
                animate={imgIsInView ? { scaleY: 1 } : {}}
                className='absolute part-2 z-10'>together</motion.h1>
              <motion.div
                transition={{ duration: .5, ease: [0.075, 0.82, 0.165, 1], delay: imgIsInView ? .8 : 0 }}
                initial={{ scaleY: 0 }}
                animate={imgIsInView ? { scaleY: 1 } : {}}
                className='linkedin absolute z-10 select-none'
              >
                <Link url={'#'} text={'Connect on LinkedIn'} isCTA={false}></Link>
              </motion.div>
              <motion.div
                transition={{ duration: .5, ease: [0.075, 0.82, 0.165, 1], delay: imgIsInView ? 1.1 : 0 }}
                initial={{ x: 100, opacity: 0 }}
                animate={imgIsInView ? { x: 0, opacity: 1 } : {}}
                className='cta absolute right-0'>
                <Link url={''} text={''} isCTA={true}></Link>
              </motion.div>
              <div ref={imgRef} className='img-container z-10 relative overflow-hidden'>
                <img className='' src='/images/headshot.webp' alt=''></img>
                <motion.img
                  ref={imgRef}
                  transition={{ duration: .5, ease: [0.075, 0.82, 0.165, 1], delay: imgIsInView ? 1 : 0 }}
                  initial={{ opacity: 1 }}
                  animate={imgIsInView ? { opacity: 0 } : {}}
                  className='absolute top-0 left-0' src='/images/dither-headshot.png' alt=''></motion.img>
              </div>
            </div>
          </div>
          <Scrollbar></Scrollbar>
          <Cursor></Cursor>

        </CursorWrapper>
      </ReactLenis>
    </CursorProvider>
  );
}

export default App;
