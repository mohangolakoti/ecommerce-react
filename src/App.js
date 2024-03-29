import React from 'react'
import Home from './Components/Home'
import './App.css'  
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Mens from './Components/Mens'
import Womens from './Components/Womens'
import Kids from './Components/Kids'
import MensSingle from './Singlecomp/MensSingle'
import UserCart from './context/UserCart'
import WomensSingle from './Singlecomp/WomensSingle'
import KidsSingle from './Singlecomp/KidsSingle'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/mens' element={<Mens/>}/>
            <Route path='/womens' element={<Womens/>}/>
            <Route path='/kids' element={<Kids/>}/>
            <Route path='/mens/:id' element={<MensSingle/>}/>
            <Route path='/womens/:id' element={<WomensSingle/>}/>
            <Route path='/kids/:id' element={<KidsSingle/>}/>
            <Route path='/cart' element={<UserCart/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App