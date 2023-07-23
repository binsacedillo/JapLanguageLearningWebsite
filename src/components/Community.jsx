import TopNavigationBar from './TopNavigationBar'
import Footer from './Footer'
import ForumIntro from './ForumIntro'
import Forum from './Forum'
import SuccessStories from './Success'
import '../styles/Community.css' 

export const Community = () => {

  return (
    <>
      <main>
        <TopNavigationBar />
        <ForumIntro />
        <Forum />
        <SuccessStories />
        <Footer />
      </main>
    </>
  );
};