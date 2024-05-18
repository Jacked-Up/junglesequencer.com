import React from "react";
import '../css/index.css';
import Layout from '@theme/Layout';

import unityLogoBlack from "../../static/img/brands/unity/unity-logo-black.png";
//import unityLogoWhite from "../../static/img/brands/unity/unity-logo-white.png";

import feature1 from "../../static/img/feature-cards/feature-card-1.png";
import feature2 from "../../static/img/feature-cards/feature-card-2.png";
import feature3 from "../../static/img/feature-cards/feature-card-3.png";
import feature4 from "../../static/img/feature-cards/feature-card-4.png";
import feature5 from "../../static/img/feature-cards/feature-card-5.png";
import feature6 from "../../static/img/feature-cards/feature-card-6.png";

function IndexPage() {
    return (
        <Layout>

            <div className="hero-section">
                <div className="container margin-vert--xl">
                    <h1>Jungle Sequencer</h1>
                    <p>
                        A visual node-based tool designed to help developers interact with their game code in a more
                        intuitive way.
                    </p>

                    <a href="/docs/" rel="noopener noreferrer" className="cta-button">
                        <strong>Learn More</strong>
                    </a>
                </div>
            </div>

            <div className="features-section">
                <div className="container margin-vert--xl">

                    <div className="features-section-cards">

                        <div className="features-section-card">
                            <div className="text">
                                <h2>Creating and Editing Sequences</h2>
                                <p>
                                Drag and drop nodes from the node explorer into the graph view to form a sequence,
                                    and edit node properties using the inspector.
                                </p>
                            </div>
                            <div className="image">
                                <img src={feature1} alt="Feature 1"/>
                            </div>
                        </div>

                        <div className="features-section-card reverse">
                            <div className="text">
                                <h2>Create Nodes with C#</h2>
                                <p>
                                    Create performant custom nodes using C# scripts. Nodes are automatically generated
                                    from the scripts you write.
                                </p>
                            </div>
                            <div className="image">
                                <img src={feature2} alt="Feature 2"/>
                            </div>
                        </div>

                        <div className="features-section-card">
                            <div className="text">
                                <h2>Custom Node Inspectors</h2>
                                <p>
                                    Design custom inspectors for your nodes to make them more user-friendly and provide
                                    additional functionality.
                                </p>
                            </div>
                            <div className="image">
                                <img src={feature3} alt="Feature 3"/>
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
                                <img src={feature4} alt="Feature 4"/>
                            </div>
                        </div>

                        <div className="features-section-card">
                            <div className="text">
                                <h2>Editor Gizmos Support</h2>
                                <p>
                                    Utilize Unity's gizmos system to provide visual feedback in the editor for your
                                    nodes.
                                </p>
                            </div>
                            <div className="image">
                                <img src={feature5} alt="Feature 5"/>
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
                                <img src={feature6} alt="Feature 6"/>
                            </div>
                        </div>

                    </div>

                    <div className="features-section-unity">

                        <div>
                            <h2>
                                Built for the Engine You Love
                            </h2>
                            <p>
                                Supported on Unity versions <span className="text-glow"><strong>2021.3 +</strong></span>
                            </p>
                        </div>
                        <img src={unityLogoBlack} alt="Unity Logo (black)"/>

                    </div>

                </div>
            </div>

            <div className="community-section">
                <div className="container margin-vert--xl">
                    <h1>Community</h1>
                    <p>
                        Connect with other developers, share your projects, and get help with Jungle Sequencer.
                    </p>

                    <br/>

                    <div>
                        <h2>Discord Server</h2>
                        <p>
                            Chat with the community, ask questions, and get help with your projects.
                        </p>
                        <a href="https://discord.gg/vJ4AXsExfE" target="_blank" rel="noopener noreferrer"
                           className="discord-button">
                            <img
                                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/653714c1f22aef3b6921d63d_636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
                                alt="Discord" height="20"/>
                            <strong>Join Server</strong>
                        </a>
                    </div>

                    <br/>

                    <div>
                        <h2>GitHub Discussions</h2>
                        <p>
                            Join the discussions on GitHub to explore more topics and engage with the community.
                        </p>
                        <a href="https://github.com/Jacked-Up/junglesequencer.com/discussions" target="_blank"
                           rel="noopener noreferrer" className="github-button">
                            <img
                                src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-1.png&r=255&g=255&b=255"
                                alt="GitHub" height="24"/>
                            <strong>Join Discussions</strong>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default IndexPage;
