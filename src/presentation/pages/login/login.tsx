import React, { useEffect, useState } from "react";
import {
  LoginHeader,
  Footer,
  Input,
  FormStatus,
} from "@/presentation/components";

import Context from "@/presentation/context/form/form-context";
import Styles from "./login-styles.scss";
import { Validation } from "@/presentation/protocols/validation";

type LoginProps = {
  validation: Validation;
};
const Login = ({ validation }: LoginProps) => {
  const [initialState, setInitialState] = useState({
    email: "",
    emailError: "",
    isLoading: false,
    mainError: "",
    password: "",
    passwordError: "",
  });

  useEffect(() => {
    setInitialState({
      ...initialState,
      emailError: validation.validate("email", initialState.email),
      passwordError: validation.validate("password", initialState.password),
    });
  }, [initialState.email, initialState.password]);

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ initialState, setInitialState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite sua senha" />
          <Input
            type="password"
            name="password"
            placeholder="Digite seu password"
          />
          <button
            data-testid="submitButton"
            className={Styles.submitButton}
            type="submit"
            disabled
          >
            Entrar
          </button>
          <div className={Styles.link}>Criar conta</div>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;
