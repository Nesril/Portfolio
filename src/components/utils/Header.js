import React, { useState, useEffect } from 'react';
import "../style/header.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import InfoIcon from '@mui/icons-material/Info';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { IconButton } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.id;
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const matches = useMediaQuery('(max-width:1000px)');
  const reduceSize = useMediaQuery('(max-width:500px)');

  let [scrollEffect,setScrollEffect]=useState(false)
  let [scroly,setScroly]=useState(0)
 useEffect(()=>{
  function handleScroll(){
    setScroly(window.scrollY)
   // console.log(scroly);
    if(scroly>160){
      setScrollEffect(true)
    }
    else{
      setScrollEffect(false)
    }
  } 

 window.addEventListener("scroll",handleScroll)
 },[scroly])
 
  return (
    <>
       {(matches||scrollEffect)?
       <div  className="sized_header_container">
            <div  className="sized_header">
                  <div   onClick={() => scrollToSection('home')}
                      className={activeSection === 'home' ? 'active' : ''}> <img src="/logo-removebg-preview.png" alt='logo.pic' width={70} /></div>
                    
                    <div  onClick={() => scrollToSection('about')}
                      className={activeSection === 'about' ? 'active' : ''} >
                        <IconButton ><InfoIcon style={{fontSize:reduceSize&&"20px"}}/></IconButton>
                    </div>
                    
                    <div   onClick={() => scrollToSection('services')}
                        className={activeSection === 'services' ? 'active' : ''}>
                          <IconButton><ManageAccountsIcon style={{fontSize:reduceSize&&"20px"}} /></IconButton>
                    </div>

                    <div   onClick={() => scrollToSection('skills')}
                        className={activeSection === 'skills' ? 'active' : ''}>
                          <IconButton><BeenhereIcon  style={{fontSize:reduceSize&&"20px"}}/></IconButton>
                    </div>

                    <div   onClick={() => scrollToSection('projects')}
                        className={activeSection === 'projects' ? 'active' : ''}>
                        <IconButton><PropaneTankIcon  style={{fontSize:reduceSize&&"20px"}}/></IconButton>
                    </div>
                    
                    <div   onClick={() => scrollToSection('experiences')}
                        className={activeSection === 'experiences' ? 'active' : ''}>
                          <IconButton><WorkIcon  style={{fontSize:reduceSize&&"20px"}}/></IconButton>
                    </div>


                    <div   onClick={() => scrollToSection('contact')}
                        className={activeSection === 'contact' ? 'active' : ''}>
                          <IconButton><ConnectWithoutContactIcon  style={{fontSize:reduceSize&&"20px"}}/></IconButton>
                    </div>

            </div>

       </div>
       :<div className="header">
          <div className="header-logo">
            <img src="/logo-removebg-preview.png" alt='logo.pic' width={70} />
          </div>
          <div className='header-nav'>
            <div
              onClick={() => scrollToSection('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </div>
            <div
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </div>
            <div
              onClick={() => scrollToSection('services')}
              className={activeSection === 'services' ? 'active' : ''}
            >
              Services
            </div>
            <div
              onClick={() => scrollToSection('skills')}
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Skills
            </div>
            <div
              onClick={() => scrollToSection('experiences')}
              className={activeSection === 'experiences' ? 'active' : ''}
            >
              Experience
            </div>
            <div
              onClick={() => scrollToSection('projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </div>
            <div
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </div>
          </div>
        </div>
       }
    </>
  );
}