import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Dashboard from './Pages/Dashboard/Dashboard'
import Home from './Pages/Home/Home'
import React, {useState} from 'react'

function Routes() {
    const [menuAtivo, setMenuAtivo] = useState(false)
  return (
    <BrowserRouter>
        <Header menuValor={[menuAtivo, setMenuAtivo]}/>
      <Switch>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard menuValor={menuAtivo}/>}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes