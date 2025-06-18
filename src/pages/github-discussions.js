import React, { useEffect } from 'react';

function GitHubDiscussionsPage() {
    useEffect(() => {
        window.location.href = 'https://github.com/Jacked-Up/junglesequencer.com/discussions';
    }, []);
    
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center'
        }}>
            Redirecting...
        </div>
    );
}

export default GitHubDiscussionsPage;
