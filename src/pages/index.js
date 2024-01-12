import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={ `Home` }
      description="A conditional sequencing framework tool for Unity.">
      <main>
          <div className="image-container">
              <div className="row top-row">
                  <img src="../../static/img/jungle-thumbnail-1.jpg" alt="Image 1" />
                  <img src="../../static/img/jungle-thumbnail-2.jpg" alt="Image 2" />
                  <img src="../../static/img/jungle-thumbnail-3.jpg" alt="Image 3" />
              </div>
              <div className="row bottom-row">
                  <img src="../../static/img/jungle-thumbnail-4.jpg" alt="Image 4" />
                  <img src="../../static/img/jungle-thumbnail-5.jpg" alt="Image 5" />
              </div>
          </div>
      </main>
    </Layout>
  );
}
