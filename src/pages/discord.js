import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function DiscordPage() {
    useEffect(() => {
        window.location.href = 'https://discord.gg/vJ4AXsExfE';
    }, []);
    
    return (
        <Layout title="Discord Server Redirect" 
                description="Redirects user to the Jungle Sequencer Discord server."
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
