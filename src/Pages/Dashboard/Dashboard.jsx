import React from 'react'
import S from './Dashboard.module.css'
import * as FaIcons from "react-icons/fa";

const Dashboard = ({menuValor}) => {
  return (
    <div className={S.dashboard} style={menuValor ? {width: 'clamp(1000px, 1290px, 2000px)', marginLeft: '150px'}:{width: 'clamp(1000px, 1440px, 2000px)'}}>
        <div className={S.card_receita}>
            <FaIcons.FaMoneyBill/>
            <article>
                <p>R$#####</p>
                <p>Receita</p>
            </article>
        </div>
    </div>
  )
}

export default Dashboard