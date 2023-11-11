import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import DetallePokemon from './views/DetallePokemon'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/pokemones'
          element={<Pokemones />}
        />
        <Route
          path='/pokemones/:id'
          element={<DetallePokemon />}
        />
      </Routes>
    </>
  )
}
export default App
