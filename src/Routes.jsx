import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Dashboard from './Pages/Dashboard/Dashboard'
import Home from './Pages/Home/Home'
import React, {useState} from 'react'
import Formulario from './Pages/Formulario/Formulario'
import Formulario_put from './Pages/Fomulario_put/Formulario_put'
import Produtos from './Pages/Produtos/Produtos'


function Routes() {
    const [menuAtivo, setMenuAtivo] = useState(false)
  return (
    <BrowserRouter>
        <Header menuValor={[menuAtivo, setMenuAtivo]}/>
      <Switch>
        <Route path='/' element={<Home/>}/>
        <Route path='/produtos' element={<Produtos menuValor={menuAtivo}/>}/>
        <Route path='/dashboard' element={<Dashboard menuValor={menuAtivo}/>}/>
        <Route path='/formulario' element={<Formulario menuValor={menuAtivo}/>}/>
        <Route path='/formulario/:id' element={<Formulario_put menuValor={menuAtivo}/>}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes