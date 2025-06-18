import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import '../css/CookieConsent.css';   // keep this path

function CookieConsentInner() {
    const GA_ID  = 'G-EWYE80PRZH';
    const GTM_ID = 'GTM-T65LBZC3';

    const KEY = 'cookieConsent-v1';
    const TTL = 14 * 24 * 60 * 60 * 1000;  // 14 days

    const [visible, setVisible] = useState(false);
    const [hiding , setHiding ] = useState(false);

    /* ─── initial check ─── */
    useEffect(() => {
        const saved = localStorage.getItem(KEY);
        if (saved) {
            const data = JSON.parse(saved);
            if (data.ok) { initScripts(); return; }
            if (Date.now() - data.ts < TTL) { return; }
        }
        setVisible(true);
    }, []);

    const accept = () => {
        localStorage.setItem(KEY, JSON.stringify({ ok: true }));
        initScripts();
        closeBanner();
    };

    const reject = () => {
        localStorage.setItem(KEY, JSON.stringify({ ok: false, ts: Date.now() }));
        closeBanner();
    };

    const closeBanner = () => {
        setHiding(true);
        setTimeout(() => setVisible(false), 550); // match CSS animation
    };

    /* ─── inject GA / GTM once ─── */
    const initScripts = () => {
        if (window.__cookiesAccepted) return;
        window.__cookiesAccepted = true;

        /* consent mode defaults */
        window.dataLayer = window.dataLayer || [];
        function gtag(){ window.dataLayer.push(arguments); }
        gtag('consent', 'default', { ad_storage:'denied', analytics_storage:'denied' });

        /* GA4 */
        const ga = document.createElement('script');
        ga.async = true;
        ga.src   = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(ga);
        ga.onload = () => {
            gtag('js', new Date());
            gtag('consent', 'update', { ad_storage:'granted', analytics_storage:'granted' });
            gtag('config', GA_ID, { anonymize_ip: true });
        };
        
        /* GTM */
        (function(w,d,s,l,i){
            w[l]=w[l]||[]; w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            const f=d.getElementsByTagName(s)[0], j=d.createElement(s);
            j.async=true; j.src=`https://www.googletagmanager.com/gtm.js?id=${i}`;
            f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',GTM_ID);
    };

    if (!visible) return null;
    
    return (
        <div className={`cookie-prompt ${hiding ? 'hide' : ''}`}>
            <div className="cookie-prompt__content">
                <h2>Cookies are used to track site analytics</h2>
                <p>
                    The data collected is <strong>completely anonymous</strong> and helps improve the site.
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
