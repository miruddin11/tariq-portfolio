'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { FaRocket } from 'react-icons/fa';

const ScrollToTop = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  // Scroll to top function with launch animation
  const scrollToTop = useCallback(() => {
    setIsLaunching(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Reset launch animation after scroll completes
    setTimeout(() => {
      setIsLaunching(false);
    }, 1000);
  }, []);

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

      /* Rocket animations */
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
        100% { transform: translateY(0px); }
      }

      @keyframes launch {
        0% { 
          transform: translateY(0) scale(1);
          opacity: 1;
        }
        100% { 
          transform: translateY(-100vh) scale(0.5);
          opacity: 0;
        }
      }

      .rocket-launch {
        animation: launch 1s ease-out forwards;
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
  }, [isDarkMode, toggleVisibility]);

  return (
    <>
      {isVisible && (
        <div 
          onClick={scrollToTop} 
          className={`fixed right-4 sm:right-6 md:right-8 
                     bottom-4 sm:bottom-6 md:bottom-8 
                     bg-gradient-to-br from-blue-500 to-purple-600 
                     dark:from-purple-700 dark:to-blue-800
                     hover:from-blue-600 hover:to-purple-700 
                     dark:hover:from-purple-800 dark:hover:to-blue-900
                     text-white 
                     rounded-full 
                     cursor-pointer 
                     shadow-lg
                     z-50 
                     flex items-center justify-center
                     w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18
                     transition-all duration-300
                     hover:scale-110
                     ${isLaunching ? 'rocket-launch' : 'animate-float'}`}
          style={{
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.5)',
            animation: isLaunching ? 'none' : 'float 3s ease-in-out infinite'
          }}
          aria-label="Scroll to top"
        >
          <FaRocket className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transform -rotate-45 ${isLaunching ? 'text-yellow-300' : 'text-white'}`} />
          <div className={`absolute -bottom-1 w-6 h-1 bg-yellow-400 rounded-full blur-sm ${isLaunching ? 'animate-ping' : 'opacity-0'}`}></div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;