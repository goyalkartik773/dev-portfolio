import React from 'react'
import './Footer.css'
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-scroll'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="footer">
            <div className="footer-content">
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo">
                            <span className="logo-bracket">{'</'}</span>
                            KARTIK
                            <span className="logo-dot">.</span>
                            <span className="logo-bracket">{'>'}</span>
                        </h2>
                        <p className="footer-tagline">Building digital experiences, one line of code at a time.</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h3>Quick Links</h3>
                            <ul>
                                <Link to="home" smooth={true} duration={500} offset={-70}>
                                    <li>Home</li>
                                </Link>
                                <Link to="about" smooth={true} duration={500} offset={-70}>
                                    <li>About</li>
                                </Link>
                                <Link to="projects" smooth={true} duration={500} offset={-70}>
                                    <li>Projects</li>
                                </Link>
                                <Link to="contact" smooth={true} duration={500} offset={-70}>
                                    <li>Contact</li>
                                </Link>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Connect</h3>
                            <div className="footer-social">
                                <a href="mailto:goyalkartik773@gmail.com" aria-label="Email">
                                    <MdEmail />
                                </a>
                                <a href="https://www.linkedin.com/in/kartik-goel-a95b2630b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/goyalkartik773" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <FaGithub />
                                </a>
                                <a href="https://leetcode.com/u/Kartikgoel773/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                                    <SiLeetcode />
                                </a>
                                <a href="https://codeforces.com/profile/goyalkartik773" target="_blank" rel="noopener noreferrer" aria-label="Codeforces">
                                    <SiCodeforces />
                                </a>
                                <a href="https://www.codechef.com/users/kumarvivek112" target="_blank" rel="noopener noreferrer" aria-label="CodeChef">
                                    <SiCodechef />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Kartik Goel. All rights reserved.
                    </p>
                    <p className="footer-made-with">
                        Made with <FaHeart className="heart-icon" /> and lots of coffee
                    </p>
                </div>
            </div>

            {/* Animated Background Elements */}
            <div className="footer-bg-animation">
                <div className="footer-circle footer-circle-1"></div>
                <div className="footer-circle footer-circle-2"></div>
                <div className="footer-circle footer-circle-3"></div>
            </div>

            {/* Constellation Twinkling Effect */}
            <div className="footer-stars">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="footer-star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${3 + Math.random() * 2}s`,
                            width: `${2 + Math.random() * 3}px`,
                            height: `${2 + Math.random() * 3}px`,
                        }}
                    >
                        <div className="star-glow"></div>
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer
