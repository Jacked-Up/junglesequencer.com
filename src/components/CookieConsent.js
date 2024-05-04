import React, { useState, useEffect } from 'react';
import "../css/CookieConsent.css";
import BrowserOnly from '@docusaurus/BrowserOnly';

const CookieConsent = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const isAccepted = localStorage.getItem('cookiesAccepted') === 'true';
        setShow(!isAccepted);
    }, []);

    const handleAccept = () => {
        console.log('Cookies accepted.');
        localStorage.setItem('cookiesAccepted', 'true');
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className={`cookie-consent`}>
            <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
            <button className="understood-button" onClick={handleAccept}>I Understand</button>
        </div>
    );
};

export default () => (
    <BrowserOnly>
        {() => <CookieConsent />}
    </BrowserOnly>
);
