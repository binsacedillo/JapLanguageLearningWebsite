import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Privacy } from './components/Privacy';
import { LanguageProgramPage } from './components/LanguageProgramPage'
import { Community } from './components/Community'
import { Learning } from './components/Learning'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='Privacy' element={ <Privacy />} />
      <Route path='Language' element={ <LanguageProgramPage />} />
      <Route path='Community' element={ <Community />} />
      <Route path='Resources' element={ <Learning />} />
    </Routes>
    </>
  )
}

export default App;