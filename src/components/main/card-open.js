import './card-open.css'

// img

import imgOpen from './../../asset/picture-proagram-list-open.png'

//

import { cardShow } from '../../server/server'
import Cardtrailer from './card-trailer'

//


import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Cardopen = () => {
  const [open, setOpen] = useState(false)

  const params = useParams()
  const id = params.id
  const card = cardShow[id-1]





  return(
    <div className="card-open-container">
      <div className="card-open-box">

        <div className="card-open-left">
          <img className='card-open-img' src={imgOpen} alt="img-open" />

          <div className='card-open-btn-box'>
          <button className='card-open-btn btn-trailer' onClick={() => {setOpen(true)}}>Трейлер</button>
          <Link to={card.channel}><button className='card-open-btn btn-channel'>Канал</button></Link>
          </div>
        </div>
        <div className="card-open-right">
          <div className="card-open-title">{card.title}</div>
          <div className="card-open-subtitle">{card.subtitle}</div>

          <div className="card-open-info">
            <div className="card-open-timing">Хрон: {card.timing}</div>
            <div className="card-open-year">Год: {card.year}</div>
          </div>

          <div className="card-open-author">Автор передачи: {card.author}</div>
          <div className="card-open-host">Ведущий: {card.host}</div>
          <div className="card-open-editor">Монтажер: {card.editor}</div>
          <div className="card-open-operator">Оператор: {card.operator}</div>

        </div>

      </div>

      {/* modal */}


      {
        open && <Cardtrailer close={{open, setOpen}} link={card.trailer}></Cardtrailer>
      }

    </div>
  )
}


export default Cardopen