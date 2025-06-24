import React from 'react';
import Layout from '@theme-original/Layout';
import CookieConsent from "../../components/CookieConsent";
import DiscordPrompt from "../../components/DiscordPrompt";

export default function LayoutWrapper(props) {
    return (
        <>
            { /* Cookies prompt */ }
            <CookieConsent />

            { /* TODO: Update the theme */ }
            { /* <DiscordPrompt /> */ }
            
            { /* Main Docusaurus layout */ }
            <Layout {...props} />
        </>
    );
}
