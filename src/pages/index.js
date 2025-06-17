import React from "react";
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
            
            <section className="features">
                <div className="features__content">
                    
                    <article className="feature-card">
                        <div className="feature-card__text">
                            <h2 className="feature-card__title">Build Sequences With Ease</h2>
                            <p className="feature-card__description">
                                Drag and drop nodes from the node explorer into the graph view to
                                form a sequence, and edit node properties using the inspector.
                            </p>
                        </div>
                        <div className="feature-card__image">
                            <img
                                src="https://cdn.junglesequencer.com/homepage/feature-card-1.png"
                                alt="Creating and Editing Sequences"
                            />
                        </div>
                    </article>
                    
                    <article className="feature-card reverse">
                        <div className="feature-card__text">
                            <h2 className="feature-card__title">Create Nodes with C#</h2>
                            <p className="feature-card__description">
                                Create performant custom nodes using C# scripts. Nodes are
                                automatically generated from the scripts you write.
                            </p>
                        </div>
                        <div className="feature-card__image">
                            <img
                                src="https://cdn.junglesequencer.com/homepage/feature-card-2.png"
                                alt="Create Nodes with C#"
                            />
                        </div>
                    </article>
                    
                    <article className="feature-card">
                        <div className="feature-card__text">
                            <h2 className="feature-card__title">Custom Node Inspectors</h2>
                            <p className="feature-card__description">
                                Design custom inspectors for your nodes to make them more
                                user-friendly and provide additional functionality.
                            </p>
                        </div>
                        <div className="feature-card__image">
                            <img
                                src="https://cdn.junglesequencer.com/homepage/feature-card-3.png"
                                alt="Custom Node Inspectors"
                            />
                        </div>
                    </article>
                    
                    <article className="feature-card reverse">
                        <div className="feature-card__text">
                            <h2 className="feature-card__title">Editor Sticky Notes</h2>
                            <p className="feature-card__description">
                                Add sticky notes in your trees to document ideas and provide context.
                            </p>
                        </div>
                        <div className="feature-card__image">
                            <img
                                src="https://cdn.junglesequencer.com/homepage/feature-card-4.png"
                                alt="Editor Sticky Notes"
                            />
                        </div>
                    </article>
                    
                    <article className="feature-card">
                        <div className="feature-card__text">
                            <h2 className="feature-card__title">Editor Gizmos Support</h2>
                            <p className="feature-card__description">
                                Utilize Unity’s gizmos system to provide visual feedback in the editor
                                for your nodes.
                            </p>
                        </div>
                        <div className="feature-card__image">
                            <img
                                src="https://cdn.junglesequencer.com/homepage/feature-card-5.png"
                                alt="Editor Gizmos Support"
                            />
                        </div>
                    </article>
                    
                    <article className="feature-card reverse">
                        <div className="feature-card__text">
                            <h2 className="feature-card__title">Validator & Error Handler</h2>
                            <p className="feature-card__description">
                                Implement validation logic in your nodes to catch issues before they
                                occur.
                            </p>
                        </div>
                        <div className="feature-card__image">
                            <img
                                src="https://cdn.junglesequencer.com/homepage/feature-card-6.png"
                                alt="Validator & Error Handler"
                            />
                        </div>
                    </article>
                    
                </div>
            </section>
            
            <section className="community">
                <h2 className="hero__title">Join the Community</h2>
                <p className="hero__description" style={{marginBottom:"2.4rem"}}>
                    Share ideas, get feedback, and see what others build with Jungle Sequencer.
                </p>
                
                <div className="community__grid">
                    
                    <div className="community__card">
                        <h3 className="community__card-title">Discord Server</h3>
                        <p className="community__card-description">
                            Get instant help, ask questions, and share your projects with the community.
                        </p>
                        <a
                            className="community__button community__button--discord"
                            href={DISCORD_SERVER_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="community__button-icon community__icon--discord" />
                            Join Discord Server
                        </a>
                    </div>
                    
                    <div className="community__card">
                        <h3 className="community__card-title">GitHub Discussions</h3>
                        <p className="community__card-description">
                            Request features, vote on ideas, report bugs, and share any other feedback you may have.
                        </p>
                        <a
                            className="community__button community__button--github"
                            href={GITHUB_DISCUSSIONS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="community__button-icon community__icon--github" />
                            View GitHub Discussions
                        </a>
                    </div>

                </div>
            </section>

        </Layout>
    );
}

export default IndexPage;
