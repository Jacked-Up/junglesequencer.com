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
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle click on any feature-card image (desktop only)
    function handleImageClick(e) {
        if (window.innerWidth <= 768) return;

        const img = e.currentTarget.querySelector("img");
        const rect = img.getBoundingClientRect();

        setOriginRect(rect);
        setZoomedImage({ src: img.src, width: rect.width, height: rect.height });

        // Delay adding the .open class until next tick so CSS transitions fire
        setTimeout(() => setIsModalOpen(true), 0);
    }

    // Close the modal (click overlay, X button, or scroll)
    function handleClose() {
        setIsModalOpen(false);
        setTimeout(() => {
            setZoomedImage(null);
            setOriginRect(null);
        }, 300);
    }

    function ZoomImageModal({ image, origin }) {
        const zoomRef = useRef(null);

        useEffect(() => {
            const imgEl = zoomRef.current;
            if (!imgEl) return;

            document.body.style.overflow = "hidden";

            imgEl.getBoundingClientRect();
            const margin = 16;
            const viewportW = window.innerWidth - margin * 2;
            const viewportH = window.innerHeight - margin * 2;
            const { naturalWidth, naturalHeight } = imgEl;

            let targetW = viewportW,
                targetH = viewportH;
            if (naturalWidth / naturalHeight > viewportW / viewportH) {
                // Image is wider than viewport ratio so limit by width
                targetW = viewportW;
                targetH = (naturalHeight / naturalWidth) * viewportW;
            } else {
                // Taller so limit by height
                targetH = viewportH;
                targetW = (naturalWidth / naturalHeight) * viewportH;
            }

            const targetLeft = (window.innerWidth - targetW) / 2;
            const targetTop = (window.innerHeight - targetH) / 2;

            // Use RAF to ensure the browser has applied initial position first
            requestAnimationFrame(() => {
                imgEl.style.width = `${targetW}px`;
                imgEl.style.height = `${targetH}px`;
                imgEl.style.left = `${targetLeft}px`;
                imgEl.style.top = `${targetTop}px`;
            });

            // Close on any scroll
            const onScroll = () => handleClose();
            window.addEventListener("scroll", onScroll);

            return () => {
                window.removeEventListener("scroll", onScroll);
                document.body.style.overflow = ""; // re-enable scrolling
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

        return (
            <img
                ref={zoomRef}
                src={image.src}
                alt="Zoomed preview"
                className="zoom-image"
                style={initStyle}
                onClick={(e) => e.stopPropagation()}
            />
        );
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
                    className={`zoom-overlay ${isModalOpen ? "open" : ""}`}
                    onClick={handleClose}
                >
                    <ZoomImageModal image={zoomedImage} origin={originRect} />
                    <button className="close-btn" onClick={handleClose}>
                        &times;
                    </button>
                </div>
            )}
        </Layout>
    );
}
