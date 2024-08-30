import Banner from '../../component/Banner'
import Card from '../../component/card'
import backgroundAccueil from '../../assets/background_accueil.jpg'

function Home() {
  return (
    <div>
      <Banner
        background={backgroundAccueil}
        text="Chez vous, partout et ailleurs"
      />
      <Card />
    </div>
  )
}

export default Home
