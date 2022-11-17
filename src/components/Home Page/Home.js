import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import HomeBanner from "./HomeBanner";
import HomeProduct from "./HomeProduct";
import GameBanner from "./GameBanner";
import HomeNews from "./HomeNews";
import Separator from "../Separator";

function Home() {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-center">
        <HomeBanner/>
        <Separator/>
        <HomeProduct/>
        <GameBanner/>
        <HomeNews/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
