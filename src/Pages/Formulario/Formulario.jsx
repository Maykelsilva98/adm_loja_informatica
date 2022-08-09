import React from "react";
import style from "./Formulario.module.css";
import * as FaIcons from "react-icons/fa";

const Formulario = () => {
  return (
    <div>
      <form className={style.formulario}>
        <div className={style.Nome}>
        <label  for="nome">Nome</label>
        <br></br>
        <input style={{width: '160%' , borderRadius: '2%'}} type="text" id="nome" name="nome"></input>
        <br></br>
        </div>
        

        <label for="marca">Marca</label>
        <br></br>
        <input type="text" id="marca" name="marca"></input>
        <br></br>

        <label for="valor">Valor</label>
        <br></br>
        <input type="number" id="valor" name="valor"></input>
        <br></br>

        <label for="ID">Identificação</label>
        <br></br>
        <input type="number" id="ID" name="ID"></input>
        <br></br>

        <label for="cor">Cor</label>
        <br></br>
        <input type="text" id="cor" name="cor"></input>
        <br></br>

        <label for="dimensões">Dimensões</label>
        <br></br>
        <input type="text" id="dimensões" name="dimensões"></input>
        <br></br>

        <label for="peso">Peso</label>
        <br></br>
        <input type="text" id="peso" name="peso"></input>
        <br></br>

        <label for="descrição">Descrição</label>
        <br></br>
        <input type="text" id="descrição" name="descrição"></input>
        <br></br>

        <input type="submit" value="ENVIAR" />
        <input type="reset" value="CANCELAR"/>
      </form>
    </div>
  );
};

export default Formulario;
