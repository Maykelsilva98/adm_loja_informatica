import React from 'react'
import * as FaIcons from "react-icons/fa";
import Produto from '../../components/Produto/Produto'
import S from './Produtos.module.css'
import {arr} from './produtos_exemplo'


const Produtos = ({menuValor}) => {
  return (
    <div className={S.produtos} style={menuValor ? {width: 'calc(1024px - 155px)', marginLeft: '155px'}:{width: 'calc(1024px - 1rem)', marginLeft: '1rem'}}>
      <div className={S.conteudo}>
        <article className={S.descricao}>
          <div className={S.dia}>
            <p>08 de agosto, 2022</p><FaIcons.FaCalendarAlt size={30} className={S.icone5}/>
          </div>
          <input type="" name="" value="" placeholder='Pesquise por id' className={S.input}/>
        </article>
        <div className={S.produto_individual}> 
        <h2>Produtos</h2>   
          {arr.map((produto)=>{
            return <Produto dado={produto}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Produtos