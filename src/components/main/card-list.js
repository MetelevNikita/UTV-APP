import './card-list.css'


// componsnts

import Cardsmall from "./card-small"
import { cardShow } from '../../server/server'

//

import { useState } from 'react'


const Cardlist = () => {

  const [card, setCard] = useState(cardShow)


  return(
    <div className="card-list-container">

      {
        card.length > 1 && card.map((item) => {return <Cardsmall key={item.id} title={item.title} subtitle={item.subtitle}></Cardsmall>})
      }

    </div>
  )
}

export default Cardlist