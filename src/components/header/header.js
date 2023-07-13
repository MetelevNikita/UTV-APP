import './header.css'

// img

import utvLogo from './../../asset/logoUTV.svg'
import searchIcon from './../../asset/search-icon.svg'

//


const Header = () => {

  return(
    <div className="header-container">
      <div className="header-content">

              <div className="header-left">
                  <img className='header-logo' src={utvLogo} alt="utv-logo" />
              </div>
              <div className="header-right">
                <nav className='menu'>
                  <a href="#" className='menu-item item1'>menu</a>
                  <a href="#" className='menu-item item2'>menu</a>
                  <a href="#" className='menu-item item3'>menu</a>
                  <a href="#" className='menu-item item4'>menu</a>
                </nav>

                <div className="header-search-block">
                  <input className='search-text' type="text" placeholder='введите текст'/>
                  <img className='search-icon' src={searchIcon} alt="search-icon" />
                </div>
              </div>

      </div>
    </div>
  )
}


export default Header