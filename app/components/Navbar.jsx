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
        { label: 'About Me', href: '#about' },
        { label: 'Coding', href: '#cp' },
        { label: 'Projects', href: '#projects' },
        { label: 'Academics', href: '#academics' },
        { label: 'Contact Me', href: '#contact' }
    ];

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt="" className='w-full'/>
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:shadow-white/20 " : ""}`}>
                <a href="#top">
                    <Image 
                        src={isDarkMode ? assets.logo_dark : assets.logo} 
                        className='w-28 cursor-pointer mr-14' 
                        alt="Logo"
                    />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    {mobileMenuItems.map((item, index) => (
                        <li key={index}>
                            <a className='font-Ovo' href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center gap-4'>
                    <button onClick={()=>setIsDarkMode(prev=>!prev)}>
                        <Image 
                            src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
                            alt='Theme Toggle' 
                            className='w-6'
                        />
                    </button>
                    <a 
                        href="#contact" 
                        className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'
                    >
                        Contact 
                        <Image 
                            src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} 
                            alt="Arrow" 
                            className='w-3'
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
                <div className='fixed inset-0 z-[100] bg-white dark:bg-black bg-opacity-95 dark:bg-opacity-95 flex flex-col items-center justify-center'>
                    <button 
                        className='absolute top-6 right-6 p-8' 
                        onClick={toggleMobileMenu}
                    >
                        <Image 
                            src={isDarkMode ? assets.close_white : assets.close_black} 
                            alt='Close' 
                            className='w-6'
                        />
                    </button>
                    <ul className='flex flex-col items-center gap-6'>
                        {mobileMenuItems.map((item, index) => (
                            <li key={index}>
                                <a 
                                    className='text-2xl font-Ovo hover:text-rose-500 dark:hover:text-rose-300 transition-colors' 
                                    href={item.href} 
                                    onClick={toggleMobileMenu}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Navbar