import '../../utils/style/card.sass'
import dataLogement from '../../data.json'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div className="card-contener">
      {dataLogement.map((logement, index) => (
        <Link to={`/Logement/${index}`} key={logement.id} className="card">
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
