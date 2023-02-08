import React from 'react'
import Home from './home'
import Cusine from './Cusine.jsx'
import {Routes,Route,useLocation} from 'react-router-dom'
import Searched from './Searched'
import Recipe from './Recipe'
import {AnimatePresence } from 'framer-motion'
function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes Location={location} key={location.pathname}>
          <Route path = "/cusine/:type" element={<Cusine/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/searched/:search" element={<Searched/>}/>
          <Route path="/recipe/:id" element={<Recipe/>}/>
      </Routes>
    </AnimatePresence>
      
  )
}

export default Pages