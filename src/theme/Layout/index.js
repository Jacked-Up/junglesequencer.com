import React from 'react';
import Layout from '@theme-original/Layout';
import CookieConsent from "../../components/CookieConsent";
import DiscordPrompt from "../../components/DiscordPrompt";

function LayoutWrapper(props) {
    return (
        <>
            <CookieConsent />
            <DiscordPrompt />
            <Layout {...props} />
        </>
    );
}

export default LayoutWrapper;
