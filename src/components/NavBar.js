import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.png";
import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="container-nav">
      <div className="logo">Σ</div>

      <nav className="item">
        <ul className="ul-nav">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/Products">Produtos</Link>
          </li>
          <li>
            <Link to="/news">Notícias</Link>
          </li>
          <li>
            <Link to="/contact">Suporte</Link>
          </li>
          <li>
            <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
              <motion.div className="handle" data-isOn={isOn} layout transition={spring} />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
