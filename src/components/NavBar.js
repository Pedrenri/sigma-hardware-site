import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.png";
import { useState } from "react";
import { motion } from "framer-motion";
import 'boxicons';

const NavBar = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const [IsActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!IsActive);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div>
      <div className="container-nav px-12">
        <div className="logo">
          <img src={logo} />
        </div>
        <box-icon name={IsActive ? 'menu-alt-right' : 'menu'} className='fill-white'  onClick={toggleActive}/>
      </div>
      <nav className={IsActive ? "item" : 'hidden'}>
        <ul className="ul-nav px-3">
          <li className="mx-2 lg:mx-6 mb-3">
            <Link to="/">Início</Link>
          </li>
          <li className="mx-2 lg:mx-6 mb-3">
            <Link to="/Products">Produtos</Link>
          </li>
          <li className="mx-2 lg:mx-6 mb-3">
            <Link to="/news">Notícias</Link>
          </li>
          <li className="mx-2 lg:mx-6 mb-3">
            <Link to="/contact">Suporte</Link>
          </li>
          <li className="mx-2 lg:mx-6 mb-3">
            <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
              <motion.div
                className="handle"
                data-isOn={isOn}
                layout
                transition={spring}
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
