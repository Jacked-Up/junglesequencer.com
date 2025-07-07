import React, {useState, useEffect, useRef} from "react";
import "../css/index.css";
import Layout from "@theme/Layout";

// URL config
const OVERVIEW_VIDEO_URL = "https://www.youtube.com/embed/mX08Ofr6Fcc?enablejsapi=1";
const DISCORD_SERVER_URL = "/discord";
const GITHUB_DISCUSSIONS_URL = "/github-discussions";
const LINKEDIN_URL = "/linkedin";

export default function IndexPage() {
    const [zoomedImage, setZoomedImage] = useState(null);
    const [originRect, setOriginRect] = useState(null);
    const [overlayOpen, setOverlayOpen] = useState(false);

    function handleImageClick(e) {
        if (window.innerWidth <= 768) return; // disable on small screens
        const img = e.currentTarget.querySelector("img");
        const rect = img.getBoundingClientRect();
        setOriginRect(rect);
        setZoomedImage({ src: img.src, width: rect.width, height: rect.height });
        requestAnimationFrame(() => setOverlayOpen(true));
    }

    function closeOverlay() {
        setOverlayOpen(false);
        setZoomedImage(null);
        setOriginRect(null);
    }

    function ZoomImageModal({ image, origin }) {
        const ref = useRef(null);

        useEffect(() => {
            const el = ref.current;
            if (!el) return;

            document.body.style.overflow = "hidden";
            el.getBoundingClientRect(); // force reflow

            const margin = 40;
            const vw = window.innerWidth - margin * 2;
            const vh = window.innerHeight - margin * 2;
            const { naturalWidth: nw, naturalHeight: nh } = el;

            let w = vw, h = vh;
            if (nw / nh > vw / vh) {
                w = vw;
                h = (nh / nw) * vw;
            } else {
                h = vh;
                w = (nw / nh) * vh;
            }
            const left = (window.innerWidth - w) / 2;
            const top = (window.innerHeight - h) / 2;

            requestAnimationFrame(() => {
                el.style.width = `${w}px`;
                el.style.height = `${h}px`;
                el.style.left = `${left}px`;
                el.style.top = `${top}px`;
            });

            const onScroll = () => closeOverlay();
            window.addEventListener("scroll", onScroll);
            return () => {
                window.removeEventListener("scroll", onScroll);
                document.body.style.overflow = "";
            };
        }, []);

        const initStyle = {
            position: "fixed",
            top: origin.top + "px",
            left: origin.left + "px",
            width: origin.width + "px",
            height: origin.height + "px",
            transition: "all 0.3s ease",
            objectFit: "contain",
            zIndex: 1001,
        };

        return <img ref={ref} src={image.src} alt="" style={initStyle} />;
    }

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
                            <a className="hero__button hero__button--learn" href="/docs/">
                                View Documentation
                            </a>
                            <a
                                className="hero__button hero__button--buy"
                                href="https://assetstore.unity.com/packages/slug/258407"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
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
                                Drag and drop nodes from the node explorer into the graph view to form a sequence,
                                and edit node properties using the inspector.
                            </p>
                        </div>
                        <div className="feature-card__image" onClick={handleImageClick}>
                            <img
                                src="https://cdn.junglesequencer.com/homepage/feature-card-1.png"
                                alt="Creating and Editing Sequences"
                            />
                        </div>
                    </article>

                    <article className="feature-card reverse">
                        <div className="feature-card__text">
                            <h2 className="feature-card__title">Create Custom Nodes with C#</h2>
                            <p className="feature-card__description">
                                Jungle makes it easy to create custom nodes with C#.
                                Nodes are automatically generated from the scripts you write!
                            </p>
                        </div>
                        <div className="feature-card__image" onClick={handleImageClick}>
                            <img
                                src="https://cdn.junglesequencer.com/homepage/feature-card-2.png"
                                alt="Create Nodes with C#"
                            />
                        </div>
                    </article>

                    <article className="feature-card">
                        <div className="feature-card__text">
                            <h2 className="feature-card__title">Sticky Notes</h2>
                            <p className="feature-card__description">
                                Drop sticky notes anywhere to jot down ideas, reminders, or context.
                                Stay organized and keep your thoughts where they matter most: Right in the tree.
                            </p>
                        </div>
                        <div className="feature-card__image" onClick={handleImageClick}>
                            <img
                                src="https://cdn.junglesequencer.com/homepage/feature-card-4.png"
                                alt="Editor Sticky Notes"
                            />
                        </div>
                    </article>

                    <article className="feature-card reverse">
                        <div className="feature-card__text">
                            <h2 className="feature-card__title">Custom Node Inspector Support</h2>
                            <p className="feature-card__description">
                                Jungle taps into Unity’s inspector system to let you fully customize your nodes.
                                Create sleek, purpose-built editors that make node editing faster and more intuitive.
                            </p>
                        </div>
                        <div className="feature-card__image" onClick={handleImageClick}>
                            <img
                                src="https://cdn.junglesequencer.com/homepage/feature-card-3.png"
                                alt="Custom Node Inspectors"
                            />
                        </div>
                    </article>

                    <article className="feature-card">
                        <div className="feature-card__text">
                            <h2 className="feature-card__title">Unity Gizmos Support</h2>
                            <p className="feature-card__description">
                                Bring your nodes to life with visual feedback using Unity’s Gizmos system.
                                Highlight paths, triggers, or any custom logic directly in the editor.
                            </p>
                        </div>
                        <div className="feature-card__image" onClick={handleImageClick}>
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
                                Add custom validation logic on your nodes to catch issues early.
                                Spot errors before they can break anything.
                            </p>
                        </div>
                        <div className="feature-card__image" onClick={handleImageClick}>
                            <img
                                src="https://cdn.junglesequencer.com/homepage/feature-card-6.png"
                                alt="Validator & Error Handler"
                            />
                        </div>
                    </article>
                </div>
            </section>

            <section className="community">
                <div className="community__content">
                    <h2 className="hero__title">Join the Community</h2>
                    <p className="hero__description" style={{ marginBottom: "2.4rem" }}>
                        Share ideas, get feedback, and see what others build with Jungle Sequencer.
                    </p>

                    <div className="community__grid">
                        <div className="community__card">
                            <h3 className="community__card-title">LinkedIn Group</h3>
                            <p className="community__card-description">
                                Share your projects and connect with other users in a professional setting.
                            </p>
                            <a
                                className="community__button community__button--linkedin"
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View LinkedIn Group
                            </a>
                        </div>

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
                                View GitHub Discussions
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {zoomedImage && (
                <div
                    className={`zoom-overlay ${overlayOpen ? "open" : ""}`}
                    onClick={closeOverlay}
                >
                    <ZoomImageModal image={zoomedImage} origin={originRect} />
                    <p className="zoom-hint">Click anywhere to close</p>
                </div>
            )}

        </Layout>
    );
}
