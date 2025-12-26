import React from 'react'
import "./Card.css"
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Card({ title, image, githubUrl, liveUrl }) {
    const handleGithub = (e) => {
        e.stopPropagation();
        if (githubUrl) {
            window.open(githubUrl, '_blank');
        }
    };

    const handleLiveDemo = (e) => {
        e.stopPropagation();
        if (liveUrl) {
            window.open(liveUrl, '_blank');
        }
    };

    return (
        <div className="card" style={{ backgroundImage: `url(${image})` }}>
            <div className="card-overlay">
                <h1>{title}</h1>
                <div className="card-actions">
                    {githubUrl && (
                        <button className="action-btn github-btn" onClick={handleGithub}>
                            <FaGithub /> View Code
                        </button>
                    )}
                    {liveUrl && (
                        <button className="action-btn demo-btn" onClick={handleLiveDemo}>
                            <FaExternalLinkAlt /> Live Demo
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card
