import React from "react";
import NavBar from "./NavBar";

import news1 from "../assets/img/news1.png";
import news2 from "../assets/img/news2.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import HomeBanner from "./HomeBanner";
import HomeProduct from "./HomeProduct";
import GameBanner from "./GameBanner";
import HomeNews from "./HomeNews";

function Home() {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-center">
        <HomeBanner/>
        <div className="separator my-12" />
        <HomeProduct/>
        <GameBanner/>
        <HomeNews/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
