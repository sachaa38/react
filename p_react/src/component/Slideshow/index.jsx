import dataLogement from '../../data.json'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'
import './slideshow.sass'

function Slideshow() {
  const { indexLogement } = useParams()
  const indexLogementInt = parseInt(indexLogement)
  const photoLogement = dataLogement[indexLogementInt]?.pictures || []
  const [indexPhoto, setIndexPhoto] = useState(0)

  const handlePhotoPrecedent = () => {
    setIndexPhoto((prevIndex) =>
      prevIndex === 0 ? photoLogement.length - 1 : prevIndex - 1
    )
  }

  const handlePhotoSuivant = () => {
    setIndexPhoto((nextIndex) =>
      nextIndex === photoLogement.length - 1 ? 0 : nextIndex + 1
    )
  }

  return (
    <div className="car-contener">
      <img
        src={photoLogement[indexPhoto]}
        alt={photoLogement.title}
        className="car-image"
      />
      <div className="number-box">
        <p>
          {indexPhoto + 1}/{photoLogement.length}
        </p>
      </div>
      {photoLogement.length === 1 ? null : (
        <div className="arrow-box">
          <img
            onClick={handlePhotoPrecedent}
            src={arrow_left}
            alt="arrow left"
            className="car-arrow"
          />

          <img
            onClick={handlePhotoSuivant}
            src={arrow_right}
            alt="arrow right"
            className="car-arrow"
          />
        </div>
      )}
    </div>
  )
}

export default Slideshow
