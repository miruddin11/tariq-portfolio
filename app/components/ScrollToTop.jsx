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
    // Add scrollbar styles
    const style = document.createElement('style');
    style.id = 'custom-scrollbar';
    style.textContent = `
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      
      /* Track */
      ::-webkit-scrollbar-track {
        background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; 
        border-radius: 4px;
      }
      
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
        background-size: 200% 200%;
        border-radius: 4px;
        transition: all 0.3s ease;
        animation: gradient-shift 3s ease infinite;
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        box-shadow: 0 0 10px rgba(139, 92, 246, 0.7);
      }
      
      /* For Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: #8b5cf6 #1e293b;
      }
      
      /* Gradient animation */
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    
    document.head.appendChild(style);
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      const existingStyle = document.getElementById('custom-scrollbar');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, [isDarkMode]);

  return (
    <>
      {isVisible && (
        <div 
          onClick={scrollToTop} 
          className='fixed right-4 sm:right-6 md:right-8 
                     bottom-4 sm:bottom-6 md:bottom-8 
                     bg-blue-500 dark:bg-gray-700 
                     hover:bg-blue-600 dark:hover:bg-gray-600
                     text-white 
                     rounded-full 
                     cursor-pointer 
                     shadow-lg
                     z-50 
                     flex items-center justify-center
                     w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                     transition-all duration-300
                     hover:scale-110'
          style={{
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.5)'
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;