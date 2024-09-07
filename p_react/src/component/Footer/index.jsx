import logo from '../../assets/logo_footer.png'
import './footer.sass'

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="logo kasa"></img>
      <div className="p-contener">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
