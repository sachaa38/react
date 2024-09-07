import backgroundAbout from '../../assets/background_about.png'
import Banner from '../../component/Banner'
import CollapseAbout from '../../component/CollapseAbout'
import '../../utils/style/about.sass'
import '../../component/Banner/banner.sass'

function About() {
  return (
    <div>
      <Banner background={backgroundAbout} />
      <CollapseAbout />
    </div>
  )
}

export default About
