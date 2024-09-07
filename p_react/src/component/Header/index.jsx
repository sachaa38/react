import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo_header.png'
import './header.sass'

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="big logo kasa"></img>
      <nav>
        <NavLink
          to="/Accueil"
          className={({ isActive }) => (isActive ? 'clicked' : '')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/A-propos"
          className={({ isActive }) => (isActive ? 'clicked' : '')}
        >
          À propos
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
