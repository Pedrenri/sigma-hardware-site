import React from 'react'
import { Link } from 'react-router-dom'
import news1 from "../../assets/img/news1.png";
import news2 from "../../assets/img/news2.png";

function HomeNews() {
    return (
        <div className="news-holder flex flex-col lg:flex-row md:gap-x-6 px-6 lg:px-20">
          <div className="flex flex-column mb-20 lg:w-1/2">
            <div className='h-1/2 overflow-hidden'>
              <img src={news1} />
            </div>
            <article className="px-3 py-6 text-justify w-full">
              <h2 className="mb-3">Apollo</h2>
              <p className='text-md xl:text-xl lg:h-36'>
                A Sigma Apollo é a GPU definitiva. Ela traz um enorme salto em
                desempenho, eficiência e gráficos com inteligência artificial.
                Experimente jogos de alto desempenho, mundos virtuais
                incrivelmente detalhados, produtividade sem precedentes e novas
                maneiras de criar.
              </p>
              <Link to="/news" className="button font-semibold">
                VEJA MAIS
              </Link>
            </article>
          </div>
          <div className="flex flex-column items-center mb-20 lg:w-1/2">
            <div className='h-1/2 overflow-hidden'>
              <img src={news2} />
            </div>
            <article className="px-3 py-6 text-justify w-full">
              <h2 className="mb-3">Pandora</h2>
              <p className='lg:text-md xl:text-xl lg:h-36'>
                Os Sigma Pandora são a nova linha de processadores Sigma.
              </p>
              <Link to="/news" className="button font-semibold">
                VEJA MAIS
              </Link>
            </article>
          </div>
        </div>
    )
}

export default HomeNews
