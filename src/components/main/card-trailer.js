import './card-trailer.css'

const Cardtrailer = () => {

  return(
    <div className="card-trailer-container">
      <div className="card-trailer-box">

        <video className='card-trailer-video' src="https://www.youtube.com/watch?v=kC20kPKbWMU"></video>
        <button className="card-trailer-closebtn">Закрыть</button>

      </div>
    </div>
  )
}

export default Cardtrailer