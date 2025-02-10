import React, { useState } from 'react';
import { serviceData, assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProfileCard = ({ icon, title, link, index }) => {
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
      
      <div className="relative p-8 bg-white dark:bg-gray-900 
        rounded-3xl border border-gray-200 dark:border-gray-800
        shadow-lg 
        transform transition-all duration-500
        group-hover:scale-[1.02] group-hover:shadow-2xl
        flex flex-col items-center justify-between"
      >
        {/* Icon Section */}
        <div className="mb-6 w-full flex justify-center relative">
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
            className="w-28 h-28 
            bg-gradient-to-br from-blue-100 to-purple-100
            dark:from-blue-900/30 dark:to-purple-900/30
            rounded-full shadow-lg flex items-center justify-center 
            transform transition-all duration-500"
          >
            <Image 
              src={icon} 
              alt={title} 
              width={64} 
              height={64} 
              className="w-16 h-16 object-contain"
            />
          </motion.div>
          
          {/* Decorative Accent */}
          <div className="absolute top-0 right-0 
            w-6 h-6 bg-blue-500 rounded-full 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-500"></div>
        </div>

        {/* Content Section */}
        <div className="text-center mb-6 w-full">
          <h3 className="text-2xl font-bold 
            text-gray-800 dark:text-white 
            group-hover:text-blue-600 dark:group-hover:text-blue-300 
            transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Action Section */}
        <div className="w-full flex justify-center mt-auto">
          <motion.a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden 
            px-4 py-2 rounded-full 
            bg-gradient-to-r from-blue-500 to-purple-500 
            text-white font-semibold text-sm
            shadow-md hover:shadow-xl
            transition-all duration-300 
            flex items-center justify-center
            group"
          >
            <span className="relative z-10">View Profile</span>
            <Image 
              src={assets.right_arrow} 
              alt="" 
              width={20}
              height={20}
              className="w-4 h-4 ml-1 
              filter brightness-0 invert
              transform group-hover:translate-x-1 
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
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400"
      >
        About Competitive Programming
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo text-gray-800 dark:text-white"
      >
        My Profiles
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo 
        text-gray-600 dark:text-gray-300"
      >
        I have been doing competitive programming for the past 3 years. I have participated in various contests and
        have been able to achieve good ranks in them. Here are some of my profiles where you can see my ratings and
        rankings.
      </motion.p>

      {/* Competitive Programming Profiles */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 my-10"
      >
        {serviceData.map((profile, index) => (
          <ProfileCard 
            key={index} 
            icon={profile.icon} 
            title={profile.title} 
            link={profile.link} 
            index={index} 
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Cp;