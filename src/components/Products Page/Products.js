import React from "react";
import NavBar from "../NavBar";
import ProductGen from "./ProductGen";
import Separator from '../Separator'
import ARES from "../../assets/img/ARES.png";
import ARES2 from "../../assets/img/ARES2.png";
import ARES3 from "../../assets/img/ARES3.png";
import ARES4 from '../../assets/img/ARES4.png'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

function Products() {
  const product1 = {
    title: "SIGMA ARES",
    description: "Chip: SI-GM4;Memória: 12GB GDDR6X 400 bit;Clock da GPU: 2500MHz;Clock da Memória: 1700MHz;",
    image: ARES,
    image2: ARES2,
    image3: ARES3,
    image4: ARES4
  };

  return (
    <div>
      <NavBar />
      
      <main className="pt-40 flex flex-col items-center">
      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Placas de Vídeo</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Processadores</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Memórias</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Separator />
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                  <ProductGen {...product1} />
                  <ProductGen {...product1} />
                  </Tab.Pane>
                </Tab.Content>
      
        
        </Tab.Container>
      </main>
    </div>
  );
}

export default Products;
