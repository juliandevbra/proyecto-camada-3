import React from 'react'
import { Link } from 'react-router-dom'
import {routes} from '../Routes'
const Header = () => {
  return (
    <div>
        <ul>
            <Link to={routes.home}><li>Home</li></Link>  
            <Link to={routes.pokeList}><li>PokeList</li></Link>  
            <Link to={routes.pokeTypes}><li>PokeTypes</li></Link>  
        </ul>
    </div>
  )
}

export default Header