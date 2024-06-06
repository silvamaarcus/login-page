import React from "react";

import arte from "../../svg/image.svg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="container flex-center">
        <div className="grid-6 disappear">
          <img src={arte} />
        </div>
        <div className="grid-6 p-1">
          <form>
            <div className="titulo">
              <p className="bold semi-bold color-black">Bem vindo de volta</p>
              <h5 className="bold">Faça login na sua conta</h5>
            </div>

            <div className="formulario mt-5">
              <p className="bold semi-bold color-black">E-mail:</p>
              <input type="email" name="email" id="email" />

              <p className="bold semi-bold color-black mt-2">Senha:</p>
              <input type="password" name="password" id="password" />
            </div>

            <div className="flex-space mt-3">
              <div className="flex-center">
                <div>
                  <input type="checkbox" name="checkbox" id="checkbox" />
                </div>
                <div className="ml-1">
                  <p className="color-black w-100">Lembre de mim</p>
                </div>
              </div>

              <a href="" className="color-primary bold">
                Esqueceu sua senha?
              </a>
            </div>
            <div className="mt-7">
              <button className="btn w-100">Entrar na conta</button>
              <button className="mt-3 btn-google w-100">
                Ou faça login com o Google
              </button>
            </div>

            <span className="mt-3 flex-center">
              <p className="semi-bold color-black">Não tem uma conta?</p>
              <Link to="/register" className="ml-1 color-primary semi-bold">
                Cadastre-se
              </Link>
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
