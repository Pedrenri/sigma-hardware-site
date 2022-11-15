import React from "react";
import NavBar from "./NavBar";
import BannerGPU from "../assets/img/BannerGPU.jpg";
import CPU from "../assets/img/CPU.webp";
import GPU from "../assets/img/GPU.png";
import MEM from "../assets/img/MEM.png";
import news1 from "../assets/img/news1.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavBar />
      <main className="home-container flex flex-col items-center">
        <section className="banner-container xl:px-72">
          <img src={BannerGPU} />
        </section>
        <div className="separator" />
        <article className="text-container p-8 lg:px-12 xl:px-56">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum
          sem id orci ultrices imperdiet. In dolor arcu, imperdiet rhoncus magna
          vel, dignissim vestibulum dolor. Mauris tincidunt bibendum elit sed
          vestibulum. Sed et ultricies lectus. Curabitur vel odio vestibulum,
          pharetra sapien sed, maximus ipsum. Duis vestibulum elit at nisi
          laoreet lobortis. Proin facilisis convallis arcu, sed ultrices felis
          hendrerit et. Mauris ac faucibus nisi. Curabitur accumsan ex imperdiet
          urna scelerisque cursus. Sed pellentesque nisi eget velit tempor, sit
          amet fringilla nunc placerat. Nullam vestibulum, lacus in mattis
          dapibus, mi dui fermentum neque, vel pretium ex elit in elit. Nam
          placerat, diam at ultrices vehicula, sapien metus vestibulum lectus,
          non vestibulum orci nulla non lectus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </article>
        <div className="product-holder xl:w-full xl:flex xl:justify-center">
          <ul className="pl-0 md:flex md:items-center ">
            <li className="flex flex-column items-center mb-20 xl:mx-24">
              <img className="h-52 xl:h-80" src={CPU} />
              <h1>Processadores</h1>
              <Link to="/products">SAIBA MAIS</Link>
            </li>
            <li className="flex flex-column items-center mb-20 xl:mx-24">
              <img className="h-52 xl:h-80" src={GPU}  /> <h1>Placas de Vídeo</h1>
              <Link to="/products">SAIBA MAIS</Link>
            </li>
            <li className="flex flex-column items-center mb-20 xl:mx-24">
              <img className="h-52 xl:h-80" src={MEM} /> <h1>Memórias</h1>
              <Link to="/products">SAIBA MAIS</Link>
            </li>
          </ul>
        </div>
        <div className="banner-game pt-80 mb-12 md:p-6 ">
          <article className="bannerGText text-white text-justify px-10 py-6 md:w-72 xl:h-80 xl:w-96 xl:flex xl:flex-col xl:gap-y-4">
            <h1>LIPSUM</h1>
            <p>
              Consectetur adipiscing elit. In elementum sem id orci ultrices
              imperdiet. In dolor arcu, imperdiet rhoncus magna vel
            </p>
            <Link to="/news" className="w-40">SAIBA MAIS</Link>
          </article>
        </div>
        <div className="news-holder md:px-6">
          <ul className="pl-0 news-articles md:flex md:gap-x-4 ">
            <li className="flex flex-column mb-20">
              <img src={news1} />
              <article className="px-6 py-6 text-justify">
                <h1 className="mb-6">LIPSUM</h1>
                <p>
                  Consectetur adipiscing elit. In elementum sem id orci ultrices
                  imperdiet. In dolor arcu, imperdiet rhoncus magna vel,
                  dignissim vestibulum dolor. Mauris tincidunt bibendum elit sed
                  vestibulum. Sed et ultricies lectus. Curabitur vel odio
                  vestibulum.
                </p>
                <Link to="/news">VEJA MAIS</Link>
              </article>
            </li>
            <li className="flex flex-column items-center mb-20">
              <img src={news1} />
              <article className="px-6 py-6 text-justify">
                <h1 className="mb-6">LIPSUM</h1>
                <p>
                  Consectetur adipiscing elit. In elementum sem id orci ultrices
                  imperdiet. In dolor arcu, imperdiet rhoncus magna vel,
                  dignissim vestibulum dolor. Mauris tincidunt bibendum elit sed
                  vestibulum. Sed et ultricies lectus. Curabitur vel odio
                  vestibulum.
                </p>
                <Link to="/news">VEJA MAIS</Link>
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
