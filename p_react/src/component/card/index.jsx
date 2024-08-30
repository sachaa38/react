import '../../utils/style/card.sass'
import dataLogement from '../../data.json'

function Card() {
  return (
    <div className="card-contener">
      {dataLogement.map((logement) => (
        <div key={logement.id} className="card">
          <img
            className="card-image"
            src={logement.cover}
            alt={logement.title}
          />
          <div className="card-text">
            <p>{logement.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Card
