import RatingStars from '../Rating'
import Collapse from '../Collapse'
import './accomodationContent.sass'

function AccomodationContent({ logement }) {
  return (
    <div>
      <div className="main-content">
        <div className="title-and-tags">
          <div className="title-and-content">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>

          <div className="tags-contener">
            {logement.tags.map((tag, index) => (
              <div className="tags" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="host-and-rates">
          <div className="host-contener">
            <div className="host">
              <div>{logement.host.name}</div>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>
          <RatingStars rating={logement.rating} />
        </div>
      </div>

      <div className="collapses">
        <div className="collapse-acc-contener">
          <Collapse
            key="1"
            title="Description"
            content={logement.description}
          />
        </div>
        <div className="collapse-acc-contener">
          <Collapse
            key="1"
            title="Equipements"
            content={
              <ul>
                {' '}
                {logement.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default AccomodationContent
