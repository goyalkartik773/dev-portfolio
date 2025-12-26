import React, { useState, useEffect } from 'react'
import './ThemeSwitcher.css'
import { FaPalette } from 'react-icons/fa'

const themes = [
    {
        name: 'Ocean Blue',
        id: 'ocean',
        icon: '🌊',
        primary: '#42b4cd',
        secondary: '#52cdcf',
        accent: '#6dd5ed',
        gradient: 'linear-gradient(135deg, #42b4cd, #52cdcf)',
        glow: 'rgba(var(--primary-rgb), 0.6)'
    },
    {
        name: 'Sunset Pink',
        id: 'sunset',
        icon: '🌸',
        primary: '#ff6b9d',
        secondary: '#ffa06b',
        accent: '#ff8fab',
        gradient: 'linear-gradient(135deg, #ff6b9d, #ffa06b)',
        glow: 'rgba(255, 107, 157, 0.6)'
    },
    {
        name: 'Purple Dream',
        id: 'purple',
        icon: '💜',
        primary: '#a855f7',
        secondary: '#ec4899',
        accent: '#c084fc',
        gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
        glow: 'rgba(168, 85, 247, 0.6)'
    },
    {
        name: 'Forest Green',
        id: 'forest',
        icon: '🌿',
        primary: '#10b981',
        secondary: '#34d399',
        accent: '#6ee7b7',
        gradient: 'linear-gradient(135deg, #10b981, #34d399)',
        glow: 'rgba(16, 185, 129, 0.6)'
    },
    {
        name: 'Fire Orange',
        id: 'fire',
        icon: '🔥',
        primary: '#f97316',
        secondary: '#fb923c',
        accent: '#fdba74',
        gradient: 'linear-gradient(135deg, #f97316, #fb923c)',
        glow: 'rgba(249, 115, 22, 0.6)'
    }
]

function ThemeSwitcher() {
    const [isOpen, setIsOpen] = useState(false)
    const [currentTheme, setCurrentTheme] = useState('ocean')

    useEffect(() => {
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('portfolio-theme') || 'ocean'
        applyTheme(savedTheme)
        setCurrentTheme(savedTheme)
    }, [])

    const applyTheme = (themeId) => {
        const theme = themes.find(t => t.id === themeId)
        if (theme) {
            document.documentElement.style.setProperty('--primary-color', theme.primary)
            document.documentElement.style.setProperty('--secondary-color', theme.secondary)
            document.documentElement.style.setProperty('--accent-color', theme.accent)
            document.documentElement.style.setProperty('--gradient', theme.gradient)
            document.documentElement.style.setProperty('--glow-color', theme.glow)

            const primaryRgb = theme.primary.match(/\w\w/g).map(x => parseInt(x, 16)).join(', ')
            const secondaryRgb = theme.secondary.match(/\w\w/g).map(x => parseInt(x, 16)).join(', ')
            document.documentElement.style.setProperty('--primary-rgb', primaryRgb)
            document.documentElement.style.setProperty('--secondary-rgb', secondaryRgb)
        }
    }

    const handleThemeChange = (themeId) => {
        setCurrentTheme(themeId)
        applyTheme(themeId)
        localStorage.setItem('portfolio-theme', themeId)
        setIsOpen(false)

        // Dispatch custom event for same-tab theme changes
        window.dispatchEvent(new Event('themeChanged'))
    }

    return (
        <div className="theme-switcher">
            <button
                className={`theme-toggle ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle theme switcher"
            >
                <FaPalette />
            </button>

            {isOpen && (
                <div className="theme-menu">
                    <h3 className="theme-menu-title">Choose Theme</h3>
                    <div className="theme-options">
                        {themes.map(theme => (
                            <button
                                key={theme.id}
                                className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
                                onClick={() => handleThemeChange(theme.id)}
                                style={{
                                    background: theme.gradient,
                                    boxShadow: currentTheme === theme.id
                                        ? `0 0 20px ${theme.glow}`
                                        : 'none'
                                }}
                            >
                                <span className="theme-icon">{theme.icon}</span>
                                <span className="theme-name">{theme.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ThemeSwitcher
