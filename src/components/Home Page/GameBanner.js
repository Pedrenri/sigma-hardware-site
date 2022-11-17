import React from 'react'
import { Link } from 'react-router-dom'

function GameBanner() {
    return (
        <div className="banner-game pt-80 mb-12 md:p-6 ">
          <article className="bannerGText text-white text-justify px-10 py-6 md:w-72 xl:h-80 xl:w-96 xl:flex xl:flex-col xl:gap-y-4">
            <h1>Poder Bruto</h1>
            <p>
              As novas GPU com arquitetura Sigma Pantheon bateram todos os
              recordes de benchmark em Elden Ring!
            </p>
            <Link to="/news" className="w-40 buttonw">
              SAIBA MAIS
            </Link>
          </article>
        </div>
    )
}

export default GameBanner
