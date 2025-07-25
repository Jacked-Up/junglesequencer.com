import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import '../css/SocialsPrompt.css';

function SocialsPromptInner() {
    const KEY = 'socialsPrompt-v1';
    const TTL = 1.5 * 7 * 24 * 60 * 60 * 1000;  // 1.5 weeks in milliseconds

    const [visible, setVisible] = useState(false);
    const [hiding, setHiding] = useState(false);

    // Effect: determine if we should show the prompt (only on non-homepage and if not dismissed recently)
    useEffect(() => {
        const saved = localStorage.getItem(KEY);
        if (saved) {
            const data = JSON.parse(saved);
            if (Date.now() - data.ts < TTL) {
                // Recently dismissed, do not show yet
                return;
            }
        }
        // If current page is not the homepage, show the prompt
        if (window.location.pathname !== '/') {
            setVisible(true);
        }
    }, []);

    // Effect: listen for route changes to hide/show prompt when navigating to or from homepage
    useEffect(() => {
        function handleRouteChange() {
            const onHomePage = window.location.pathname === '/';
            if (onHomePage) {
                // Hide prompt when navigating to homepage
                setVisible(false);
            } else {
                // Show prompt on navigating to a non-home page (if not suppressed)
                const saved = localStorage.getItem(KEY);
                const recentlyDismissed = saved && JSON.parse(saved).ts
                    && (Date.now() - JSON.parse(saved).ts < TTL);
                if (!recentlyDismissed) {
                    setVisible(true);
                }
            }
        }
        // Docusaurus uses history API; listen to route changes
        window.addEventListener('popstate', handleRouteChange);
        window.addEventListener('pushState', handleRouteChange);
        window.addEventListener('replaceState', handleRouteChange);
        return () => {
            window.removeEventListener('popstate', handleRouteChange);
            window.removeEventListener('pushState', handleRouteChange);
            window.removeEventListener('replaceState', handleRouteChange);
        };
    }, []);

    // Handler for closing the prompt
    const closePrompt = () => {
        // Mark in localStorage that prompt was dismissed (with timestamp)
        localStorage.setItem(KEY, JSON.stringify({ ts: Date.now() }));
        // Trigger slide-out animation, then remove the prompt after animation duration
        setHiding(true);
        setTimeout(() => setVisible(false), 500);  // 0.5s matches CSS animation time
    };

    if (!visible) return null;  // Do not render anything if prompt is not visible

    return (
        <div className={`socials-prompt ${hiding ? 'hide' : ''}`}>
            <button className="socials-prompt__close" onClick={closePrompt} aria-label="Close">
                &times;
            </button>
            
            <div className="socials-prompt__content">
                <h3>Join the Community!</h3>
                <p>Get help, share ideas, get feedback, and see what others build with Jungle Sequencer.</p>
            </div>

            <div className="socials-prompt__actions">
                <a href="/linkedin" className="socials-button socials-button--linkedin"
                   target="_blank" rel="noopener noreferrer" aria-label="Visit the LinkedIn group">
                    <img src="https://cdn.junglesequencer.com/homepage/linkedin-logo.svg" alt="" />
                </a>
                <a href="/discord" className="socials-button socials-button--discord"
                   target="_blank" rel="noopener noreferrer" aria-label="Join the Discord Server">
                    <img src="https://cdn.junglesequencer.com/homepage/discord-logo.svg" alt="" />
                </a>
                <a href="/github-discussions" className="socials-button socials-button--github"
                   target="_blank" rel="noopener noreferrer" aria-label="Visit the GitHub Discussions">
                    <img src="https://cdn.junglesequencer.com/homepage/github-logo.svg" alt="" />
                </a>
            </div>
        </div>
    );
}

export default function SocialsPrompt() {
    return <BrowserOnly>{() => <SocialsPromptInner />}</BrowserOnly>;
}
