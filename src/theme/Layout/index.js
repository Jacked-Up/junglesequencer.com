import React from 'react';
import Layout from '@theme-original/Layout';

import CookieConsent from "@site/src/components/CookieConsent";
import SocialsPrompt from "@site/src/components/SocialsPrompt";

export default function LayoutWrapper(props) {
    return (
        <>
            { /* Cookies prompt */ }
            <CookieConsent />
            
            { /* Socials prompt */ }
            { /* <SocialsPrompt /> */ }
            
            { /* Main Docusaurus layout */ }
            <Layout {...props} />
        </>
    );
}
