import React from "react";
import NavBar from "../NavBar";
import NewsGen from "./NewsGen";
import Footer from '../Footer'
import imagenews1 from "../../assets/img/CPU4.png";
import imagenews2 from "../../assets/img/news-2.jpg";
import imagenews3 from "../../assets/img/news1.png";

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
    title: "A Sigma APOLLO está aqui.",
    image: imagenews3,
  };

  const news4 = {
    title: "Sigma Pandora: Para Revolucionar o Mercado.",
    image: imagenews1,
  };

  const news5 = {
    title: "Sigma Pandora: Para Revolucionar o Mercado.",
    image: imagenews1,
  };

  return (
    <div className="">
      <NavBar />
      <main className="pt-20 pb-40 flex flex-col items-center">
        <div className=" pt-20 title flex align-center bg-white py-3 md:py-6 px-8 md:px-24 w-full mb-20">
          <h3>Produtos Sigma</h3>
        </div>
        <div className="news-container-full">
          <div className="news-container-top md:flex md:gap-x-4">
            <NewsGen {...news1} />
            <NewsGen {...news2} />
          </div>
          <div className="news-container-bottom md:flex md:gap-x-2">
            <NewsGen {...news3} />
            <NewsGen {...news1} />
            <NewsGen {...news1} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default News;
