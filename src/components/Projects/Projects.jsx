import React from 'react'
import Card from '../Card/Card'
import va from "../../assets/echm.png"
import fw from "../../assets/ethb4.png"
import cb from "../../assets/ja.png"
import tti from "../../assets/tti.png"
import br from "../../assets/sv1.png"
import ise from "../../assets/blt.png"
import mrs from "../../assets/mrs.png"
import "./Projects.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Projects() {
  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#para",
        scroll: "body",
        scrub: 2,

        start: "top 80%",
        end: "top 30%",

      }
    })
    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider",
        scroll: "body",
        scrub: 2,

        start: "top 80%",
        end: "top 30%",

      }
    })

  })
  return (
    <div id="projects">
      <h1 id="para">2+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        <Card
          title="ECHOMIND"
          image={va}
          githubUrl="https://github.com/goyalkartik773/EchoMind"
          liveUrl="https://virtualechomind.netlify.app/"
        />
        <Card
          title="EATHUB"
          image={fw}
          githubUrl="https://github.com/goyalkartik773/Eathub"
          liveUrl="https://eathub-swart.vercel.app"
        />
        <Card
          title="JIITBOT"
          image={cb}
          githubUrl="https://github.com/goyalkartik773/JiitBot"
          liveUrl="https://jiitbot-assistant.streamlit.app/"
        />

        <Card
          title="BUYER LEAD INTAKE APP"
          image={ise}
          githubUrl="https://github.com/goyalkartik773/Buyer-lead-app"
          liveUrl="https://buyerlead-kartik.vercel.app/"
        />

        <Card
          title="SORTING VISUALIZER"
          image={br}
          githubUrl="https://github.com/goyalkartik773/SORT_VISUALIZER"
          liveUrl="https://github.com/goyalkartik773/SORT_VISUALIZER/releases/tag/sortifier-v1.0"
        />

         <Card
          title="MEDICAL RECOMMENDATION SYSTEM"
          image={mrs}
          githubUrl="https://github.com/yourusername/medical-recommendation"
          liveUrl="https://your-medical-recommendation.streamlit.app"
        />

      </div>
    </div>
  )
}

export default Projects
