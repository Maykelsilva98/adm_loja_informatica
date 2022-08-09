const arr = []


for(let i = 0; i<5; i++){
    const obj = {
        nome : `nome${i}`,
        cor: `cor${i}`,
        marca: `marca${i}`,
        peso: `peso${i}`,
        tamanho: `tamanho${i}`,
        valor: `valor${i}`,
        descricao: `descricao${i}`,
        imagem_url: `images${i}`
    }

    arr.push(obj)
}

export {arr}

