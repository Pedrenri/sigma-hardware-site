import React from "react";
import NavBar from "../NavBar";
import NewsGen from "./NewsGen";
import Footer from '../Footer'
import imagenews1 from "../../assets/img/CPU4.png";
import imagenews2 from "../../assets/img/news-2.jpg";
import imagenews3 from "../../assets/img/news1.png";
import imagenews4 from "../../assets/img/news-3.jpg";
import imagenews5 from "../../assets/img/news-4.png";

function News() {
  const news1 = {
    title: "Sigma Pandora: Para Revolucionar o Mercado.",
    image: imagenews1,
  };

  const news2 = {
    title: "Confira todas as indicações para o The Game Awards 2022.",
    image: imagenews2,
  };

  const news3 = {
    title: "APOLLO: Benchmark em 30 jogos quebra recordes.",
    image: imagenews3,
  };

  const news4 = {
    title: "Benchmarks de placas de vídeo Sigma em Marvel's Spider-Man.",
    image: imagenews4,
  };

  const news5 = {
    title: "APOLLO impressiona em testes de renderização em Blender.",
    image: imagenews5,
  };

  return (
    <div className="">
      <NavBar />
      <main className="pt-20 pb-40 flex flex-col items-center">
        <div className=" pt-20 title flex align-center bg-white py-3 md:py-6 px-8 md:px-24 w-full mb-20">
          <h3>Notícias </h3>
        </div>
        <div className="news-container-full">
          <div className="news-container-top md:flex md:gap-x-4">
            <NewsGen {...news1} />
            <NewsGen {...news2} />
          </div>
          <div className="news-container-bottom md:flex md:gap-x-2">
            <NewsGen {...news3} />
            <NewsGen {...news4} />
            <NewsGen {...news5} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default News;
