import React from 'react'
import S from './Home.module.css'

const Home = () => {
  return (
    <div className={S.container}>
        <section>
            <div className={S.headerText}>
                <h1>Sobre nós</h1>
                <p>A empresa Info é uma loja completa criada para te dar praticidade, otimizar seu tempo e o adquirir produtos de qualidade.</p>
                <h1>Nossa história</h1>
                <p>Info foi criada em 2015 com o pensamento de levar inovação nos produtos de informática para seus clientes. Buscando sempre priorizar 
                  a qualidade dos produtos para deixar todos satisfeitos.
                </p>
                </div>
                
                <div className={S.conteudo}>
                <h2 className={S.linha1}>Vantagens da empresa Info*</h2>

                <h4>facilidade</h4>       
                <p>Apresenta uma jornada completa dentro de uma loja de Informática. De acordo com seu dia a dia de trabalho.</p>
                <h4>seguro</h4>
                <p>Nossos produtos são originais, além de ter acompanhamento e garantia a fim de manter os seus produtos sempre com qualidade.</p>
                <h4>suporte</h4>
                <p>100% ao seu lado. Resolução imediata. Você não fica na mão mesmo!</p>
            </div>
        </section>
    </div>
  )
}

export default Home