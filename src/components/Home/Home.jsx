import React from 'react'
import "./Home.css"
import man from "../../assets/manf.gif"
import TypingEffect from "react-typing-effect"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

function Home() {

  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 80,
      duration: 1,
      opacity: 0
    })
    tl1.from(".line2", {
      y: 80,
      duration: 1,
      opacity: 0
    })
    tl1.from(".line3", {
      y: 80,
      duration: 1,
      opacity: 0
    })
    gsap.from(".righthome img", {
      x: 200,
      duration: 1,
      opacity: 0
    })
  })
  return (
    <div id="home">
      {/* Twinkle Stars Effect */}
      <div className="twinkle-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">KARTIK GOEL</div>
          <div className="line3">
            <TypingEffect
              text={["FULL STACK DEVELOPER", "SOFTWARE DEVELOPER", "ML/AI Developer (in progress)"]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={1000}
              typingDelay={500}
              cursor='|'
            />
          </div>
          <div className="buttons">
            <div className="btn-secondary">
              <button>
                <a href="mailto:goyalkartik773@gmail.com">
                  <MdEmail style={{ marginRight: '8px' }} />
                  Contact
                </a>
              </button>
            </div>
            <div className="btn-primary">
              <button>
                <a href="/RESUME_KARTIK_GOEL.pdf" download>Download CV</a>
              </button>
            </div>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/kartik-goel-a95b2630b/" target="_blank" rel="noopener noreferrer" aria-label="Visit Kartik's LinkedIn profile">
              <FaLinkedin />
            </a>
            <a href="https://github.com/goyalkartik773" target="_blank" rel="noopener noreferrer" aria-label="Visit Kartik's GitHub profile">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/u/Kartikgoel773/" target="_blank" rel="noopener noreferrer" aria-label="Visit Kartik's LeetCode profile">
              <SiLeetcode />
            </a>
            <a href="https://codeforces.com/profile/goyalkartik773" target="_blank" rel="noopener noreferrer" aria-label="Visit Kartik's Codeforces profile">
              <SiCodeforces />
            </a>
            <a href="https://www.codechef.com/users/kumarvivek112" target="_blank" rel="noopener noreferrer" aria-label="Visit Kartik's CodeChef profile">
              <SiCodechef />
            </a>
          </div>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  )
}

export default Home
