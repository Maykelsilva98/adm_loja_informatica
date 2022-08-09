import axios from 'axios';

const instancia = axios.create({
    baseURL: "https://loja-inf.herokuapp.com"
})

export const getProdutos = async()=>{
    const response = await instancia.get('/produtos')
    const json = await response.data 
    return json
}

export const getProdutosPorId = async(id)=>{
    const response = await instancia.get(`/produtos/${id}`)
    const json  = await response.data
    return json
}

export const deleteProduto = async (id) => {
    const response = await instancia.delete(`/produtos/${id}`);
  };

export const postProduto = async (id) => {
const response = await instancia.post
}