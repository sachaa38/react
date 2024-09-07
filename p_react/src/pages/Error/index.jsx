import { Link } from 'react-router-dom'
import './error.sass'

function Error() {
  return (
    <div className="error-contener">
      <h1>404</h1>
      <div className="p-contener-error">
        <p>Oups ! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/Accueil" className="link-accueil">
        Retournez à la page d'accueil
      </Link>
    </div>
  )
}

export default Error
