import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="flex p-6">
      <motion.div
        className="newsletter flex flex-col items-center justify-center gap-y-4 w-96 md:w-full lg:w-2/3"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ ease: "linear", duration:.1, delay:0}}
      >
        <p className="font-bold">Receba notícias, novidades e promoções!</p>
        <form className="flex flex-col items-center gap-y-4 w-5/6 md:flex-row ">
          <input
            type="email"
            placeholder="E-Mail"
            className="mx-6 rounded px-3 py-3 w-full shadow-lg"
          />
          <input
            type="submit"
            value="Se Inscreva!"
            className="px-3 py-1 button-nl w-36"
          />
        </form>
      </motion.div>
    </footer>
  );
}

export default Footer;
