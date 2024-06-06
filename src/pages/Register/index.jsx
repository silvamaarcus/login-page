import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  return (
    <>
      <section className="p-2 m-8">
        <div className="flex-center-column">
          <h6 className="bold text-center">Cadastrar novo usuário:</h6>
          <form className="mt-3">
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

            <button
              className="btn uppercase w-100 mt-4"
              onClick={handleSignOut}
            >
              Enviar dados
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Register;
