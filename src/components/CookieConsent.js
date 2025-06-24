import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import '../css/CookieConsent.css';

function CookieConsentInner() {
    const GA_ID  = 'G-EWYE80PRZH';
    const GTM_ID = 'GTM-T65LBZC3';
    
    const KEY = 'cookieConsent-v1';
    const TTL = 14 * 24 * 60 * 60 * 1000; // 14 days
    
    const [visible, setVisible] = useState(false);
    const [hiding , setHiding ] = useState(false);
    
    useEffect(() => {
        const saved = localStorage.getItem(KEY);
        if (saved) {
            const data = JSON.parse(saved);
            if (data.ok) { injectTracking(); return; }
            if (Date.now() - data.ts < TTL) { return; }
        }
        setVisible(true);
    }, []);
    
    const accept = () => {
        localStorage.setItem(KEY, JSON.stringify({ ok: true }));
        injectTracking();
        hideBanner();
    };
    
    const reject = () => {
        localStorage.setItem(KEY, JSON.stringify({ ok: false, ts: Date.now() }));
        hideBanner();
    };
    
    const hideBanner = () => {
        setHiding(true);
        setTimeout(() => setVisible(false), 500); // sync with CSS animation
    };
    
    const injectTracking = () => {
        if (window.__trackingLoaded) return;
        window.__trackingLoaded = true;
        
        // Google Analytics 4 injection --------------------------------------------------------------------------------
        const ga = document.createElement('script');
        ga.async = true;
        ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(ga);
        ga.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag(){ window.dataLayer.push(arguments); }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', GA_ID, { anonymize_ip: true });
        };
        
        // Google Tag Manager injection --------------------------------------------------------------------------------
        (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            const f=d.getElementsByTagName(s)[0];
            const j=d.createElement(s);
            j.async=true; j.src=`https://www.googletagmanager.com/gtm.js?id=${i}&l=${l}`;
            f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',GTM_ID);
    };
    
    if (!visible) return null;
    
    return (
        <div className={`cookie-prompt ${hiding ? 'hide' : ''}`}>
            <div className="cookie-prompt__content">
                <h2>We use cookies to improve your experience</h2>
                <p>
                    By using this site, you agree to the use of <strong>secure</strong> cookies.
                    <br />
                    Learn more in the <a href="https://jackedupsoftware.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                </p>
            </div>

            <div className="cookie-prompt__actions">
                <button
                    className="cookie-prompt__button cookie-prompt__button--accept"
                    onClick={accept}
                >
                    Accept cookies
                </button>

                <button
                    className="cookie-prompt__button cookie-prompt__button--reject"
                    onClick={reject}
                >
                    Reject non-essential cookies
                </button>
            </div>
        </div>
    );
}

export default function CookieConsent() {
    return <BrowserOnly>{() => <CookieConsentInner />}</BrowserOnly>;
}
