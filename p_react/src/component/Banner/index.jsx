import './banner.sass'

function Banner({ background, text }) {
  return (
    <div className="div-banner">
      <div className="text-banner">{text}</div>

      <div className="background-banner">
        <img src={background} alt="Background home page" />
      </div>
    </div>
  )
}

export default Banner
