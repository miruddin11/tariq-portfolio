'use client';
import React, { useState , useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Cp from "./components/Cp";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Academics from "./components/Academics";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";
export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) &&window.
    matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true);
    }
    else{
      setIsDarkMode(false);
    }
  },[]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme= 'dark';
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme= '';
    }
  }, [isDarkMode]);


  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>
    <Skills isDarkMode={isDarkMode}/>
    <Cp isDarkMode={isDarkMode}/>
    <Projects isDarkMode={isDarkMode}/>
    <Experience isDarkMode={isDarkMode}/>
    <Academics isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>
    <ScrollToTop isDarkMode={isDarkMode}/>
    </>
  );
}
