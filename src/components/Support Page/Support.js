import React from "react";
import Navbar from "../NavBar";
import InputMask from "react-input-mask";

function Support() {
  return (
    <div>
      <Navbar />
      <main className="pt-20 h-screen">
        <div className=" pt-20 title flex align-center bg-white py-3 md:py-6 px-8 md:px-24 w-full">
          <h3>Suporte</h3>
        </div>
        <section className="support flex flex-col justify-start md:px-40 ">
          <p className="mt-20 formtitle pl-8 md:pl-0">
            Preencha o formulário abaixo para solicitar assistência em produtos
            Sigma
          </p>
          <form className="py-16 flex flex-col items-between w-full px-4 md:px-0 md:w-96 gap-y-4">
            <label for="email">
              Endereço de Email:
              <input
                type="email"
                name="email"
                className="supinput px-2 rounded"
                required
              />
            </label>
            <label for="nome">
              Nome:
              <input
                type="text"
                name="nome"
                className="supinput px-2 rounded"
                required
              />
            </label>
            <label for="tel">
              Telefone:
              <InputMask
                mask="(99) 99999-9999"
                className="px-2 supinput rounded"
                required
              ></InputMask>
            </label>
            <label for="product">
              Produto:
              <select name="product" className="supinput px-2 rounded">
                <option value="Placa de Vídeo">Placa de Vídeo</option>
                <option value="Processador">Processador</option>
                <option value="Memória">Memória</option>
              </select>
            </label>
            <label for="mensagem">Mensagem:</label>
            <textarea
              required
              name="mensagem"
              className="supinput h-40 w-full px-2 rounded"
            ></textarea>
            <div>
              <input type="reset" className="supinput ml-12 px-2" />
              <input type="submit" className="send ml-12 px-2" />
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Support;
