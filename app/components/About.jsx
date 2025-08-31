import React, { useRef, useEffect } from 'react';
import { motion, useInView } from "framer-motion";
import Image from 'next/image';
import profileLogo from '../../assets/profile_logo.png';

const About = ({ isDarkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { 
      opacity: 0, 
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      }
    },
  };

  const headingItem = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2
      }
    },
  };

  const contentItem = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.4
      }
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.5
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        type: 'spring',
        stiffness: 200,
      }
    }
  };

  return (
    <section 
      id='about' 
      ref={ref}
      className='relative w-full min-h-screen flex items-start pt-24 pb-16 overflow-hidden bg-lightBg dark:bg-darkBg scroll-mt-16'
    >
      <div className='container mx-auto px-4 sm:px-6 max-w-5xl'>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.h2 
            variants={headingItem}
            className='text-2xl sm:text-3xl font-Ovo font-bold text-center text-gray-800 dark:text-white mb-8'
          >
            About Me
          </motion.h2>

          <div className='flex flex-col lg:flex-row items-start gap-8 lg:gap-12'>
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              className='flex-shrink-0 w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 shadow-lg mx-auto lg:mx-0 lg:mt-16 order-1'
              style={{
                borderColor: isDarkMode ? '#7c3aed' : '#3b82f6',
              }}
            >
              <Image 
                src={profileLogo} 
                alt="Profile"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>

            <motion.div 
              variants={contentItem}
              className="space-y-5 text-base sm:text-lg font-Ovo max-w-3xl order-2"
            >
              <motion.div variants={item} className="space-y-5">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm Mir Tariquddin, a Computer Science graduate from Odisha University of Technology and Research, Bhubaneswar, with a CGPA of 9.63, ranked among the Top 5 in my university and a merit scholarship recipient. I will be joining TCS as a Prime candidate. During my college years, I served as the Lead of the Competitive Programming Club (CodeChef Chapter at OUTR, BBSR), where I mentored fellow students and organized coding competitions.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My professional experience includes roles as an SDE Intern at ITJOBXS, Teaching Assistant at Coding Ninjas, and Subject Matter Expert at Unacademy, which strengthened both my technical and mentoring abilities. I'm deeply passionate about competitive programming and problem-solving. I'm a Guardian on LeetCode, 5-Star on CodeChef, 4-Star on GeeksforGeeks (Rank 4), Specialist on Codeforces, and Expert on CodeStudio.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I secured a global rank of 109 in TCS CodeVita Season 12, qualified for Round 2 of Meta Hacker Cup, and have solved over 2000 problems across platforms. Beyond programming, I enjoy building impactful web projects and exploring applications of Machine Learning.
                </p>
              </motion.div>

              <motion.div 
                variants={item}
                className="pt-4 text-center -ml-2"
              >
                <motion.a
                  href="https://drive.google.com/uc?export=download&id=1hutn-aYFbA9GSzzYGaCC3borZx74RKHh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-8 py-2.5 rounded-full text-white text-base font-Ovo font-medium ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                  } transition-all duration-300 shadow-md hover:shadow-lg`}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Download Resume</span>
                  <svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                    />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className='absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2' />
      <div className='absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full -translate-x-1/2 translate-y-1/2' />
    </section>
  );
};

export default About;