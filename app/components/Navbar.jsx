import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 50){
                setIsScroll(true);
            }
            else{
                setIsScroll(false);
            }
        })
    },[])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const mobileMenuItems = [
        { label: 'Home', href: '#top' },
        { label: 'About', href: '#about' },
        {label:  'Skills', href: '#skills'},
        { label: 'Coding Profiles', href: '#cp' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Education', href: '#academics' },
    ];

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt="" className='w-full'/>
            </div>
            <nav className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
                isScroll 
                    ? "bg-white/50 dark:bg-gray-900/50 backdrop-blur-md shadow-md dark:shadow-gray-800/20" 
                    : "bg-transparent"
            }`}>
                <a href="#top" className="hover:opacity-90 transition-opacity">
                    <Image 
                        src={isDarkMode ? assets.logo_dark : assets.logo} 
                        className='w-28 cursor-pointer mr-14 transition-transform hover:scale-105' 
                        alt="Logo"
                    />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2.5 transition-all duration-300 ${
                    isScroll 
                        ? "bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-sm" 
                        : "bg-white/90 dark:bg-gray-800/90 shadow-sm"
                }`}>
                    {mobileMenuItems.map((item, index) => (
                        <li key={index}>
                            <a 
                                className='font-Ovo 
                                transition-all duration-300 
                                hover:border-b-2 hover:border-blue-500 
                                hover:scale-105 
                                active:scale-95' 
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center gap-4'>
                    <button 
                        onClick={() => setIsDarkMode(prev => !prev)}
                        className='p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'
                        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        <Image 
                            src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
                            alt='' 
                            width={24}
                            height={24}
                            className='w-6 h-6 transition-transform duration-300 hover:rotate-180'
                        />
                    </button>
                    <a 
                        href="#contact" 
                        className='hidden lg:flex items-center gap-2 px-7 py-2 border border-gray-400 rounded-full font-Ovo
                        text-base
                        dark:border-gray-500
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        transition-colors duration-200'
                    >
                        Contact
                        <Image 
                            src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} 
                            alt="" 
                            width={12}
                            height={12}
                            className='w-3 h-3'
                        />
                    </a>
                    <button 
                        className='md:hidden block ml-3 p-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300' 
                        onClick={toggleMobileMenu}
                        aria-label="Open Mobile Menu"
                    >
                        <Image 
                            src={isDarkMode ? assets.menu_white : assets.menu_black} 
                            alt='Menu' 
                            width={20}
                            height={20}
                            className='w-6 h-6 block'
                        />
                    </button>
                </div>
            </nav>

            {/* Full-screen Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className='fixed inset-0 z-[100] bg-white/20 dark:bg-black/20 backdrop-blur-md flex flex-col items-center justify-center 
                    transition-all duration-300 ease-in-out transform 
                    animate-fade-in-down'
                    role="dialog" 
                    aria-modal="true" 
                    aria-label="Mobile Navigation Menu"
                >
                    <button 
                        className='absolute top-6 right-6 p-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group' 
                        onClick={toggleMobileMenu}
                        aria-label="Close Mobile Menu"
                    >
                        <Image 
                            src={isDarkMode ? assets.close_white : assets.close_black} 
                            alt='Close' 
                            width={24}
                            height={24}
                            className='w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity'
                        />
                    </button>
                    <ul className='flex flex-col items-center gap-4 mt-8'>
                        {mobileMenuItems.map((item, index) => (
                            <li key={index} className='w-full text-center'>
                                <a 
                                    className='text-xl font-Ovo 
                                    text-gray-700 dark:text-gray-200 
                                    hover:text-rose-500 dark:hover:text-rose-300 
                                    focus:text-rose-600 dark:focus:text-rose-200
                                    active:scale-95 
                                    transition-all duration-200 
                                    px-4 py-2 block 
                                    rounded-xl 
                                    hover:bg-gray-100 dark:hover:bg-gray-800' 
                                    href={item.href} 
                                    onClick={toggleMobileMenu}
                                    role="menuitem"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className='w-full text-center'>
                            <a 
                                href="#contact" 
                                className='text-xl font-Ovo 
                                text-gray-700 dark:text-gray-200 
                                hover:text-rose-500 dark:hover:text-rose-300 
                                focus:text-rose-600 dark:focus:text-rose-200
                                active:scale-95 
                                transition-all duration-200 
                                px-4 py-2 block 
                                rounded-xl 
                                hover:bg-gray-100 dark:hover:bg-gray-800'
                                onClick={toggleMobileMenu}
                                role="menuitem"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default Navbar