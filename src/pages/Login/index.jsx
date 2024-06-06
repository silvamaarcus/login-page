// React
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Firebase
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

// Imagens
import arte from "../../assets/svg/image.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null); // Adicionar estado para mensagem de erro

  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // Caso o usuário esteja cadastrado...
  useEffect(() => {
    if (user) {
      console.log("Usuário logado!!!");
      navigate("/sucess");
    }
  }, [user, navigate]);

  // Caso o usuário NÃO esteja cadastrado...
  useEffect(() => {
    if (error) {
      setLoginError("Usuário ou senha inválidos!!!");
    }
  }, [error]);

  function handleSignIn(e) {
    e.preventDefault();
    setLoginError(null); // Resetar mensagem de erro antes de tentar login
    signInWithEmailAndPassword(email, password).catch((error) => {
      setLoginError("Usuário ou senha inválidos!!!");
    });
  }

  return (
    <>
      <section className="container flex-center">
        <div className="grid-6 disappear">
          <img src={arte} alt="Arte" />
        </div>

        <div className="grid-6 p-1">
          <div>
            <div className="titulo">
              <p className="semi-bold color-black">Bem vindo de volta</p>
              <h5 className="bold">Faça login na sua conta</h5>
            </div>

            <form className="formulario mt-5" onSubmit={handleSignIn}>
              <p className="bold semi-bold color-black">E-mail:</p>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <p className="bold semi-bold color-black mt-2">Senha:</p>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

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

              {loginError && (
                <div className="error-message mt-3 color-red">{loginError}</div>
              )}

              <div className="mt-7">
                <button type="submit" className="btn w-100" disabled={loading}>
                  {loading ? "Entrando..." : "Entrar na conta"}
                </button>
                <button className="mt-3 btn-google w-100">
                  Ou faça login com o Google
                </button>
              </div>
            </form>

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
