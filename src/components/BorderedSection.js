import React, { useRef } from 'react';
import "../css/BorderedSection.css";

const BorderedSection = ({ children }) => {
    const sectionRef = useRef(null);
    
    const handleMouseMove = (e) => {
        const section = sectionRef.current;
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left; // X position within the element
        const y = e.clientY - rect.top;  // Y position within the element
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        const clampedDeltaX = Math.max(-1, Math.min(deltaX, 1));
        const clampedDeltaY = Math.max(-1, Math.min(deltaY, 1));

        const rotateX = clampedDeltaY * 5; // Tilt forward/backward
        const rotateY = clampedDeltaX * -2.5; // Tilt left/right

        section.style.setProperty('--rotateX', `${rotateX}deg`);
        section.style.setProperty('--rotateY', `${rotateY}deg`);
        section.style.transform = `perspective(1000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale(1.025)`;
    };

    const handleMouseLeave = () => {
        const section = sectionRef.current;
        section.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };
    
    return (
        <div
            className='bordered-section'
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="bordered-section__content">
                {children}
            </div>
        </div>
    );
}

export default BorderedSection;
