import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Accomodation from '../../pages/Accomodation'
import About from '../../pages/About'
import Header from '../../component/Header'
import Error from '../../pages/Error'
import Footer from '../Footer'

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Accueil" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/Fiche-Logement" element={<Accomodation />} />
        <Route path="/A-propos" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRouter
