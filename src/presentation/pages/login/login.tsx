import React, { FormEvent, useEffect, useState } from "react";
import {
  LoginHeader,
  Footer,
  Input,
  FormStatus,
} from "@/presentation/components";

import Context from "@/presentation/context/form/form-context";
import Styles from "./login-styles.scss";
import { Validation } from "@/presentation/protocols/validation";
import { Authentication } from "@/domain/usecases";

type LoginProps = {
  validation: Validation;
  authentication: Authentication;
};
const Login = ({ validation, authentication }: LoginProps) => {
  const [initialState, setInitialState] = useState({
    isLoading: false,
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    mainError: "",
  });

  useEffect(() => {
    setInitialState({
      ...initialState,
      emailError: validation.validate("email", initialState.email),
      passwordError: validation.validate("password", initialState.password),
    });
  }, [initialState.email, initialState.password]);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (initialState.isLoading) return;

    setInitialState({ ...initialState, isLoading: true });
    await authentication.auth({
      email: initialState.email,
      password: initialState.password,
    });
  };

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ initialState, setInitialState }}>
        <form className={Styles.form} onSubmit={handleSubmit}>
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
            disabled={!!initialState.emailError || !!initialState.passwordError}
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
