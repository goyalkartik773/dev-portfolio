import React, { useState, useEffect } from 'react'
import './BackToTop.css'
import { FaArrowUp } from 'react-icons/fa'

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    // Show button when page is scrolled down 300px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            className={`back-to-top ${isVisible ? 'show' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <FaArrowUp />
        </button>
    )
}

export default BackToTop
