import React, { useEffect } from 'react';

function GitHubDiscussionsPage() {
    useEffect(() => {
        window.location.href = 'https://github.com/Jacked-Up/junglesequencer.com/discussions';
    }, []);

    return (
        <div>
            Redirecting...
        </div>
    );
}

export default GitHubDiscussionsPage;
