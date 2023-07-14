import './card-small.css'

// img


import cardImg from './../../asset/picture-proagram-list.png'



const Cardsmall = () => {

  return(
    <div className="card-small-container">
      <div className="card-small-box">

        <img className="card-img-small" src={cardImg} alt="img-avatar" />
        <div className="card-title"></div>
        <div className="card-subtitle"></div>

      </div>
    </div>
  )
}

export default Cardsmall