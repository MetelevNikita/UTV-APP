import './main.css'

// components

import Cardlist from './card-list'

//

const Main = ({value, ...props}) => {


  return(
    <div className="main-container">

      <Cardlist value={value}></Cardlist>

    </div>
  )
}

export default Main