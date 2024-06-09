import React from 'react';
import ReactPlayer from 'react-player';
import '../css/VideoPlayer.css';

const VideoPlayer = ({ videoUrl, title, description }) => {
    return (
        <div className="video-player">
            <div className="video-container">
                <div className="player-wrapper">
                    <ReactPlayer
                        url={videoUrl}
                        controls={true}
                        width="100%"
                        height="100%"
                        className="react-player"
                    />
                </div>
            </div>
            <div className="text-container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default VideoPlayer;
