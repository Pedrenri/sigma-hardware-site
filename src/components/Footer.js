import React from 'react'

function Footer() {
    return (
        <footer className="flex p-6">
        <div className="newsletter flex flex-col items-center justify-center gap-y-4 w-96 md:w-full lg:w-2/3">
          <p className="font-bold">Receba notícias, novidades e promoções!</p>
          <div className="flex flex-col items-center gap-y-4 w-5/6 md:flex-row ">
            <input
              type="email"
              placeholder="E-Mail"
              className="mx-6 rounded px-3 py-3 w-full shadow-lg"
            />
            <input
              type="submit"
              value="Se Inscreva!"
              className="px-3 py-1 button w-36"
            />
          </div>
        </div>
      </footer>
    )
}

export default Footer
