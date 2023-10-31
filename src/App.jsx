import React from 'react'
import Products from './components/products/Products.jsx'
import  Restaurant from './components/restaurant/Restaurant.jsx'
import Home from './components/home/Home.jsx'
import {Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <> 
     <Routes>
      <Route path='/home' element={ <Home />}/>
      <Route path='/products' element={ <Products />}/>
      <Route path='/restaurant' element={ <Restaurant />}/>
     </Routes>
    </>
    
    
  )
  
}
