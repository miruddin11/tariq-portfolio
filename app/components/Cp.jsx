import React, { useState } from 'react';
import { serviceData, assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProfileCard = ({ icon, title, description, link, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.2, 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -inset-0.5 
        bg-gradient-to-r from-blue-500 to-purple-500 
        rounded-3xl 
        opacity-0 group-hover:opacity-75 
        transition-opacity duration-500 
        blur-md group-hover:blur-lg"></div>
      
      <div className="relative p-5 sm:p-6 bg-white dark:bg-gray-900 
        rounded-3xl border border-gray-200 dark:border-gray-800
        shadow-lg 
        transform transition-all duration-500
        group-hover:scale-[1.02] group-hover:shadow-2xl
        flex flex-col items-center justify-between h-full min-h-[320px]"
      >
        {/* Icon Section */}
        <div className="mb-4 w-full flex justify-center relative">
          <motion.div
            whileHover={{ 
              rotate: 360, 
              scale: 1.2,
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 10 
              }
            }}
            className="w-20 h-20 sm:w-28 sm:h-28 
            bg-gradient-to-br from-blue-100 to-purple-100
            dark:from-blue-900/30 dark:to-purple-900/30
            rounded-full shadow-lg flex items-center justify-center 
            transform transition-all duration-500"
          >
            <Image 
              src={icon} 
              alt={title} 
              width={48} 
              height={48} 
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
          </motion.div>
          
          {/* Decorative Accent */}
          <div className="absolute top-0 right-0 
            w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-500"></div>
        </div>

        {/* Content Section */}
        <div className="text-center mb-4 w-full flex-grow px-2">
          <h3 className="text-lg sm:text-xl font-bold 
            text-gray-800 dark:text-white 
            group-hover:text-blue-600 dark:group-hover:text-blue-300 
            transition-colors duration-300 mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>

        {/* Action Section */}
        <div className="w-full flex justify-center mt-3">
          <motion.a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden 
            w-10 h-10 rounded-full
            bg-gradient-to-r from-blue-500 to-purple-500 
            shadow-md hover:shadow-xl
            transition-all duration-300 
            flex items-center justify-center
            group"
            aria-label={`Open ${title} profile`}
          >
            <Image 
              src={assets.right_arrow} 
              alt="" 
              width={20}
              height={20}
              className="w-5 h-5
              filter brightness-0 invert
              transition-transform duration-300"
            />
            
            {/* Hover Overlay */}
            <span 
              className="absolute inset-0 
              bg-white bg-opacity-20 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300"
            />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Cp = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="cp"
      className="w-full px-[8%] py-8 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-4xl font-Ovo text-gray-800 dark:text-white mb-4"
      >
        My Coding Profiles
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-8 font-Ovo 
        text-gray-600 dark:text-gray-300"
      >
        What I love to do.
      </motion.p>

      {/* Competitive Programming Profiles */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 my-6 max-w-[2000px] mx-auto px-4"
      >
        {serviceData.map((profile, index) => (
          <ProfileCard 
            key={index} 
            icon={profile.icon} 
            title={profile.title}
            description={profile.description}
            link={profile.link} 
            index={index} 
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Cp;