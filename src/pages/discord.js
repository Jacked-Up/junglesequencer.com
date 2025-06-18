import React, { useEffect } from 'react';

function DiscordPage() {
    useEffect(() => {
        window.location.href = 'https://discord.gg/vJ4AXsExfE';
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

export default DiscordPage;
