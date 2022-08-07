import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
import S from './Header.module.css'
import * as FaIcons from "react-icons/fa";

const Header = () => {
    const [menuValor, setMenu] = useState(false)

    function handleSetMenu(){
        if (menuValor){
            setMenu(false)
            console.log("Funcinando")
        } else{
            console.log("Funcinando")
            setMenu(true)
        }
    }

  return (
    <div className={S.header}>
        <h1>Empresa Foda <FaIcons.FaDesktop size={40} className={S.icone1}/></h1>
        <Link to="#" onClick={()=>handleSetMenu()}  className={S.menu_sandwich}>
            <FaIcons.FaBars size={40} className={S.icone2}/>
        </Link>
        <div className={S.menuH}>
            <Menu ativo={menuValor}/>       
        </div>
    </div>
  )
}

export default Header