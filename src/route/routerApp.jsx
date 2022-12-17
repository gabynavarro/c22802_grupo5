import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nosotros from '../pages/Nosotros'
import Contacto from '../pages/Contacto'
import { HomeScreem } from '../pages/HomeScreen'

export const RouterApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeScreem/>}></Route>
            <Route path='/nosotros' element={<Nosotros/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
        </Routes>     

    </BrowserRouter>
  )
}



