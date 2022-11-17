import React from 'react'
import { Link } from "react-router-dom";
import CPU from "../../assets/img/CPU.png";
import GPU from "../../assets/img/ARES.png";
import MEM from "../../assets/img/MEM.png";

function HomeProduct() {
    return (
        <div className="product-holder xl:w-full xl:flex xl:justify-center">
          <ul className="pl-0 md:flex md:items-center ">
            <li className="flex flex-column items-center mb-20">
              <div className="bg-blue-50 rounded p-6 mb-4 md:mb-0 mx-6 md:mx-3">
                <img className="" src={CPU} alt='CPU'/>
              </div>
              <h1>Processadores</h1>
              <Link to="/products" className="button mt-2">
                SAIBA MAIS
              </Link>
            </li>
            <li className="flex flex-column items-center mb-20 ">
              <div className="bg-blue-50 rounded p-6 mb-4 md:mb-0 mx-6 md:mx-3">
                <img className="" src={GPU} alt='GPU' />
              </div>{" "}
              <h1>Placas de Vídeo</h1>
              <Link to="/products" className="button mt-2">
                SAIBA MAIS
              </Link>
            </li>
            <li className="flex flex-column items-center mb-20 ">
              <div className="bg-blue-50 rounded p-6 mb-4 md:mb-0 mx-6 md:mx-3">
                <img className="" src={MEM} alt='MEM' />
              </div>{" "}
              <h1>Memórias</h1>
              <Link to="/products" className="button mt-2">
                SAIBA MAIS
              </Link>
            </li>
          </ul>
        </div>
    )
}

export default HomeProduct
