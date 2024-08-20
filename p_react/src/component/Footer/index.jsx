import logo from '../../assets/logo_footer.png'
import '../../utils/style/footer.sass'

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="logo kasa"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
