import './footer.css'


// img


import vk from './../../asset/vk.svg'
import youtube from './../../asset/yt.svg'
import whatsapp from './../../asset/wa.svg'
import tg from './../../asset/tg.svg'


//

import { Link } from 'react-router-dom'



const Footer = () => {


  return(
    <div className="footer-container">
      <div className="footer-icons">


        <Link className='icon-link icon1' to={'/'}><img src={vk} alt="vk" /></Link>
        <Link className='icon-link icon2' to={'/'}><img src={youtube} alt="vk"/></Link>
        <Link className='icon-link icon3' to={'/'}><img src={whatsapp} alt="vk" /></Link>
        <Link className='icon-link icon4' to={'/'}><img src={tg} alt="vk" /></Link>


      </div>
    </div>
  )
}

export default Footer