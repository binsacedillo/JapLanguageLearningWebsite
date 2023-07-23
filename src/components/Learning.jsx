import TopNavigationBar from './TopNavigationBar'
import Footer from './Footer'
import ResourcesPage from './HeaderResources'
import Materials from './Materials';
import BlogPage from './Blogs';
import Webinar from './Webinar';

export const Learning = () => {

  return (
    <>
      <main>
        <TopNavigationBar />
        <ResourcesPage />
        <Materials />
        <BlogPage />
        <Webinar />
        <Footer />
      </main>
    </>
  );
};