import './styles/App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokemons from './pages/Pokemons'


function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={ <Login /> } />

                <Route element={ <ProtectedRoutes />}>

                    <Route path='/pokemons' element={ <Pokemons /> }/>

                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App
