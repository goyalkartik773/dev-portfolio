import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import cpp from "../../assets/cpp.png"
import dsa from "../../assets/dsa.png"
import ml from "../../assets/ml.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function About() {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",

      }
    })
    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%"

      }
    })
    gsap.from(".aboutdetails h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%"

      }

    })
    gsap.from(".aboutdetails ul", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%"

      }

    })
    gsap.from(".rightabout", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightabout",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%"

      }

    })
  })
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : KARTIK GOEL
              </li>
              <li>
                <span>AGE</span> : 20 YEARS
              </li>
              <li>
                <span>GENDER</span> : MALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : HINDI,ENGLISH
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>COLLEGE</span> : JIIT NOIDA SECTOR 62
              </li>
              <li>
                <span>DEGREE</span> : B-TECH
              </li>
              <li>
                <span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING
              </li>
              <li>
                <span>CGPA</span> : 8.5
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1>Technical Skills</h1>
            <div className="skill-bars">
              <div className="skill-item">
                <div className="skill-header">
                  <span>Full Stack Development (MERN)</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>Data Structures & Algorithms</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>C++ Programming</span>
                  <span>88%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>AI/ML (Python, TensorFlow)</span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>Generative AI (LLMs, Prompt Engineering)</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span>Competitive Programming (LeetCode 1700+, 3★ CodeChef, Specialist CF)</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="Full STACK WEB DEVELOPER" image={mern} />
        <Card title="C++" image={cpp} />
        <Card title="DSA" image={dsa} />
        <Card title="AI/ML" image={ml} />
      </div>
    </div>
  )
}

export default About
