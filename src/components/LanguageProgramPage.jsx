import TopNavigationBar from './TopNavigationBar'
import PageHeader from './PageHeader'
import ProgramDescription from './ProgramDescription'
import Footer from './Footer'
import SampleLesson from './SampleLesson'
import Pricing from './Pricing'
import ButtonEnroll from './EnrollBtn'
import '../styles/LanguageProgramPage.css'

export const LanguageProgramPage = () => {

  return (
    <>
      <main>
        <TopNavigationBar />
        <PageHeader />
        <ProgramDescription />
        <SampleLesson />
        <Pricing />
        <ButtonEnroll />
        <Footer />
      </main>
    </>
  );
};