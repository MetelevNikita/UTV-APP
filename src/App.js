import './App.css'

// components

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/main/main'

//

import { createContext, useState } from 'react'

export const valueContext = createContext()

const App = () => {

  const [search, setSearch] = useState('')


  return(

    <valueContext.Provider value={{search, setSearch}}>

          <div className="App">

              <Header />

              <Main value={search}/>

              <Footer />

          </div>

    </valueContext.Provider>

  )
}

export default App