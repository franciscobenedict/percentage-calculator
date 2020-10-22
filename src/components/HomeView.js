import React, {
  useState,
  useEffect,
} from 'react';
import SectionDivider from './partials/SectionDivider';
import Layout from './partials/Layout';

const HomeView = () => {
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    setPageTitle('Online tools');
  }, [pageTitle]);

  return (
    <Layout title={pageTitle} description="This is the Home page for the online tools">
      <div className="sections_holder">
        <section className="section white">
          <h1>{pageTitle}</h1>
          <p>Feel free to use the online tools available</p>
        </section>

        <SectionDivider />
      </div>
    </Layout>
  )
}

export default HomeView;
