import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/assets/assets';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaCode,
  FaHeart,
  FaReact,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaDatabase,
  FaRocket
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript,
  SiMongodb,
  SiGooglecloud
} from 'react-icons/si';

const SOCIAL_LINKS = [
  { 
    icon: FaGithub, 
    url: "https://github.com/miruddin11", 
    name: "GitHub",
    ariaLabel: "Visit my GitHub profile" 
  },
  { 
    icon: FaLinkedin, 
    url: "https://linkedin.com/in/mir-tariquddin", 
    name: "LinkedIn",
    ariaLabel: "Connect with me on LinkedIn" 
  },
  { 
    icon: FaTwitter, 
    url: "https://twitter.com/mir_tariquddin", 
    name: "Twitter",
    ariaLabel: "Follow me on Twitter" 
  }
];

const TECH_ICONS = [
  { 
    icon: FaReact, 
    name: "React", 
    color: "#61DAFB",
    hoverColor: "#00D8FF"
  },
  { 
    icon: SiNextdotjs, 
    name: "Next.js", 
    color: "currentColor",
    hoverColor: "#FFFFFF"
  },
  { 
    icon: SiTailwindcss, 
    name: "Tailwind CSS", 
    color: "#06B6D4",
    hoverColor: "#38BDF8"
  },
  { 
    icon: FaPython, 
    name: "Python", 
    color: "#3776AB",
    hoverColor: "#FFD43B"
  },
  { 
    icon: FaNodeJs, 
    name: "Node.js", 
    color: "#339933",
    hoverColor: "#6CC24A"
  },
  { 
    icon: SiMongodb, 
    name: "MongoDB", 
    color: "#47A248",
    hoverColor: "#4DB33D"
  },
  { 
    icon: FaDocker, 
    name: "Docker", 
    color: "#2496ED",
    hoverColor: "#0DB7ED"
  },
  { 
    icon: SiGooglecloud, 
    name: "Google Cloud", 
    color: "#4285F4",
    hoverColor: "#34A853"
  }
];

const Footer = ({isDarkMode}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`
        w-full py-12 transition-colors duration-300
        ${isDarkMode 
          ? 'bg-gradient-to-br from-darkBg to-black text-white/90' 
          : 'bg-gradient-to-br from-lightBg to-blue-50 text-gray-800'}
      `}
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          {/* Logo and Contact Section */}
          <div className='text-center md:text-left'>
            <Image 
              src={isDarkMode ? assets.logo_dark : assets.logo} 
              alt='Mir Tariquddin Logo' 
              width={150}
              height={50}
              className='mx-auto md:mx-0 mb-4 hover:scale-105 transition-transform duration-300'
            />
            <div className='flex items-center justify-center md:justify-start gap-3 text-base'>
              <FaEnvelope className={`w-5 h-5 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`} />
              <a 
                href="mailto:mirtariquddin666@gmail.com" 
                className='hover:text-blue-500 transition-colors duration-300 dark:text-white/80'
                aria-label="Send me an email"
              >
                mirtariquddin666@gmail.com
              </a>
            </div>
          </div>

          {/* Social and Copyright Section */}
          <div className='text-center md:text-right'>
            <div className='flex items-center justify-center md:justify-end gap-6 mb-4'>
              {SOCIAL_LINKS.map(({icon: Icon, url, name, ariaLabel}) => (
                <Link 
                  key={name} 
                  href={url} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  aria-label={ariaLabel}
                  className='
                    group relative overflow-hidden rounded-full p-2
                    transition-all duration-300 ease-in-out
                    hover:bg-blue-50/20 hover:scale-110
                  '
                >
                  <Icon 
                    className={`
                      w-6 h-6 transition-colors duration-300
                      ${isDarkMode 
                        ? 'text-white/70 group-hover:text-white' 
                        : 'text-gray-600 group-hover:text-blue-600'}
                    `} 
                  />
                </Link>
              ))}
            </div>
            
            <p 
              className={`
                text-sm opacity-70 flex items-center justify-center md:justify-end gap-2
                ${isDarkMode ? 'text-white/60' : 'text-gray-600'}
              `}
            >
              {currentYear} Mir Tariquddin 
              <FaCode className="inline mx-1" />
              with 
              <FaHeart className="inline text-red-500 mx-1" />
              All rights reserved
            </p>

            {/* Tech Stack Icons */}
            <div className='flex flex-wrap justify-center md:justify-end gap-3 mt-6'>
              {TECH_ICONS.map(({icon: Icon, name, color, hoverColor}) => (
                <div 
                  key={name}
                  className='
                    group relative tooltip
                    transition-all duration-300 ease-in-out
                  '
                  title={name}
                >
                  <Icon 
                    className={`
                      w-5 h-5 transition-all duration-300
                      ${isDarkMode 
                        ? 'text-white/60 group-hover:text-white' 
                        : 'text-gray-500 group-hover:text-gray-800'}
                    `}
                    style={{
                      color: isDarkMode ? 'inherit' : color,
                      transform: 'scale(1)',
                      transition: 'transform 0.3s, color 0.3s'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
