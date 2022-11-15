import React from "react";
import NavBar from "./NavBar";
import BannerGPU from "../assets/img/BannerGPU.png";
import CPU from "../assets/img/CPU.png";
import GPU from "../assets/img/GPU.png";
import MEM from "../assets/img/MEM.png";
import news1 from "../assets/img/news1.png";
import news2 from "../assets/img/news2.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-center">
        <section className="banner-container w-full flex items-end lg:items-center lg:px-12">
          <div className="text-white w-full banner-text-holder px-8 py-4 gap-y-12">
            <h2>O PANTEÃO ESTÁ AQUI</h2>
            <p>
              Novas GPUS Apollo e Ares já estão aqui! Prepare-se para atingir o
              Olimpo com o poder de processamento com a arquitetura Sigma
              Pantheon e seus modelos de chip gráfico.
            </p>
            <Link to="/products" className="buttonw">
              SAIBA MAIS
            </Link>
          </div>
        </section>
        <div className="separator my-12" />

        <div className="product-holder xl:w-full xl:flex xl:justify-center">
          <ul className="pl-0 md:flex md:items-center ">
            <li className="flex flex-column items-center mb-20 xl:mx-24">
              <img className="" src={CPU} />
              <h1>Processadores</h1>
              <Link to="/products" className="button">
                SAIBA MAIS
              </Link>
            </li>
            <li className="flex flex-column items-center mb-20 xl:mx-24">
              <img className="" src={GPU} /> <h1>Placas de Vídeo</h1>
              <Link to="/products" className="button">
                SAIBA MAIS
              </Link>
            </li>
            <li className="flex flex-column items-center mb-20 xl:mx-24">
              <img className="" src={MEM} /> <h1>Memórias</h1>
              <Link to="/products" className="button">
                SAIBA MAIS
              </Link>
            </li>
          </ul>
        </div>
        <div className="banner-game pt-80 mb-12 md:p-6 ">
          <article className="bannerGText text-white text-justify px-10 py-6 md:w-72 xl:h-80 xl:w-96 xl:flex xl:flex-col xl:gap-y-4">
            <h1>Poder Bruto</h1>
            <p>
              As novas GPU com arquitetura Sigma Pantheon bateram todos os
              recordes de benchmark em Elden Ring!
            </p>
            <Link to="/news" className="w-40 buttonw">
              SAIBA MAIS
            </Link>
          </article>
        </div>
        <div className="news-holder md:px-6">
          <ul className="pl-0 news-articles md:flex md:gap-x-4 ">
            <li className="flex flex-column mb-20">
              <div>
                <img src={news1} />
              </div>
              <article className="px-6 py-6 text-justify">
                <h1 className="mb-6">Apollo</h1>
                <p>
                  A Sigma Apollo é a GPU definitiva. Ela traz um enorme salto em
                  desempenho, eficiência e gráficos com inteligência artificial.
                  Experimente jogos de alto desempenho, mundos virtuais
                  incrivelmente detalhados, produtividade sem precedentes e
                  novas maneiras de criar. Equipada com a arquitetura Sigma
                  Pantheon, ela vem com 36 GB de memória GDDR6X para oferecer a
                  melhor experiência para jogadores e criadores de conteúdo.
                </p>
                <Link to="/news" className="button">
                  VEJA MAIS
                </Link>
              </article>
            </li>
            <li className="flex flex-column items-center mb-20">
              <div>
                <img src={news2} />
              </div>
              <article className="px-6 py-6 text-justify">
                <h1 className="mb-6">Pandora</h1>
                <p>
                  Os Sigma Pandora são a nova linha de processadores Sigma. Eles
                  traz uma vantagem enorme com seus núcleos inteligentes.
                  Experimente jogos de alto desempenho, mundos virtuais
                  incrivelmente detalhados, produtividade sem precedentes e
                  novas maneiras de criar. Equipada com a arquitetura Sigma
                  Pantheon e ainda com 72MB de memória Cache total para oferecer
                  o melhor desempenho para jogadores e criadores em geral.
                </p>
                <Link to="/news" className="button">
                  VEJA MAIS
                </Link>
              </article>
            </li>
          </ul>
        </div>
      </main>
      <footer className="flex p-6">
        <div className="newsletter flex flex-col items-center justify-center gap-y-4 w-96 md:w-full lg:w-2/3">
          <p className="font-bold">Receba notícias, novidades e promoções!</p>
          <div className="flex flex-col items-center gap-y-4 w-5/6 md:flex-row ">
            <input
              type="email"
              placeholder="E-Mail"
              className="mx-6 rounded px-3 py-3 w-full shadow-lg"
            />
            <input
              type="submit"
              value="Se Inscreva!"
              className="px-3 py-1 button w-36"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
