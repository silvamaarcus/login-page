// React
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Firebase
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

// Imagens
import arte from "../../assets/svg/image.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Usuário logado!!!");
        // Redirecionar para outra página após login bem-sucedido
        navigate("/sucess");
      })
      .catch((error) => {
        console.error("Erro ao fazer login: ", error);
      });
    // signInWithEmailAndPassword(email, password);
    // console.log("Usuario logado!!!");
  }

  return (
    <>
      <section className="container flex-center">
        <div className="grid-6 disappear">
          <img src={arte} />
        </div>

        <div className="grid-6 p-1">
          <div>
            <div className="titulo">
              <p className="semi-bold color-black">Bem vindo de volta</p>
              <h5 className="bold">Faça login na sua conta</h5>
            </div>

            <div className="formulario mt-5">
              <p className="bold semi-bold color-black">E-mail:</p>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <p className="bold semi-bold color-black mt-2">Senha:</p>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
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

              <a href="#" className="color-primary bold">
                Esqueceu sua senha?
              </a>
            </div>

            <div className="mt-7">
              <button className="btn w-100" onClick={handleSignIn}>
                Entrar na conta
              </button>
              <button className="mt-3 btn-google w-100">
                Ou faça login com o Google
              </button>
            </div>
            <span className="mt-3 flex-center">
              <p className="semi-bold color-black">Não tem uma conta?</p>
              <Link to="/register" className="ml-1 color-primary semi-bold">
                Criar conta grátis!
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
