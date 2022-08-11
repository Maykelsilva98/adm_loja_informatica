import { useState, onChange, useEffect } from "react";
import styles from "./Formulario_put.module.scss";
// import * as FaIcons from "react-icons/fa";
import { useParams } from "react-router-dom";
import { putProduto, getProdutosPorId } from "../../service/api";
import { Link } from 'react-router-dom'

const Formulario_put = () => {
  const [imageUrl, setImageUrl] = useState("");

  const [req, setReq] = useState([])

  async function handleReqId(id){
    const get = await getProdutosPorId(id)
    setReq(get[0])
  } 

  function handleChange(target, key){
    const valor = target.value
    setReq({...req, [key]: valor})
  }

  function handleCancelar(){

  }

  const {id} = useParams()

  async function handlePut(){
    await putProduto(id, req)
  }

  useEffect(()=>{
    handleReqId(id)
  },[])


  return (
    <div>
      <form className={styles.formulario}>
        <div className={`${styles.wrapper} ${styles.wrapper__two}`}>
          <label for="nome">Nome</label>

          <input
            type="text"
            id="nome"
            name="nome"
            value={req.nome}
            // onChange={(e) => setImageUrl(e.target.value)}
            onChange={({target})=>{handleChange(target, 'nome')}}
          ></input>
        </div>

        <div className={styles.wrapper}>
          <label for="marca">Marca</label>

          <input type="text" id="marca" name="marca"  value={req.marca} onChange={({target})=>{handleChange(target, 'marca')}}></input>
        </div>

        <div className={styles.wrapper}>
          <label for="valor" >Valor</label>

          <input type="number" id="valor" name="valor" value={req.valor} onChange={({target})=>{handleChange(target, 'valor')}}></input>
        </div>

        <div className={styles.wrapper}>
          <label for="ID">Identificação</label>

          <input type="number" id="ID" name="ID" value={req.id} onChange={({target})=>{handleChange(target, 'id')}} ></input>
        </div>

        <div className={styles.wrapper}>
          <label for="cor">Cor</label>

          <input type="text" id="cor" name="cor" value={req.cor} onChange={({target})=>{handleChange(target, 'cor')}}></input>
        </div>

        <div className={styles.wrapper}>
          <label for="dimensões">Dimensões</label>

          <input type="text" id="dimensões" name="dimensões" value={req.tamanho} onChange={({target})=>{handleChange(target, 'tamanho')}}></input>
        </div>

        <div className={styles.wrapper}>
          <label for="peso">Peso</label>

          <input type="text" id="peso" name="peso" value={req.peso} onChange={({target})=>{handleChange(target, 'peso')}}></input>
        </div>

        <div className={`${styles.wrapper} ${styles.wrapper__two}`}>
          <label for="descrição">Descrição</label>
          <textarea type="text" id="descrição" name="descrição" value={req.descricao} onChange={({target})=>{handleChange(target, 'descricao')}}></textarea>
        </div>


        <img src={req.imagem_url} alt="" width={"200vh"} height={"200vh"}/>


        <div className={`${styles.wrapper} ${styles.wrapper__two}`}>
          <label for="nome">URL</label>

          <input
            type="text"
            id="imagem"
            name="imagem"
            value={req.imagem_url} onChange={({target})=>{handleChange(target, 'imagem_url')}}
          ></input>
        </div>


        {/* <button type="submit" value="ENVIAR" /> */}
        <button type="" onClick={handlePut()}>Enviar</button>
        <button type="" onClick={<Link to={`/produtos`}>Editar</Link>}>Cancelar</button>
        {/* <input type="reset" value="CANCELAR" /> */}
      </form>

      <img src={imageUrl} alt="Error" className={styles.imagestest} />
    </div>
  );
};

export default Formulario_put;