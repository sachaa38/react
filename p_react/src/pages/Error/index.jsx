import { Link } from 'react-router-dom'
import '../../utils/style/error.sass'

function Error() {
  return (
    <div className="error-contener">
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/Accueil" className="link-accueil">
        Retournez à la page d'accueil
      </Link>
    </div>
  )
}

export default Error
