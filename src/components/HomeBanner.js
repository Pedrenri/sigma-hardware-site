import React from 'react'
import { Link } from "react-router-dom";

function HomeBanner() {
    return (
        <section className="banner-container w-full flex items-end lg:items-center lg:px-12">
          <div className="text-white w-full banner-text-holder px-8 py-4 gap-y-12">
            <h2>O PANTEÃO ESTÁ AQUI</h2>
            <p>
              Novas GPUS Apollo e Ares já estão aqui! Prepare-se para atingir o
              Olimpo com o poder de processamento com a arquitetura Sigma
              Pantheon e seus modelos de chip gráfico.
            </p>
            <Link to="/products" className="buttonw">
              SAIBA MAIS
            </Link>
          </div>
        </section>
    )
}

export default HomeBanner
