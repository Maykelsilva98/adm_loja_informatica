import React, {useState} from 'react'
import S from './Produto.module.css'
import { Link } from 'react-router-dom'

const Produto = ({dado}) => {
    const [descricaoAtivo, setDesscricaoAtivo] = useState(false)
    const {id, nome, cor, marca, peso, tamanho, valor, descricao, imagem_url} =  dado

    function handleSetDescricaoAtivo(){
        if (descricaoAtivo){
            setDesscricaoAtivo(false)
        } else{
            setDesscricaoAtivo(true)
        }
    }
  return (
    <div className={S.produto} onClick={()=> handleSetDescricaoAtivo()}>
        <article className={S.produto_atibutos}>
            <p>Nome: {nome}</p>
            <p>Marca: {marca}</p>
            <p>Cor: {cor}</p>
            <p>Peso: {peso}</p>
            <p>Dimensões: {tamanho}</p>
            <p>Valor: R${valor}</p>
        </article>
        <article className={S.descricao} style={descricaoAtivo? {display: 'grid'}: {display: 'none'}}>
            <p>{descricao}</p>
            <img src={imagem_url} alt="" width={'100px'} height={'100px'}/>
            <div className={S.editar}>
                <Link to={`/formulario/${id}`}>Editar</Link>
                
            </div>
        </article>
    </div>
  )
}

export default Produto