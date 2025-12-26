import React, { useState } from 'react'
import con from "../../assets/contact.png"
import "./Contact.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  useGSAP(() => {
    gsap.from(".leftcontact img", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".leftcontact img",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      }
    })
    gsap.from("form", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "form",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      }
    })
  })

  const handleSubmit = async (e) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission (Formspree will handle actual submission)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={con} alt="Contact illustration" />
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/xaqwzknz" method='POST' onSubmit={handleSubmit}>
          <label htmlFor="name" className="visually-hidden">Name</label>
          <input
            id="name"
            name="Username"
            type="text"
            placeholder='Name'
            required
            aria-label="Your name"
            disabled={isSubmitting}
          />

          <label htmlFor="email" className="visually-hidden">Email</label>
          <input
            id="email"
            name="Email"
            type="email"
            placeholder='Email'
            required
            aria-label="Your email address"
            disabled={isSubmitting}
          />

          <label htmlFor="message" className="visually-hidden">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder='Message me'
            required
            aria-label="Your message"
            disabled={isSubmitting}
          ></textarea>

          <input
            type="submit"
            id="btn"
            value={isSubmitting ? "Sending..." : "Submit"}
            disabled={isSubmitting}
            aria-label="Submit contact form"
          />

          {submitStatus === 'success' && (
            <div className="form-message success" role="alert">
              ✓ Message sent successfully!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-message error" role="alert">
              ✗ Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact
