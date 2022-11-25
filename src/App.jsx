import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import PokeList from './Pages/PokeList'
import PokeTypes from './Pages/PokeTypes'
import PageNotFound from './Pages/PageNotFound'
import { routes } from './Routes'
import Pokemon from './Components/Pokemon'

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home/>}>
        <Route path={routes.pokeList} element={<PokeList/>}>
          <Route path={routes.pokemon} element={<Pokemon/>}/>
        </Route>
        <Route path={routes.pokeTypes} element={<PokeTypes/>}/>
      </Route>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default App
