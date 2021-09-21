import React from "react";
import Spinner from "@/presentation/components/Spinner/Spinner";
import Styles from "./login-styles.scss";
import LoginHeader from "@/presentation/components/Login-header/LoginHeader";
import Footer from "@/presentation/components/Footer/Footer";
import Input from "@/presentation/components/Input/Input";

const Login = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite sua senha" />
        <Input
          type="password"
          name="password"
          placeholder="Digite seu password"
        />
        <button className={Styles.submitButton} type="submit">
          Entrar
        </button>
        <div className={Styles.link}>Cadastrar</div>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <div className={Styles.error}>Erro</div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
