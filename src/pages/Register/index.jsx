import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const Register = () => {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyCdmed2JAuxAOM3yzAIbuK3SObntHPv5eg",
    authDomain: "db-login-test-devmarcus.firebaseapp.com",
    projectId: "db-login-test-devmarcus",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "users");

  async function addUser() {
    const user = await addDoc(userCollectionRef, {
      name,
      email,
      password,
    });
    setName("");
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <>
      <h5 className="text-center">Cadastro</h5>

      <div className="flex-center">
        <div>
          <form className="formulario my-5">
            <p className="bold semi-bold color-black mt-2">Nome:</p>
            <input
              type="nome"
              name="nome"
              id="nome"
              placeholder="Insira seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <p className="bold semi-bold color-black mt-2">E-mail:</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Insira seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className="bold semi-bold color-black mt-2">Senha:</p>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>

          <div className="flex-center mb-2">
            <button onClick={addUser} className="btn">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
