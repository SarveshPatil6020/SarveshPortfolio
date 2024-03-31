import React, { useEffect, useState } from 'react';

import About from "./About"
import AboutUs from './AboutUs'
import Certificate from './Certificate'
import Contact from './Contact'
import Project from './Project'
import Pro_resp from './Project/Pro_resp';
import Pro from './Project/Pro_resp';
import Skills from './Skills'


const Home = () => {


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
   

    <About />
    <Skills /> 
    
    {isMobile ? <Pro_resp /> : <Project/>}
    
    {/* <Project /> */}
    <Certificate />
    <Contact/>
    

    </>
    
  )
}

export default Home