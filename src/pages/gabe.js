import React from 'react';
import Layout from '@theme/Layout';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';

function GabePage() {
    const history = useHistory();

    const handleVideoEnd = () => {
        history.push('/');
    };

    return (
        <Layout title="Is that Gabe?">
            <ReactPlayer
                url="https://www.youtube.com/watch?v=KyOlpzA5jKM"
                playing={true}
                controls={true}
                onEnded={handleVideoEnd}
            />
        </Layout>
    );
}

export default GabePage;
