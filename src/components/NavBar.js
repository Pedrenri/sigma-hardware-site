import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.png";
import { useState } from "react";

import "boxicons";

const NavBar = () => {

  /* DARK MODE */

  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }


  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
    }
  }


  const [IsActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!IsActive);

  return (
    <div>
      <div className="container-nav px-3 md:px-12 fixed">
        <div className="logo">
          <img src={logo} alt='logo' />
        </div>
        <box-icon
          name={IsActive ? "menu-alt-right" : "menu"}
          className="fill-white"
          onClick={toggleActive}
        />
      </div>
      <nav className={IsActive ? "item mt-20" : "hidden"}>
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
            <label class="theme-switch" for="checkbox">
              <input type="checkbox" onClick={switchTheme} id="checkbox" />
              <div class="slider round"></div>
              
            </label>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
