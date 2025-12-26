import React, { useEffect, useRef } from 'react'
import './StarBackground.css'

function StarBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = document.documentElement.scrollHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Create stars
        const stars = []
        const starCount = 200

        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2,
                opacity: Math.random(),
                twinkleSpeed: Math.random() * 0.02 + 0.01,
                growing: Math.random() > 0.5
            })
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            stars.forEach(star => {
                // Twinkling effect
                if (star.growing) {
                    star.opacity += star.twinkleSpeed
                    if (star.opacity >= 1) {
                        star.growing = false
                    }
                } else {
                    star.opacity -= star.twinkleSpeed
                    if (star.opacity <= 0.1) {
                        star.growing = true
                    }
                }

                // Draw star
                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(122, 215, 234, ${star.opacity})`
                ctx.fill()

                // Add glow effect for larger stars
                if (star.radius > 1.5) {
                    ctx.shadowBlur = 10
                    ctx.shadowColor = 'rgba(122, 215, 234, 0.5)'
                } else {
                    ctx.shadowBlur = 0
                }
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return <canvas ref={canvasRef} className="star-background" />
}

export default StarBackground
