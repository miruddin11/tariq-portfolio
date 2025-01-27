import React from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = ({isDarkMode}) => {
  return (
    <footer className={`mt-20 py-12 ${isDarkMode ? 'bg-transparent' : 'bg-white'}`}>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8'>
          <Image 
            src={isDarkMode ? assets.logo_dark : assets.logo} 
            alt='Logo' 
            className='w-36 mx-auto mb-4 hover:scale-105 transition-transform duration-300'
          />
          <div className='flex items-center justify-center gap-2 text-lg'>
            <FaEnvelope className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
            <a 
              href="mailto:mirtariquddin666@gmail.com" 
              className='hover:text-blue-500 transition-colors duration-300 dark:text-white/80'
            >
              mirtariquddin666@gmail.com
            </a>
          </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-opacity-50 border-gray-400 pt-6'>
          <p className={`mb-4 sm:mb-0 opacity-80 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}> 2025 Mir Tariquddin. All rights reserved.</p>
          <ul className='flex items-center gap-6 justify-center'>
            {[
              { icon: FaGithub, url: "https://github.com/miruddin11", name: "GitHub" },
              { icon: FaLinkedin, url: "https://linkedin.com/in/mir-tariquddin", name: "LinkedIn" },
              { icon: FaTwitter, url: "https://twitter.com/mir_tariquddin", name: "Twitter" }
            ].map(({icon: Icon, url, name}) => (
              <li key={name}>
                <a 
                  href={url} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 hover:text-blue-500 transition-colors duration-300 group'
                >
                  <Icon className={`w-6 h-6 group-hover:scale-110 transition-transform ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`} />
                  <span className='hidden sm:inline dark:text-white/80'>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
