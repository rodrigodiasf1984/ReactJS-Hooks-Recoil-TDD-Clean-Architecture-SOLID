import React from "react";
import Spinner from "@/presentation/components/spinner/spinner";
import Logo from "@/presentation/components/Logo/logo";
import Styles from "./login-styles.scss";

const Login = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <Logo />
        <h1>4Dev - Enquetes para Programadores</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <span className={Styles.status}>🔴</span>
        </div>{" "}
        <div className={Styles.inputWrap}>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <span className={Styles.status}>🔴</span>
        </div>
        <button className={Styles.submitButton} type="submit">
          Entrar
        </button>
        <div className={Styles.link}>Cadastrar</div>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <div className={Styles.error}>Erro</div>
        </div>
      </form>
      <footer className={Styles.footer} />
    </div>
  );
};

export default Login;
