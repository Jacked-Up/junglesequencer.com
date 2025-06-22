import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function LinkedInPage() {
    useEffect(() => {
        window.location.href = 'https://www.linkedin.com/groups/13296046/';
    }, []);
    
    return (
        <Layout title="LinkedIn Group Redirect"
                description="Redirects user to the Jungle Sequencer LinkedIn group."
        >
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                fontSize: '2rem',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                Redirecting...
            </div>
        </Layout>
    );
}
