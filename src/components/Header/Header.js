import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"
export const Header = () => {

 const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if(window.scrollY>68){
        setIsScrolledDown(true);
      }else{
        setIsScrolledDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header id="mainHeader" className={isScrolledDown ? "fixedHeader" : ""}>
          <nav className="nav-buttons">
              <button className="nav-button"><NavLink to="/main">Home</NavLink></button>
              <button className="nav-button"><NavLink to="/aboutme">About me</NavLink></button>
              <button className="nav-button"><NavLink to="/projects">Projects</NavLink></button>
              <button className="nav-button"><NavLink to="/skills">Skills</NavLink></button>
              <button className="nav-button"><NavLink to="/work">Work</NavLink></button>     
              <button className="nav-button"><NavLink to="/contact">Contact</NavLink></button>
          </nav>
      </header>
      <div style={{height: '72px'}}></div> 
    </>
  )
}
