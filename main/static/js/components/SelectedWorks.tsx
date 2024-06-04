import Link from './Link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SelectedWorks = () => {

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);

  const disableAnimations = window.innerWidth < 801;
  const disableVideos = window.innerWidth < 501;

  return(
    <div id='selected-works' className='uppercase'>
      <div className='container'>
        <p id='title' className='text-right'>+ Selected works</p>
        <div id='works-grid'>

          <div id='s1t-row' className='grid' onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)} >
            <div className='left'>
              <p>SpringOne Tour</p>
              <h1>01</h1>
            </div>
            <div className='mid'>
              <div id='s1t' className='image-container relative overflow-hidden'>
                {!disableVideos && (
                  <video className='absolute top-0 left-0' autoPlay muted loop>
                    <source src='movies/springone-tour.mp4' type="video/mp4"></source>
                      Your browser does not support the video tag.
                  </video>
                )}
                <img src='/images/springone-tour.png' alt='' className='absolute top-0 left-0 w-full'></img>
              </div>
            </div>
            <div className='right'>
              <p className='mb-2vw'>Year</p>
              <h3>-</h3>

              <p className='mb-2vw'>Role</p>
              <h3>Frontend developer</h3>

              <p>Technologies</p>
              <div className='flex'>
                <h4 className='pill'>###</h4>
                <h4 className='pill'>###</h4>
                <h4 className='pill'>###</h4>
              </div>

              <p className='description flex'>
                <motion.span 
                  transition={{ duration: .2, ease: [0.075, 0.82, 0.165, 1], delay: .2}}
                  initial={{scaleY: 0}}
                  animate={!disableAnimations && isHovered1 ? {scaleY: 1} : {}}
                  className='plus inline-block self-start'>+</motion.span>
                <motion.span 
                  transition={{ duration: .2, ease: [0.075, 0.82, 0.165, 1], delay: .4}}
                  initial={{x: -10, opacity: 0}}
                  animate={!disableAnimations && isHovered1 ? {x: 0, opacity: 1} : {}}
                  className='inline-block'>
                    Created a multi-track streaming platform for a virtual conference with chat intergration, a rating system and a sidebar that displays & updates the sessions in real-time according to the user's timezone.
                </motion.span>
              </p>
            </div>
          </div>

{/* SELECTED WORKS */}
          <div className='grid' onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
            <div className='left'>
              <p>The History of Spring</p>
              <h1>02</h1>
              <Link url={'https://springone.io/history-of-spring'} text={'Visit site'} isCTA={false}></Link>
            </div>
            <div className='mid'>
              <div id='history' className='image-container relative overflow-hidden'>
                <img src='/images/history-of-spring.png' alt='' className='absolute top-0 left-0 w-full'></img>
              </div>
            </div>
            <div className='right'>
              <p className='mb-2vw'>Year</p>
              <h3>###</h3>

              <p className='mb-2vw'>Role</p>
              <h3>###</h3>

              <p>Technologies</p>
              <div className='flex'>
                <h4 className='pill'>###</h4>
                <h4 className='pill'>###</h4>
                <h4 className='pill'>###</h4>
              </div>
              <p className='description flex'>
                <motion.span 
                  transition={{ duration: .2, ease: [0.075, 0.82, 0.165, 1], delay: .2}}
                  initial={{scaleY: 0}}
                  animate={!disableAnimations && isHovered2 ? {scaleY: 1} : {}}
                  className='plus inline-block self-start'>+</motion.span>
                <motion.span 
                  transition={{ duration: .5, ease: [0.075, 0.82, 0.165, 1], delay: .4}}
                  initial={{x: -10, opacity: 0}}
                  animate={!disableAnimations && isHovered2 ? {x:0, opacity: 1} : {}}
                  className='inline-block'>
                    lorem ipsum dolor sit amet jamet 
                </motion.span>
              </p>
            </div>
          </div>

          <div id='dev-center-row' className='grid' onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
            <div className='left'>
              <p>Tanzu Developer Center</p>
              <h1>03</h1>
            </div>
            <div className='mid'>
              <div id='devcenter' className='image-container relative overflow-hidden'>
                {!disableVideos && (
                  <video className='absolute top-0 left-0' autoPlay muted loop>
                    <source src='movies/tanzu-developer-center-720p.mp4' type="video/mp4"></source>
                      Your browser does not support the video tag.
                  </video>
                )}
                <img src='/images/dev-center-home.png' alt='' className='absolute top-0 left-0 w-full'></img>
              </div>
            </div>
            <div className='right'>
              <p className='mb-2vw'>Year</p>
              <h3>2021</h3>

              <p className='mb-2vw'>Role</p>
              <h3>Frontend developer + UI/UX designer</h3>

              <p>Technologies</p>
              <div className='flex'>
                <h4 className='pill'>Hugo</h4>
                <h4 className='pill'>Javascript</h4>
                <h4 className='pill'>CSS/SCSS</h4>
              </div>

              <p className='description flex'>
                <motion.span 
                  transition={{ duration: .2, ease: [0.075, 0.82, 0.165, 1], delay: .2}}
                  initial={{scaleY: 0}}
                  animate={!disableAnimations && isHovered3 ? {scaleY: 1} : {}}
                  className='plus inline-block self-start'>+</motion.span>
                <motion.span 
                  transition={{ duration: .5, ease: [0.075, 0.82, 0.165, 1], delay: .4}}
                  initial={{x:-10 ,opacity: 0}}
                  animate={!disableAnimations && isHovered3 ? {x:0, opacity: 1} : {}}
                  className='inline-block'>
                    Spearheaded the redesign by introducing animations, refining layouts, adding a dynamic nav bar and implementing tabbable navigation to meet accessibility standards.
                </motion.span>
              </p>
            </div>
          </div>

          <div className='grid' onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)}>
            <div className='left'>
              <p>Spring.io</p>
              <h1>04</h1>
              <Link url={'https://spring.io'} text={'Visit site'} isCTA={false}></Link>
            </div>
            <div className='mid'>
              <div id='spring' className='image-container relative overflow-hidden'>
                <img src='/images/spring.png' alt='' className='absolute top-0 left-0 w-full'></img>
              </div>
            </div>
            <div className='right'>
              <p className='mb-2vw'>Year</p>
              <h3>2019</h3>

              <p className='mb-2vw'>Role</p>
              <h3>Frontend developer</h3>

              <p>Technologies</p>
              <div className='flex'>
                <h4 className='pill'>Javascript</h4>
                <h4 className='pill'>CSS/SCSS</h4>
                <h4 className='pill'>HTML</h4>
              </div>
              <p className='description flex'>
                <motion.span 
                  transition={{ duration: .2, ease: [0.075, 0.82, 0.165, 1], delay: .2}}
                  initial={{scaleY: 0}}
                  animate={!disableAnimations && isHovered4 ? {scaleY: 1} : {}}
                  className='plus inline-block self-start'>+</motion.span>
                <motion.span 
                  transition={{ duration: .5, ease: [0.075, 0.82, 0.165, 1], delay: .4}}
                  initial={{x:-10, opacity: 0}}
                  animate={!disableAnimations && isHovered4 ? {x:0, opacity: 1} : {}}
                  className='inline-block'>
                    Built out the frontend for Spring.io from scratch. Implemented animations to enrich user experience.
                </motion.span>
              </p>
            </div>
          </div>

          <div className='grid' onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)}>
            <div className='left'>
              <p>Who's That Pokémon? TCG</p>
              <h1>05</h1>
              <Link url={'https://whosthatpokemontcg.com/'} text={'Visit site'} isCTA={false}></Link>
            </div>
            <div className='mid'>
              <div id='pokemon' className='image-container relative overflow-hidden'>
                <div className='moving-background absolute top-0 left-0 w-full'></div>
                <img src='/images/pokemon-bg-less.png' alt='' className='absolute top-0 left-0 w-full'></img>
              </div>
            </div>
            <div className='right'>
              <p className='mb-2vw'>Year</p>
              <h3>2024</h3>

              <p className='mb-2vw'>Role</p>
              <h3>Game developer + UI/UX designer</h3>

              <p>Technologies</p>
              <div className='flex'>
                <h4 className='pill'>React</h4>
                <h4 className='pill'>Framer</h4>
                <h4 className='pill'>Tailwind</h4>
                <h4 className='pill'>API</h4>
              </div>
              <p className='description flex'>
                <motion.span 
                  transition={{ duration: .2, ease: [0.075, 0.82, 0.165, 1], delay: .2}}
                  initial={{scaleY: 0}}
                  animate={!disableAnimations && isHovered5 ? {scaleY: 1} : {}}
                  className='plus inline-block self-start'>+</motion.span>
                <motion.span 
                  transition={{ duration: .5, ease: [0.075, 0.82, 0.165, 1], delay: .4}}
                  initial={{x:-10, opacity: 0}}
                  animate={!disableAnimations && isHovered5 ? {x:0, opacity: 1} : {}}
                  className='inline-block'>
                    Produced a React-based web game that fetches a random Pokémon card using the Pokémon TCG API and prompts the user to guess the name of the character.
                </motion.span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// SELECTED WORK END
export default SelectedWorks;