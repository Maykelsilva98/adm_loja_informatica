import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Dashboard from './Pages/Dashboard/Dashboard'
import Home from './Pages/Home/Home'
import Formulario from './Pages/Formulario/Formulario'


function App() {

  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/formulario' element={<Formulario/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App