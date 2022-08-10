import React, {useState, createContext} from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
import S from './Header.module.css'
import * as FaIcons from "react-icons/fa";



const Header = ({menuValor}) => {

    function handleSetMenu(){
        if (menuValor[0]){
            menuValor[1](false)
        } else{
            menuValor[1](true)
        }
    }
  return (
    <div className={S.header}>
        <h1>InfoTástica<FaIcons.FaDesktop size={40} className={S.icone1}/></h1>
        <Link to="#" onClick={()=>handleSetMenu()}  className={S.menu_sandwich}>
            <FaIcons.FaBars size={40} className={S.icone2}/>
        </Link>
        <div className={S.menuH}>
            <Menu ativo={menuValor[0]}/>       
        </div>
    </div>
  )
}

export default Header;