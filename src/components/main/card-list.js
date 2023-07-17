import './card-list.css'


// componsnts

import Cardsmall from "./card-small"
import { cardShow } from '../../server/server'

//

import { useState } from 'react'
import { Link } from 'react-router-dom'



const Cardlist = ({value, ...props}) => {

  const [card, setCard]= useState(cardShow)
  const searchFilter = card.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase())
  })



  return(
    <div className="card-list-container">

      {
        card.length > 1 && searchFilter.map((item) => {return <Link to={`/${item.id}`}><Cardsmall key={item.id} title={item.title} subtitle={item.subtitle}></Cardsmall></Link> })
      }

    </div>
  )
}

export default Cardlist