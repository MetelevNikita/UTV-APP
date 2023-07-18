import './header.css'

// img

import utvLogo from './../../asset/logoUTV.svg'
import searchIcon from './../../asset/search-icon.svg'

//

import { useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { valueContext } from '../../App'
import { Link } from 'react-router-dom'




const Header = () => {

  const {search, setSearch} = useContext(valueContext)
  const [animation, setAnimation] = useState('search-text ')




  return(
    <div className="header-container">
      <div className="header-content">

              <div className="header-left">
                <Link to={'/'}><img className='header-logo' src={utvLogo} alt="utv-logo" /></Link>
              </div>
              <div className="header-right">
                <nav className='menu'>
                  <a href="#" className='menu-item item1'>Главная</a>
                  <a href="#" className='menu-item item2'>Проекты</a>
                  <a href="#" className='menu-item item3'>О нас</a>
                  <a href="#" className='menu-item item4'>Контакты</a>
                </nav>

                <div className="header-search-block" onMouseEnter={() => {setAnimation(['search-text ', 'search-animation '].join(''))}} onMouseLeave={() => {setAnimation(['search-text'].join(''))}}>
                  <input  className={animation} type="text" placeholder='введите текст' value={search} onChange={(e) => {setSearch(e.target.value)}}/>
                  <img className='search-icon' src={searchIcon} alt="search-icon" />
                </div>
              </div>

      </div>
    </div>
  )
}


export default Header