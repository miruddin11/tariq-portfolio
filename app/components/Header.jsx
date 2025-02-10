import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "framer-motion"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from 'react'
import Typed from 'typed.js'

const Header = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded", container);
  }, []);

  const typedRef = useRef(null);
  const typedElementRef = useRef(null);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      window.location.href = 'mailto:mirtariquddin666@gmail.com';
      console.warn('Contact section not found - using mailto fallback');
    }
  };

  const handleResumeDownload = () => {
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1hutn-aYFbA9GSzzYGaCC3borZx74RKHh';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Mir_Tariquddin_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Resume download initiated');
  };

  useEffect(() => {
    if (typedElementRef.current) {
      const options = {
        strings: [
          "Full-Stack Developer", 
          "Competitive Programmer", 
          "Algorithm Enthusiast"
        ],
        typeSpeed: 100,  
        backSpeed: 50,   
        backDelay: 1000, 
        loop: true,
        cursorChar: '', 
        showCursor: false, 
        fadeOut: false,  
        startDelay: 500,  
        onStringTyped: (arrayPos) => {
          const colorSets = [
            ['from-blue-600', 'to-purple-600', 'dark:from-blue-400', 'dark:to-purple-400'],
            ['from-green-600', 'to-teal-600', 'dark:from-green-400', 'dark:to-teal-400'],
            ['from-red-600', 'to-pink-600', 'dark:from-red-400', 'dark:to-pink-400']
          ];

          if (typedElementRef.current) {
            const prevColorSet = colorSets[(arrayPos - 1 + colorSets.length) % colorSets.length];
            prevColorSet.forEach(colorClass => {
              typedElementRef.current.classList.remove(colorClass);
            });

            const currentColorSet = colorSets[arrayPos % colorSets.length];
            currentColorSet.forEach(colorClass => {
              typedElementRef.current.classList.add(colorClass);
            });
          }
        }
      };

      typedRef.current = new Typed(typedElementRef.current, options);

      return () => {
        if (typedRef.current) {
          typedRef.current.destroy();
        }
      };
    }
  }, []);

  return (
    <div className='relative w-full min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-lightBg to-blue-50 
    dark:from-darkBg dark:to-gray-900 
    overflow-hidden
    animate-background-shift'>
      {/* Particle Web Background */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <Particles
          id="header-particles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: false,
              zIndex: -1
            },
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: ["#a3a3a3", "#6b7280", "#9ca3af"]
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.7,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.3,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#9ca3af",
                opacity: 0.6,
                width: 1
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: ["grab", "repulse"]
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: {
                  enable: true,
                  delay: 0.5
                }
              },
              modes: {
                grab: {
                  distance: 200,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}
        />
      </div>
      
      {/* Subtle background shapes */}
      <div className='absolute top-0 left-0 w-64 h-64 bg-blue-200/30 
      dark:bg-blue-900/20 rounded-full blur-3xl -z-10 animate-blob'></div>
      <div className='absolute bottom-0 right-0 w-72 h-72 bg-purple-200/30 
      dark:bg-purple-900/20 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000'></div>

      <div className='w-11/12 max-w-4xl mx-auto text-center 
      flex flex-col items-center justify-center gap-6 p-4
      relative z-10 pointer-events-auto'>
        <motion.div 
          initial={{scale:0, rotate: -180}}
          whileInView={{scale:1, rotate: 0}}
          transition={{
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            duration: 1
          }}
          className='mb-4 sm:mb-6 md:mb-8'
        >
          <Image 
            src={assets.profile_img} 
            alt='Profile Picture' 
            width={150} 
            height={150}
            className='rounded-full border-4 border-white 
            shadow-2xl hover:scale-105 transition-transform duration-300
            w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-[150px] lg:h-[150px]'
          />
        </motion.div>

        <motion.h3 
          initial={{y:-20, opacity: 0}}
          whileInView={{y:0, opacity: 1}}
          transition={{duration:0.6, delay:0.3}}
          className='flex items-center justify-center gap-2 
          text-xl md:text-2xl mb-3 font-Ovo text-gray-800 dark:text-white'
        >
          Hi! I'm Mir Tariquddin 
          <Image 
            src={assets.hand_icon} 
            alt='Wave' 
            className='w-6 animate-wave'
          />
        </motion.h3>

        <motion.h1 
          initial={{y:-30, opacity: 0, letterSpacing: '-0.1em'}}
          whileInView={{y:0, opacity: 1, letterSpacing: '0em'}}
          transition={{duration:0.8, delay:0.5}}
          className='text-4xl sm:text-6xl lg:text-[66px] 
          font-Ovo font-bold text-gray-800 dark:text-gray-300
          mb-6'
        >
          Aspiring Software Developer based in India
        </motion.h1>

        <motion.p 
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration:0.6, delay:0.7}}
          className='max-w-2xl mx-auto font-Ovo text-gray-700 
          dark:text-gray-300 text-base sm:text-lg leading-relaxed 
          flex items-center justify-center gap-1'
        >
          <span className='static-text text-gray-700 dark:text-gray-300 text-base sm:text-lg mr-1'>
            I am a
          </span>
          <span 
            ref={typedElementRef} 
            className='font-bold text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-600 to-purple-600 
            dark:from-blue-400 dark:to-purple-400 inline-block'
          ></span>
        </motion.p>

        <div className='flex space-x-4 mt-8'>
          <button 
            onClick={handleContactClick}
            className='px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 
            text-white font-bold rounded-full shadow-lg hover:scale-105 
            transition-all duration-300 ease-in-out relative
            text-sm sm:text-base'
          >
            Contact Me
          </button>
          <button 
            onClick={handleResumeDownload}
            className='px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-gradient-to-r from-purple-600 to-blue-600 
            text-white font-bold rounded-full shadow-md hover:scale-105 
            transition-all duration-300 ease-in-out flex items-center space-x-2 relative'
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header