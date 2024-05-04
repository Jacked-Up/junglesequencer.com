import '../css/index.css';
import Layout from '@theme/Layout';

import image2 from "./img/jungle-thumbnail-2.png";
import image3 from "./img/jungle-thumbnail-3.png";
import image4 from "./img/jungle-thumbnail-4.png";

function IndexPage() {
    return (
        <Layout>
            <div className="homepage">
                <h1>Jungle</h1>
                <p>
                    A visual node-based framework designed to help developers more easily interact with their code.
                </p>

                <div className="image-container">
                    <img src={image2} alt="Image 2"/>
                    <img src={image4} alt="Image 4"/>
                    <img src={image3} alt="Image 3"/>
                </div>
            </div>
        </Layout>
    );
}

export default IndexPage;
