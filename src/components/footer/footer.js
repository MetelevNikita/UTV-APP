import './footer.css'


// img


import vk from './../../asset/vk.svg'
import youtube from './../../asset/yt.png'
import whatsapp from './../../asset/wa.svg'
import tg from './../../asset/tg.svg'



const Footer = () => {


  return(
    <div className="footer-container">
      <div className="footer-icons">

        <a className='icon-link icon1' href="#"><img src={vk} alt="vk" /></a>
        <a className='icon-link icon2' href="#"><img src={youtube} alt="vk" /></a>
        <a className='icon-link icon3' href="#"><img src={whatsapp} alt="vk" /></a>
        <a className='icon-link icon4' href="#"><img src={tg} alt="vk" /></a>

      </div>
    </div>
  )
}

export default Footer