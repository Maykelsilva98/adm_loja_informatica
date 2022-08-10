import { useState, onChange } from "react";
import styles from "./Formulario.module.scss";
// import * as FaIcons from "react-icons/fa";
import { postProduto } from "../../service/api";

const Formulario = () => {
  const [imageUrl, setImageUrl] = useState();
  const [dadosForm, setDadosForm] = useState({
    id: "",
    nome: "",
    cor: "",
    marca: "",
    peso: "",
    tamanho: "",
    valor: "",
    descrição: "",
    imagem_url: "",
  });

  function handleChange(target, key) {
    const value = target.value;
    setDadosForm({ ...dadosForm, [key]: value });
    console.log (dadosForm)
  }

  function handleSave() {
    postProduto(dadosForm)
  }

  return (
    <div>
      <form className={styles.formulario}>
        <div className={`${styles.wrapper} ${styles.wrapper__two}`}>
          <label for="nome">Nome</label>

          <input
            type="text"
            id="nome"
            name="nome"
            value={dadosForm.nome}
            onChange={({ target }) => {
              handleChange(target, "nome");
            }}
          ></input>
        </div>

        <div className={styles.wrapper}>
          <label for="marca">Marca</label>

          <input type="text" id="marca" name="marca" value={dadosForm.marca}
            onChange={({target})=>{handleChange(target, 'marca')}}></input>
        </div>

        <div className={styles.wrapper}>
          <label for="valor">Valor</label>

          <input type="number" id="valor" name="valor" value={dadosForm.valor}
            onChange={({target})=>{handleChange(target, 'valor')}}></input>
        </div>

        <div className={styles.wrapper}>
          <label for="ID">Identificação</label>

          <input type="number" id="ID" name="ID" value={dadosForm.id}
            onChange={({target})=>{handleChange(target, 'id')}}></input>
        </div>

        <div className={styles.wrapper}>
          <label for="cor">Cor</label>

          <input type="text" id="cor" name="cor" value={dadosForm.cor}
            onChange={({target})=>{handleChange(target, 'cor')}}></input>
        </div>

        <div className={styles.wrapper}>
          <label for="dimensões">Dimensões</label>

          <input type="text" id="dimensões" name="dimensões" value={dadosForm.tamanho}
            onChange={({target})=>{handleChange(target, 'tamanho')}}></input>
        </div>

        <div className={styles.wrapper}>
          <label for="peso">Peso</label>

          <input type="text" id="peso" name="peso" value={dadosForm.peso}
            onChange={({target})=>{handleChange(target, 'peso')}}></input>
        </div>

        <div className={`${styles.wrapper} ${styles.wrapper__two}`}>
          <label for="descrição">Descrição</label>
          <textarea type="text" id="descrição" name="descrição" value={dadosForm.descricao}
            onChange={({target})=>{handleChange(target, 'descricao')}}></textarea>
        </div>

        <img
          src={dadosForm.imagem_url}
          alt="error"
          className={styles.imagestest}
          width={"200vh"}
          height={"200vh"}
          margin={"71vh"}

        />

        <div className={`${styles.wrapper} ${styles.wrapper__two}`}>
          <label for="nome">URL</label>

          <input
            type="text"
            id="url"
            name="url"
            // onChange={(e) => setImageUrl(e.target.value)}
            value={dadosForm.imagem_url}
            onChange={({target})=>{handleChange(target, 'imagem_url')}}
          ></input>
        </div>

      
        <button type="" onClick={handleSave}>Enviar</button>
        <input type="reset" value="CANCELAR" />
      </form>
      {/* <img src={imageUrl} alt="Error" className={styles.imagestest} /> */}
    </div>
  );
};

export default Formulario;
