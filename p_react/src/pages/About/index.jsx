import backgroundAbout from '../../assets/background_about.png'
import Banner from '../../component/Banner'
import Collapse from '../../component/Collapse'
import '../../utils/style/about.sass'
import '../../utils/style/banner.sass'

function About() {
  return (
    <div>
      <Banner background={backgroundAbout} />
      <Collapse />
    </div>
  )
}

export default About
