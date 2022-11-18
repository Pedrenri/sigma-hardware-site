import React from "react";
import NavBar from "../NavBar";
import ProductGen from "./ProductGen";
import Separator from "../Separator";

import ARES from "../../assets/img/ARES.png";
import ARES2 from "../../assets/img/ARES2.png";
import ARES3 from "../../assets/img/ARES3.png";
import ARES4 from "../../assets/img/ARES4.png";

import APOLLO from "../../assets/img/APOLLO.png";
import APOLLO2 from "../../assets/img/APOLLO2.png";
import APOLLO3 from "../../assets/img/APOLLO3.png";
import APOLLO4 from "../../assets/img/APOLLO4.png";

import CPU from "../../assets/img/CPU1.png";
import CPU2 from "../../assets/img/CPU2.png";
import CPU3 from "../../assets/img/CPU3.png";
import CPU4 from "../../assets/img/CPU4.png";

import MEM1 from "../../assets/img/MEM.png";
import MEM2 from "../../assets/img/MEM1.png";
import MEM3 from "../../assets/img/MEM2.png";
import MEM4 from "../../assets/img/MEM3.png";

import ProductBanner from "../../assets/img/BannerProduct.png";
import { Tab, Nav } from "react-bootstrap";

function Products() {
  const product1 = {
    title: "SIGMA ARES",
    description:
      "Chip: AL-PH4;Memória: 12GB GDDR6X 400 bit;Clock da GPU: 2500MHz;Clock da Memória: 1700MHz;",
    image: ARES,
    image2: ARES2,
    image3: ARES3,
    image4: ARES4,
  };

  const product2 = {
    title: "SIGMA APOLLO",
    description:
      "Chip: SI-GM4;Memória: 24GB GDDR6X 600 bit;Clock da GPU: 4500MHz;Clock da Memória: 2700MHz;",
    image: APOLLO,
    image2: APOLLO2,
    image3: APOLLO3,
    image4: APOLLO4,
  };

  const product3 = {
    title: "SIGMA PANDORA",
    description:
      "Núcleos Físicos: 32;Núcleos Lógicos: 32;Cache: 50Mb;Clock Boost da GPU: 6100MHz;",
    image: CPU,
    image2: CPU2,
    image3: CPU3,
    image4: CPU4,
  };

  const product4 = {
    title: "SIGMA ATHENA",
    description:
      "Fator de Forma: DDR5;Velocidades: 6200MHz;Latência: CL14;Capacidade: 64Gb(4X16GB) ;",
    image: MEM1,
    image2: MEM2,
    image3: MEM3,
    image4: MEM4,
  };

  return (
    <div>
      <NavBar />

      <main className="pt-20 flex flex-col items-center">
        <div className="product-banner px-8 lg:px-40 xl:px-96 py-12 bg-black w-full mb-20">
          <img src={ProductBanner} alt="banner" />
        </div>

        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Nav
            variant="pills"
            className="nav-pills mb-5 justify-content-center align-items-center"
            id="pills-tab"
          >
            <Nav.Item>
              <Nav.Link eventKey="first">GPU</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">CPU</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">RAM</Nav.Link>
            </Nav.Item>
          </Nav>
          <Separator />
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <ProductGen {...product1} />
              <ProductGen {...product2} />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <ProductGen {...product3} />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <ProductGen {...product4} />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </main>
    </div>
  );
}

export default Products;
