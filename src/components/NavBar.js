import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.png";
import { useState } from "react";
import useLocalStorage from 'use-local-storage'
import "boxicons";

const NavBar = () => {

  /* DARK MODE */
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const ThemeSwap = () => {
    const newtheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newtheme)
    document.documentElement.setAttribute('data-theme', theme)
    console.log(theme)
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
      <nav className={IsActive ? "item px-4 py-2 flex items-center rounded-2xl" : "hidden2"}>
      {/* <img src={logo} alt='logo' /> */}
        <ul className="ul-nav px-0 flex flex-col md:flex-row m-0">
          <li className="mx-2 my-1 md:my-0 lg:mx-6">
            <Link to="/">Início</Link>
          </li>
          <li className="mx-2 my-1 md:my-0 lg:mx-6">
            <Link to="/Products">Produtos</Link>
          </li>
          <li className="mx-2 my-1 md:my-0 lg:mx-6">
            <Link to="/News">Notícias</Link>
          </li>
          <li className="mx-2 my-1 md:my-0 lg:mx-6">
            <Link to="/Support">Suporte</Link>
          </li>
          <li className="mx-2 lg:mx-6">
            <label class="theme-switch" for="checkbox">
              <box-icon onClick={ThemeSwap} type='solid' name={theme==='dark' ? 'moon' : 'sun'}/>
            </label>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
