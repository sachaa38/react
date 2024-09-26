import Slideshow from '../../component/Slideshow'
import AccomodationContent from '../../component/AccomadationContent'
import { useNavigate } from 'react-router-dom'
import dataLogement from '../../data.json'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function Accomodation() {
  const { id } = useParams()
  const navigate = useNavigate()

  const logement = dataLogement.find((logement) => logement.id === id)

  useEffect(() => {
    if (!logement) {
      navigate('*')
    }
  }, [logement, navigate])

  if (!logement) {
    return null
  }

  return (
    <div>
      <Slideshow logement={logement} />
      <AccomodationContent logement={logement} />
    </div>
  )
}
export default Accomodation
