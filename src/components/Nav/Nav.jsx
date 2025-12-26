import React, { useRef, useState, useEffect } from 'react'
import "./Nav.css"
import { Link } from "react-scroll"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

function Nav() {
  let menu = useRef()
  let mobile = useRef()
  const [scrolled, setScrolled] = useState(false)

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useGSAP(() => {
    let tl = gsap.timeline()
    tl.from("nav h1", {
      y: -100,
      duration: 0.8,
      opacity: 0,
      ease: "power2.out"
    })
    tl.from(".desktopmenu li", {
      y: -50,
      duration: 0.6,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
      clearProps: "all"
    }, "-=0.3")
  })

  const closeMenu = () => {
    mobile.current.classList.remove("activemobile")
    menu.current.classList.remove("activeham")
  }

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <h1 className="logo">
          <span className="logo-bracket">{'</'}</span>
          KARTIK
          <span className="logo-dot">.</span>
          <span className="logo-bracket">{'>'}</span>
        </h1>
        <ul className='desktopmenu'>
          <Link to="home" activeClass='active' spy={true} smooth={true} duration={500} offset={-70}>
            <li><span className="nav-number">01.</span> Home</li>
          </Link>
          <Link to="about" activeClass='active' spy={true} smooth={true} duration={500} offset={-70}>
            <li><span className="nav-number">02.</span> About</li>
          </Link>
          <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500} offset={-70}>
            <li><span className="nav-number">03.</span> Projects</li>
          </Link>
          <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500} offset={-70}>
            <li><span className="nav-number">04.</span> Contact</li>
          </Link>
        </ul>
        <div className="hamburger" ref={menu} onClick={() => {
          mobile.current.classList.toggle("activemobile")
          menu.current.classList.toggle("activeham")
        }} aria-label="Toggle mobile menu">
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>
        <ul className='mobilemenu' ref={mobile}>
          <Link to="home" activeClass='active' spy={true} smooth={true} duration={500} offset={-70} onClick={closeMenu}>
            <li><span className="nav-number">01.</span> Home</li>
          </Link>
          <Link to="about" activeClass='active' spy={true} smooth={true} duration={500} offset={-70} onClick={closeMenu}>
            <li><span className="nav-number">02.</span> About</li>
          </Link>
          <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500} offset={-70} onClick={closeMenu}>
            <li><span className="nav-number">03.</span> Projects</li>
          </Link>
          <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500} offset={-70} onClick={closeMenu}>
            <li><span className="nav-number">04.</span> Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
