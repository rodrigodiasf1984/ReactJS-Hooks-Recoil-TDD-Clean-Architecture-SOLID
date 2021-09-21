import React from "react";
import {
  LoginHeader,
  Footer,
  Input,
  FormStatus,
} from "@/presentation/components";
import Styles from "./login-styles.scss";

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
        <FormStatus />
      </form>
      <Footer />
    </div>
  );
};

export default Login;
