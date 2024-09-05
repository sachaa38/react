import dataLogement from '../../data.json'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import '../../utils//style/accomodation.sass'
import Slideshow from '../../component/Slideshow'

function Accomodation() {
  const { indexLogement } = useParams()
  const logement = dataLogement[indexLogement]
  return (
    <div>
      <h1>Fiche Logements</h1>
      <Slideshow />
    </div>
  )
}

export default Accomodation
