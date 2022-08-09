import React, {useState} from 'react'
import S from './Produto.module.css'

const Produto = ({dado}) => {
    const [descricaoAtivo, setDesscricaoAtivo] = useState(false)
    const {ID, NOME, COR, MARCA, PESO, TAMANHO, VALOR, DESCRICAO, IMAGEM_URL} =  dado

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
            <p>Nome: {NOME}</p>
            <p>Marca: {MARCA}</p>
            <p>Cor: {COR}</p>
            <p>Peso: {PESO}</p>
            <p>Dimensões: {TAMANHO}</p>
            <p>Valor: R${VALOR}</p>
        </article>
        <article className={S.descricao} style={descricaoAtivo? {display: 'grid'}: {display: 'none'}}>
            <p>{DESCRICAO}</p>
            <img src={IMAGEM_URL} alt="" width={'100px'} height={'100px'}/>
            <div className={S.editar}>
                <a href="">Editar</a>
                
            </div>
        </article>
    </div>
  )
}

export default Produto