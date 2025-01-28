import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react";

const header = () => {
  return (
    <div className='w-11/12 max-w-3xl mx-auto text-center h-screen
    flex flex-col items-center justify-center gap-4'>
      <motion.div 
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.8,type:'spring', stiffness: 100}}
      >
        <Image 
          src={assets.profile_img} 
          alt='' 
          className='rounded-full w-36 md:w-48 
          shadow-2xl hover:scale-105 
          transition-all duration-500'
        />
      </motion.div>
      <motion.h3 
      initial={{y:-20,opacity: 0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.6,delay:0.3}}
      className='flex items-center gap-3 text-xl md:text-2xl mb-3 font-Ovo 
      text-gray-800 dark:text-white'>
            Hi! I'm Mir Tariquddin<Image src={assets.hand_icon} alt='' className='w-6'/>
      </motion.h3>
      <motion.h1 
      initial={{y:-30,opacity: 0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.8,delay:0.5}}
      className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo 
      text-gray-900 dark:text-white text-center 
      leading-tight tracking-tight'>
        Software Developer based in India.
      </motion.h1>
      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6,delay:0.7}}
      className='max-w-2xl mx-auto font-Ovo text-center 
      text-gray-700 dark:text-gray-300 leading-relaxed'>
        A passionate Full Stack Developer with expertise in modern web technologies. 
        I specialize in crafting responsive and efficient web applications using React, 
        Next.js, and Node.js. With a strong foundation in both frontend and backend 
        development, I transform complex problems into elegant, user-centric solutions.
      </motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a 
        initial={{y:30,opacity: 0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6,delay:1}}
        href="#contact"
        className='px-10 py-3 border border-white rounded-full bg-black
        text-white flex items-center gap-2 dark:bg-transparent'>
          contact me<Image src={assets.right_arrow_white} alt='' 
          className='w-4'/>
        </motion.a>

        <motion.a 
        initial={{y:30,opacity: 0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6,delay:1.2}}
        href="https://drive.google.com/uc?export=download&id=1hutn-aYFbA9GSzzYGaCC3borZx74RKHh" download 
        className='px-10 py-3 border rounded-full border-gray-500 flex
        items-center gap-2 bg-white dark:text-black'>
          my resume<Image src={assets.download_icon} alt='' 
          className='w-4'/>
        </motion.a>
      </div>
    </div>
  )
}

export default header
