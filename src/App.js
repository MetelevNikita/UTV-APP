import './App.css'

// components

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/main/main'

//

import { createContext, useState } from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Cardopen from './components/main/card-open'
import Cardtrailer from './components/main/card-trailer'

export const valueContext = createContext()

const App = () => {

  const [search, setSearch] = useState('')


  return(



    <valueContext.Provider value={{search, setSearch}}>

      <div className="App">

      <BrowserRouter>
          <Header />
              <Routes>
                  <Route path='/' element={<Main value={search}/>}></Route>
                  <Route path='/:id' element={<Cardopen />}></Route>
              </Routes>
          <Footer />
      </BrowserRouter>

      </div>

      </valueContext.Provider>





  )
}

export default App