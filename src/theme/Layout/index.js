import React from 'react';
import Layout from '@theme-original/Layout';
import CookieConsent from "../../components/CookieConsent";

function LayoutWrapper(props) {
    return (
        <>
            <CookieConsent />
            <Layout {...props} />
        </>
    );
}

export default LayoutWrapper;
