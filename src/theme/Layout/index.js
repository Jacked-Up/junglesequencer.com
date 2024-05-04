import React from 'react';
import Layout from '@theme-original/Layout';
import CookieConsent from "../../components/CookieConsent";
import BrowserOnly from "@docusaurus/BrowserOnly";

function LayoutWrapper(props) {
    return (
        <BrowserOnly>
            <CookieConsent />
            <Layout {...props} />
        </BrowserOnly>
    );
}

export default LayoutWrapper;
