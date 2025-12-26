import React, { useState, useEffect } from 'react'
import './ScrollIndicator.css'
import { Link } from 'react-scroll'

function ScrollIndicator() {
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'contact']
            const scrollPosition = window.scrollY + window.innerHeight / 2

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ]

    return (
        <div className="scroll-indicator">
            {sections.map((section) => (
                <Link
                    key={section.id}
                    to={section.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className={`scroll-dot ${activeSection === section.id ? 'active' : ''}`}
                >
                    <span className="dot"></span>
                    <span className="label">{section.label}</span>
                </Link>
            ))}
        </div>
    )
}

export default ScrollIndicator
