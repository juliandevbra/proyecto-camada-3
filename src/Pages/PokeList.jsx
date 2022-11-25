import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const PokeList = () => {
    const [pokeList, setPokeList] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    useEffect(() => {
        axios(url)
        .then(res => setPokeList(res.data.results))
    }, [])
  return (
    <>
        <Outlet/>
        {pokeList.map(poke => <Link key={poke.name} to={poke.name}><li>{poke.name}</li></Link>)}
    </>
  )
}

export default PokeList