import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function GitHubDiscussionsPage() {
    useEffect(() => {
        window.location.href = 'https://github.com/Jacked-Up/junglesequencer.com/discussions';
    }, []);
    
    return (
        <Layout title="GitHub Discussions Redirect" 
                description="Redirects user to the Jungle Sequencer GitHub discussions."
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
