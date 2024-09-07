import Slideshow from '../../component/Slideshow'
import AccomodationContent from '../../component/AccomadationContent'
import { useNavigate } from 'react-router-dom'
import dataLogement from '../../data.json'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function Accomodation() {
  const { indexLogement } = useParams()
  const navigate = useNavigate()

  const logement = dataLogement[indexLogement]

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
      <Slideshow />
      <AccomodationContent />
    </div>
  )
}
export default Accomodation
