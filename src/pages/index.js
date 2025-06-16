import React, { useEffect } from "react";
import '../css/index.css';
import Layout from '@theme/Layout';

// URL config
const OVERVIEW_VIDEO_URL = "https://www.youtube.com/embed/mX08Ofr6Fcc?enablejsapi=1";
const DISCORD_SERVER_URL = "https://discord.gg/vJ4AXsExfE";
const GITHUB_DISCUSSIONS_URL = "https://github.com/Jacked-Up/junglesequencer.com/discussions";

function IndexPage() {
    return (
        <Layout>
            
            <section className="hero">
                <div className="hero__content">
                    <div className="hero__text">
                        <h1 className="hero__title">Jungle Sequencer</h1>
                        <p className="hero__description">
                            The quickest and easiest solution for building node-based sequences in Unity.
                        </p>
                        <div className="hero__actions">
                            <a className="hero__button hero__button--learn"
                               href="/docs/">
                                Learn More
                            </a>
                            <a className="hero__button hero__button--buy"
                               href="https://assetstore.unity.com/packages/slug/258407"
                               target="_blank"
                               rel="noopener noreferrer">
                                Buy Jungle Sequencer
                            </a>
                        </div>
                    </div>
                    
                    <div className="hero__video">
                        <iframe src={OVERVIEW_VIDEO_URL} title="Overview Video" allowFullScreen>
                            Jungle Sequencer Overview YouTube video.
                        </iframe>
                    </div>
                </div>
            </section>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            <div className="features-section">
                <div className="container margin-vert--xl">
                    <div className="features-section-cards">
                        <div className="features-section-card">
                            <div className="text">
                                <h2>Creating and Editing Sequences</h2>
                                <p>
                                    Drag and drop nodes from the node explorer into the graph view to form a sequence, and edit node properties using the inspector.
                                </p>
                            </div>
                            <div className="image">
                                <img src="https://cdn.junglesequencer.com/homepage/feature-card-1.png" alt="Feature 1"/>
                            </div>
                        </div>

                        <div className="features-section-card reverse">
                            <div className="text">
                                <h2>Create Nodes with C#</h2>
                                <p>
                                    Create performant custom nodes using C# scripts. Nodes are automatically generated from the scripts you write.
                                </p>
                            </div>
                            <div className="image">
                                <img src="https://cdn.junglesequencer.com/homepage/feature-card-2.png" alt="Feature 2"/>
                            </div>
                        </div>

                        <div className="features-section-card">
                            <div className="text">
                                <h2>Custom Node Inspectors</h2>
                                <p>
                                    Design custom inspectors for your nodes to make them more user-friendly and provide additional functionality.
                                </p>
                            </div>
                            <div className="image">
                                <img src="https://cdn.junglesequencer.com/homepage/feature-card-3.png" alt="Feature 3"/>
                            </div>
                        </div>

                        <div className="features-section-card reverse">
                            <div className="text">
                                <h2>Editor Sticky Notes</h2>
                                <p>
                                    Add sticky notes in your trees to document ideas and provide context.
                                </p>
                            </div>
                            <div className="image">
                                <img src="https://cdn.junglesequencer.com/homepage/feature-card-4.png" alt="Feature 4"/>
                            </div>
                        </div>

                        <div className="features-section-card">
                            <div className="text">
                                <h2>Editor Gizmos Support</h2>
                                <p>
                                    Utilize Unity's gizmos system to provide visual feedback in the editor for your nodes.
                                </p>
                            </div>
                            <div className="image">
                                <img src="https://cdn.junglesequencer.com/homepage/feature-card-5.png" alt="Feature 5"/>
                            </div>
                        </div>
                        
                        <div className="features-section-card reverse">
                            <div className="text">
                                <h2>Validator & Error Handler</h2>
                                <p>
                                    Implement validation logic in your nodes to catch issues before they occur.
                                </p>
                            </div>
                            <div className="image">
                                <img src="https://cdn.junglesequencer.com/homepage/feature-card-6.png" alt="Feature 6"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="features-section-unity">
                        <div>
                            <h2>Built for the Engine You Love</h2>
                            <p>
                                Supported on all Unity Editor versions
                                <span className="text-glow"><strong> 2022.3 +</strong></span>
                            </p>
                        </div>
                        <img src="https://cdn.junglesequencer.com/homepage/unity-logo-black.png" alt="Unity Logo"/>
                    </div>
                </div>
            </div>
            
            
            
            
            
            
            
            
            
            <div className="community-section">
                <div className="container margin-vert--xl">
                    <h1>Community</h1>
                    <p>Connect with other developers, share your projects, and get help with Jungle Sequencer.</p>
                    <br/>
                    <div>
                        <h2>Discord Server</h2>
                        <p>Chat with the community, ask questions, and get help with your projects.</p>
                        <a href={DISCORD_SERVER_URL} target="_blank" rel="noopener noreferrer" className="discord-button">
                            <img src="https://cdn.junglesequencer.com/homepage/discord-logo.png" alt="Discord" height="20"/>
                            <strong>Join Server</strong>
                        </a>
                    </div>
                    <br/>
                    <div>
                        <h2>GitHub Discussions</h2>
                        <p>Join the discussions on GitHub to explore more topics and engage with the community.</p>
                        <a href={GITHUB_DISCUSSIONS_URL} target="_blank" rel="noopener noreferrer" className="github-button">
                            <img src="https://cdn.junglesequencer.com/homepage/github-logo.png" alt="GitHub" height="24"/>
                            <strong>Join Discussions</strong>
                        </a>
                    </div>
                </div>
            </div>
            
            
            
            
            
            
            
            
            
        </Layout>
    );
}

export default IndexPage;
