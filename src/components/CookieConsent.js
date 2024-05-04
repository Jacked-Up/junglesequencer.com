import React, { useState } from 'react';
import "../css/CookieConsent.css"

const CookieConsent = () => {
    const [show, setShow] = useState(localStorage.getItem('cookiesAccepted') !== 'true');
    const [hide, setHide] = useState(false); // State to handle hide animation

    const handleAccept = () => {
        console.log('Cookies accepted.');
        localStorage.setItem('cookiesAccepted', 'true');
        setHide(true); // Trigger the hide animation
        setTimeout(() => setShow(false), 500); // Wait for animation to complete before removing from DOM
    };

    if (!show) return null;

    return (
        <div className={`cookie-consent ${hide ? 'hide' : ''}`}>
            <p>
                We use cookies to enhance your experience.
                By continuing to visit this site you agree to our use of cookies.
            </p>
            <button className="understood-button" onClick={handleAccept}>
                <strong>I Understand</strong>
            </button>
        </div>
    );
};

export default CookieConsent;
