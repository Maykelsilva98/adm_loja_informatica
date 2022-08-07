import React, {useState} from 'react'
import S from './Menu.module.css'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";

const Menu = ({ativo}) => {
  return (
    <div className={S.menu_container}>
        <nav className={ativo ? S.menu_ativo : S.menu}>
            <Link to="#" className={S.link_menu}> <FaIcons.FaChartBar className={S.icone3}/>Dashboards</Link>
            <Link to="#" className={S.link_menu}> <FaIcons.FaShoppingBag className={S.icone3}/>Produtos</Link>
            <Link to="#" className={S.link_menu}> <FaIcons.FaBullhorn className={S.icone3}/> Sobre Nós</Link>
            <Link to="#" className={S.link_menu}> <FaIcons.FaPeopleArrows className={S.icone3}/>Clientes</Link>
            <Link to="#" className={S.link_menu}> <FaIcons.FaDollarSign className={S.icone3}/>Finanças</Link>
            <Link to="#" className={S.link_menu}> <FaIcons.FaPowerOff className={S.icone3}/>Log Out</Link>
            <Link to="#" className={S.link_menu}> <FaIcons.FaCommentAlt className={S.icone3}/>Contate-me!</Link>
            <div className={S.redes_sociais}>
                <FaIcons.FaInstagram size={25} className={S.icone4}/>
                <FaIcons.FaGithub size={25} className={S.icone4}/>
                <FaIcons.FaWhatsapp size={25} className={S.icone4}/>
            </div>
        </nav>
        
    </div>

  )
}

export default Menu