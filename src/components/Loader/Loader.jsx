import React, { useState, useEffect } from 'react'
import './Loader.css'

function Loader({ onComplete }) {
    const [showWelcome, setShowWelcome] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const [startReveal, setStartReveal] = useState(false)

    useEffect(() => {
        // Show welcome message after 3 seconds
        const welcomeTimer = setTimeout(() => {
            setShowWelcome(true)
            // Show button after welcome animations complete (1.5s)
            setTimeout(() => setShowButton(true), 1500)
        }, 3000)

        return () => clearTimeout(welcomeTimer)
    }, [])

    const handleEnter = () => {
        setStartReveal(true)
        // Complete after cinematic animation (3.5 seconds)
        setTimeout(() => {
            if (onComplete) onComplete()
        }, 3500)
    }

    return (
        <div className={`loader-container ${startReveal ? 'revealing' : ''}`}>
            {/* Background Twinkling Stars - Always visible */}
            <div className="background-stars">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={`bg-star-${i}`}
                        className="twinkle-star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            '--twinkle-delay': `${Math.random() * 3}s`,
                            '--twinkle-duration': `${2 + Math.random() * 2}s`,
                            '--size': `${1 + Math.random() * 3}px`
                        }}
                    />
                ))}
            </div>

            {/* Diagonal Comet Shower */}
            {startReveal && (
                <div className="cinematic-overlay">
                    {/* Diagonal Comets */}
                    <div className="comet-shower-diagonal">
                        {[...Array(60)].map((_, i) => (
                            <div
                                key={`comet-${i}`}
                                className="diagonal-comet"
                                style={{
                                    left: `${-10 + Math.random() * 120}%`,
                                    top: `${-10 + Math.random() * 30}%`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${1.5 + Math.random() * 1.5}s`,
                                    '--size': `${3 + Math.random() * 5}px`
                                }}
                            />
                        ))}
                    </div>

                    {/* Curtain Fade Overlay */}
                    <div className="curtain-fade"></div>
                </div>
            )}

            {!showWelcome ? (
                // Initial Loading Stage
                <div className="loader-content">
                    <div className="loader-logo">
                        <span className="logo-bracket">{'</'}</span>
                        <span className="logo-text">KARTIK</span>
                        <span className="logo-dot">.</span>
                        <span className="logo-bracket">{'>'}</span>
                    </div>
                    <div className="loader-spinner">
                        <div className="spinner-ring"></div>
                        <div className="spinner-ring"></div>
                        <div className="spinner-ring"></div>
                    </div>
                    <p className="loader-text">Initializing Portfolio...</p>
                </div>
            ) : (
                // Welcome Message Stage
                <div className={`welcome-message ${startReveal ? 'fade-away' : ''}`}>
                    <h1 className="welcome-text">
                        <span className="welcome-line">Welcome to</span>
                        <span className="welcome-name">devKartik's PORTFOLIO</span>
                    </h1>
                    <div className="welcome-underline"></div>
                    <p className="welcome-subtitle">Where Code Meets Creativity</p>

                    {showButton && !startReveal && (
                        <button className="enter-button" onClick={handleEnter}>
                            <span className="button-glow"></span>
                            <span className="button-text">Enter Portfolio</span>
                            <span className="button-icon">→</span>
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default Loader
