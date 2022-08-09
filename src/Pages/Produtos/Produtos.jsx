import React, {useEffect, useState} from 'react'
import * as FaIcons from "react-icons/fa";
import Produto from '../../components/Produto/Produto'
import S from './Produtos.module.css'
import { getProdutos , getProdutosPorId } from '../../service/api';

const Produtos = ({menuValor}) => {

  const [req, setReq] = useState([])
  const [valorInput, setValorInput] = useState()

  async function handleReq(){
    const get = await getProdutos()
    setReq(get)
  }

  async function handleReqId(id){
    const get = await getProdutosPorId(id)
    setReq(get)
  }

  function handleSetValorInput(target){
    setValorInput(target.value)
  }


  useEffect(()=>{
    handleReq()
  },[])


  return (
    <div className={S.produtos} style={menuValor ? {width: 'calc(1024px - 155px)', marginLeft: '155px'}:{width: 'calc(1024px - 1rem)', marginLeft: '1rem'}}>
      <div className={S.conteudo}>
        <article className={S.descricao}>
          <div className={S.dia}>
            <p>08 de agosto, 2022</p><FaIcons.FaCalendarAlt size={30} className={S.icone5}/>
          </div>
          <div className={S.pesquisa}>
            <input type="" name="" value={valorInput} placeholder='Pesquise por id' className={S.input} onChange={({target})=>{handleSetValorInput(target)}}/>
            <button type="" onClick={()=>{handleReqId(valorInput)}}>Pesquisar</button>
          </div>
        </article>
        <div className={S.produto_individual}>
        <h2>Produtos</h2>   
          {req.map((produto)=>{
            return <Produto key={produto.ID} dado={produto}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Produtos