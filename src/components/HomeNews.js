import React from 'react'
import { Link } from 'react-router-dom'
import news1 from "../assets/img/news1.png";
import news2 from "../assets/img/news2.png";

function HomeNews() {
    return (
        <div className="news-holder flex flex-col lg:flex-row md:gap-x-6 md:px-6">
          <div className="flex flex-column mb-20 ">
            <div>
              <img src={news1} />
            </div>
            <article className="px-6 py-6 text-justify">
              <h1 className="mb-6">Apollo</h1>
              <p>
                A Sigma Apollo é a GPU definitiva. Ela traz um enorme salto em
                desempenho, eficiência e gráficos com inteligência artificial.
                Experimente jogos de alto desempenho, mundos virtuais
                incrivelmente detalhados, produtividade sem precedentes e novas
                maneiras de criar. Equipada com a arquitetura Sigma Pantheon,
                ela vem com 36 GB de memória GDDR6X para oferecer a melhor
                experiência para jogadores e criadores de conteúdo.
              </p>
              <Link to="/news" className="button">
                VEJA MAIS
              </Link>
            </article>
          </div>
          <div className="flex flex-column items-center mb-20">
            <div>
              <img src={news2} />
            </div>
            <article className="px-6 py-6 text-justify">
              <h1 className="mb-6">Pandora</h1>
              <p>
                Os Sigma Pandora são a nova linha de processadores Sigma. Eles
                traz uma vantagem enorme com seus núcleos inteligentes.
                Experimente jogos de alto desempenho, mundos virtuais
                incrivelmente detalhados, produtividade sem precedentes e novas
                maneiras de criar. Equipada com a arquitetura Sigma Pantheon e
                ainda com 72MB de memória Cache total para oferecer o melhor
                desempenho para jogadores e criadores em geral.
              </p>
              <Link to="/news" className="button">
                VEJA MAIS
              </Link>
            </article>
          </div>
        </div>
    )
}

export default HomeNews
