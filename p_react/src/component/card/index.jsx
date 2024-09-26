import './card.sass'
import dataLogement from '../../data.json'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div className="card-contener">
      {dataLogement.map((logement) => (
        <Link
          to={`/Logement/${logement.id}`}
          key={logement.id}
          className="card"
        >
          <img
            className="card-image"
            src={logement.cover}
            alt={logement.title}
          />
          <div className="card-text">
            <p>{logement.title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default Card
