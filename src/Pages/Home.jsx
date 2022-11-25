import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

const Home = () => {
  return (
    <div>
        <Header/>
        <h2>Bienvenidos a mi pokedex</h2>
        <Outlet/>
    </div>
  )
}

export default Home