import star_on from '../../assets/star_on.png'
import star_off from '../../assets/star_off.png'
import './ratingStar.sass'

function RatingStars({ rating }) {
  const stars = Array(5).fill(0)

  return (
    <div className="rating-stars">
      {stars.map((_, index) => (
        <img
          className="star"
          key={index}
          src={index < rating ? star_on : star_off}
          alt={index < rating ? 'red star' : 'grey star'}
        />
      ))}
    </div>
  )
}

export default RatingStars
