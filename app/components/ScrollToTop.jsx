'use client';
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div 
          onClick={scrollToTop} 
          className='fixed right-4 sm:right-6 md:right-8 
                     bottom-4 sm:bottom-6 md:bottom-8 
                     bg-blue-500 dark:bg-gray-700 
                     text-white 
                     rounded-full 
                     cursor-pointer 
                     shadow-md 
                     z-50 
                     flex items-center justify-center
                     w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'
          style={{
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;