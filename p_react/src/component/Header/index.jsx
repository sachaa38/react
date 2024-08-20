import { Link } from 'react-router-dom'
import logo from '../../assets/logo_header.png'
import '../../utils/style/header.sass'

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="big logo kasa"></img>
      <nav>
        <Link to="/Accueil">Accueil</Link>
        <Link to="/A-propos">À propos</Link>
      </nav>
    </div>
  )
}

export default Header
