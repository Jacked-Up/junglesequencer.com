import React, { useEffect } from 'react';

function DiscordPage() {
    useEffect(() => {
        window.location.href = 'https://discord.gg/vJ4AXsExfE';
    }, []);

    return (
        <div>
            Redirecting...
        </div>
    );
}

export default DiscordPage;
