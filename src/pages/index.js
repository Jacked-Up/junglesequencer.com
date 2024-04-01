import Layout from '@theme/Layout';

import image2 from '../../static/img/jungle-thumbnail-2.png';
import image3 from '../../static/img/jungle-thumbnail-3.png';
import image4 from '../../static/img/jungle-thumbnail-4.png';

export default function Home() {
    return (
        <Layout description="A conditional sequencing framework tool for Unity.">
            <main>
                <div className="homepage">
                    <h1>Jungle</h1>
                    <p>A visual node-based framework for creating sequences in Unity.</p>

                    <div className="image-container">
                        <img src={image2} alt="Image 2"/>
                        <img src={image4} alt="Image 4"/>
                        <img src={image3} alt="Image 3"/>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
