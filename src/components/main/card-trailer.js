import './card-trailer.css'

const Cardtrailer = ({close, link, ...props}) => {

  const {open, setOpen} = close
  console.log(open)
  console.log(link)

  return(
    <div className="card-trailer-container">
      <div className="card-trailer-box">

        <iframe className='card-trailer-video' src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <button className="card-trailer-closebtn" onClick={() => {setOpen(false)}}>&#10006;</button>

      </div>
    </div>
  )
}

export default Cardtrailer




