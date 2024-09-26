import arrow from '../../assets/arrow_up.png'
import './collapse.sass'
import { useState } from 'react'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="collapse-item">
      <div className="collapse-title">
        <span>{title}</span>
        <img
          onClick={handleClick}
          className={isOpen ? 'active' : ''}
          src={arrow}
          alt="arrow"
        />
      </div>
      <div className="box">
        <div
          className={`collapse-content ${isOpen ? 'expanded' : 'collapsed'}`}
        >
          {content}
        </div>
      </div>
    </div>
  )
}
export default Collapse
