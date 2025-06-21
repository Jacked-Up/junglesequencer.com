import React, { useEffect } from 'react';

function LinkedInPage() {
    useEffect(() => {
        window.location.href = 'https://www.linkedin.com/groups/13296046/';
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

export default LinkedInPage;
