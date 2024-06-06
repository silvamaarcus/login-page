const Register = () => {
  return (
    <>
      <section className="p-2 m-8">
        <div className="flex-center-column">
          <h6 className="bold text-center">Cadastrar novo usuário:</h6>
          <form className="mt-3">
            <p className="bold semi-bold color-black">E-mail:</p>
            <input type="email" name="email" id="email" />
            <p className="bold semi-bold color-black mt-2">Senha:</p>
            <input type="password" name="password" id="password" />

            <button className="btn uppercase w-100 mt-4">Enviar dados</button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Register;
