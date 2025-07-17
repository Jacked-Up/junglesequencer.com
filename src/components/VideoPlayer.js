import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import '../css/VideoPlayer.css';

const VideoPlayer = ({ videoUrl, title, description }) => {
    const videoPlayerRef = useRef(null);
    
    const tiltXAmount = 5; // Tilt forward/backward amount
    const tiltYAmount = -2.5; // Tilt left/right amount
    
    const handleMouseMove = (e) => {
        const section = videoPlayerRef.current;
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        const clampedDeltaX = Math.max(-1, Math.min(deltaX, 1));
        const clampedDeltaY = Math.max(-1, Math.min(deltaY, 1));

        const rotateX = clampedDeltaY * tiltXAmount;
        const rotateY = clampedDeltaX * tiltYAmount;

        section.style.setProperty('--rotateX', `${rotateX}deg`);
        section.style.setProperty('--rotateY', `${rotateY}deg`);
        section.style.transform = `perspective(1000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale(1.025)`;
    };

    const handleMouseLeave = () => {
        const section = videoPlayerRef.current;
        section.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    return (
        <div
            className="video-player" ref={videoPlayerRef}
            onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
        >
            <div className="video-player__container">
                <ReactPlayer
                    url={videoUrl} controls={true}
                    width="100%" height="100%"
                    className="video-player__react-player"
                />
            </div>
            <div className="video-player__text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default VideoPlayer;
