// React biblioteca
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

// Firebase
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

// Imagens
import arte from "../../assets/svg/image.svg";

const Login = () => {
  // Gerencia o estado e a validação do formulário.
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Gerencia o estado local para mensagens de erro de login.
  const [loginError, setLoginError] = useState(null);

  // Permite redirecionar (navegação entre páginas) o usuário após o login bem-sucedido.
  const navigate = useNavigate();

  // Autenticação de usuários com email e senha usando Firebase.
  // --> signInWithEmailAndPassword: função p/ chamar email e senha para autenticar um usuário.
  // --> user: O estado do usuário autenticado. Se o login for bem-sucedido, este objeto será preenchido com os dados do usuário.
  // --> loading: Um estado booleano que indica se a operação de login está em andamento.
  // --> error: Um estado que contém qualquer erro que possa ter ocorrido durante o processo de login.
  // --> auth: usada para interagir com a API de autenticação do Firebase, permitindo operações como login, logout, criação de contas, e muito mais.
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // useEffect: reagir às mudanças nos estados user, error e navigate.
  useEffect(() => {
    // "se" o user estiver com as info no firebase cadastrada, a página será redirecionada para página sucess.
    if (user) {
      console.log("Usuário logado!!!");
      navigate("/sucess");
      // "se não se", o user NÃO estiver com as info no firebase cadastrada, será exibido uma mesagem de erro.
    } else if (error) {
      setLoginError("Usuário ou Senha incorretos.");
    }
  }, [user, error, navigate]); // array de dependências diz ao useEffect p/ executar a função de efeito sempre que qualquer uma dessas dependências mudar.

  const onSubmit = (data) => {
    setLoginError(null); // Resetando mensagem de erro.

    // função signInWithEmailAndPassword: tenta autenticar o usuário usando o email e a senha fornecidos.
    // data.email, data.password: fonecidos pelo usuario no input
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
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
          <form className="formulario mt-5" onSubmit={handleSubmit(onSubmit)}>
            <p className="bold semi-bold color-black">E-mail:</p>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "E-mail é obrigatório" }}
              render={({ field }) => <input type="email" {...field} required />}
            />
            {errors.email && (
              <p className="error-message color-red">{errors.email.message}</p>
            )}

            <p className="bold semi-bold color-black mt-2">Senha:</p>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "Senha é obrigatória" }}
              render={({ field }) => (
                <input type="password" {...field} required />
              )}
            />
            {errors.password && (
              <p className="error-message color-red">
                {errors.password.message}
              </p>
            )}

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
  );
};

export default Login;
