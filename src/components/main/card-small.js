import './card-small.css'

// img


import cardImg from './../../asset/picture-proagram-list.png'




const Cardsmall = (props) => {


  return(
    <div className="card-small-container card-animation">
      <div className="card-small-box">

        <img className="card-img-small" src={cardImg} alt="img-avatar" />
        <div className="card-title">{props.title}</div>
        <div className="card-subtitle">{props.subtitle}</div>

      </div>
    </div>
  )
}

export default Cardsmall