import arrow from '../../assets/arrow_up.png'
import '../../utils/style/collapse.sass'
import { useState } from 'react'

const aboutList = [
  {
    title: 'Fiabilité',
    content:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    title: 'Respect',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Service',
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: 'Sécurité',
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

function Collapse() {
  const [activeIndex, setActiveIndex] = useState([])

  const handleClick = (index) => {
    if (activeIndex.includes(index)) {
      setActiveIndex(activeIndex.filter((i) => i !== index))
    } else {
      setActiveIndex([...activeIndex, index])
    }
  }

  return (
    <div className="collapse-contener">
      {aboutList.map((col, index) => (
        <div
          key={index}
          className={`collapse-item ${activeIndex.includes(index) ? '' : 'collapsed'}`}
        >
          <div className="collapse-title">
            <span>{col.title}</span>
            <img
              onClick={() => handleClick(index)}
              className={activeIndex.includes(index) ? 'active' : ''}
              src={arrow}
              alt="arrow"
            />
          </div>

          <div
            className={`collapse-content ${activeIndex.includes(index) ? 'expanded' : 'collapsed'}`}
          >
            {col.content}
          </div>
        </div>
      ))}
    </div>
  )
}
export default Collapse
