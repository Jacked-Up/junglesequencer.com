import React from 'react';
import "../css/community.css";
import Layout from '@theme/Layout';

function CommunityPage() {
    return (
        <Layout title="Community">
            <div className="container margin-vert--xl">
                <h1>Join the Community!</h1>
                <p>
                    We are a group of developers, designers, and creators who are passionate about building amazing
                    projects with Jungle. We are here to help you learn, grow, and connect with others in the community.
                </p>

                <br/>

                <div>
                    <h2>Discord Server</h2>
                    <p>
                        Chat with the community, ask questions, and get help with your projects.
                    </p>
                    <p style={{textAlign: 'center'}}>
                        <a href="https://discord.gg/vJ4AXsExfE" target="_blank" rel="noopener noreferrer" className="discord-button">
                            <img
                                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/653714c1f22aef3b6921d63d_636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
                                alt="Discord" height="20"/>
                            <strong>Join Server</strong>
                        </a>
                    </p>
                </div>

                <br/>

                <div>
                    <h2>GitHub Discussions</h2>
                    <p>
                        Join the discussions on GitHub to explore more topics and engage with the community.
                    </p>
                    <p style={{textAlign: 'center'}}>
                        <a href="https://github.com/Jacked-Up/junglesequencer.com/discussions" target="_blank" rel="noopener noreferrer" className="github-button">
                            <img
                                src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-1.png&r=255&g=255&b=255"
                                alt="GitHub" height="24"/>
                            <strong>Join Discussions</strong>
                        </a>
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default CommunityPage;
