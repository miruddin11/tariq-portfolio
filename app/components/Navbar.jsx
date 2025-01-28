import { assets } from '@/assets/assets'
import React, { useEffect, useRef , useState } from 'react'
import Image from 'next/image'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef= useRef();
    const openMenu = () => {
        sideMenuRef.current.classList.remove('translate-x-full');
        sideMenuRef.current.classList.add('translate-x-0');
    }
    const closeMenu = () => {
        sideMenuRef.current.classList.remove('translate-x-0');
        sideMenuRef.current.classList.add('translate-x-full');
    }

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY>50){
                setIsScroll(true);
            }
            else{
                setIsScroll(false);
            }
        })
    },[])
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt="" className='w-full'/>
    </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:shadow-white/20 " : ""}`}>
            <a href="#top">
                <Image src={isDarkMode? assets.logo_dark : assets.logo} className='w-28
                cursor-pointer mr-14' alt=""/>
            </a>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                {[
                    {href: "#top", label: "Home"},
                    {href: "#about", label: "About Me"},
                    {href: "#cp", label: "Coding"},
                    {href: "#projects", label: "Projects"},
                    {href: "#experience", label: "Experience"},
                    {href: "#academics", label: "Academics"},
                    {href: "#contact", label: "Contact Me"}
                ].map((link, index) => (
                    <li key={index}>
                        <a 
                            href={link.href} 
                            className='font-Ovo transition-all duration-300 
                            hover:text-blue-600 dark:hover:text-blue-300 
                            hover:scale-105 
                            relative 
                            after:absolute after:bottom-[-4px] after:left-0 
                            after:w-0 after:h-0.5 after:bg-blue-600 
                            after:transition-all after:duration-300 
                            hover:after:w-full'
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='flex items-center gap-4'>
                <button 
                    onClick={()=>setIsDarkMode(prev=>!prev)} 
                    className='transition-transform duration-300 hover:rotate-180'
                >
                    <Image src={isDarkMode? assets.sun_icon :assets.moon_icon} alt='' className='w-6'/>
                </button>
                <a 
                    href="#contact" 
                    className='hidden lg:flex items-center gap-3 
                    px-10 py-2.5 
                    border border-gray-500 rounded-full ml-4 
                    font-Ovo dark:border-white/50 
                    transition-all duration-300 
                    hover:bg-blue-600 hover:text-white 
                    hover:border-transparent 
                    dark:hover:bg-blue-300 dark:hover:text-black'
                >
                    Contact <Image src={isDarkMode? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/>
                </a>
                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={isDarkMode? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
                </button>
            </div>

            {/* -- ----- mobile menu ------- ---*/}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 z-50 h-screen 
            bg-rose-50 transition-transform duration-500 translate-x-full 
            dark:bg-darkHover dark:text-white'>
                <div className='absolute top-6 right-6 ' onClick={closeMenu}>
                    <Image src={isDarkMode? assets.close_white :assets.close_black} alt='' className='w-5 cursor-pointer'/>
                </div>
                <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#cp">Coding</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#projects">Projects</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#experience">Experience</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#academics">Academics</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a></li>
            </ul>


        </nav>
    </>
  )
}

export default Navbar
