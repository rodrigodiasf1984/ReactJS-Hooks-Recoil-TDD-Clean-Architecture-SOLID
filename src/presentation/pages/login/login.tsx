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
import { Link, useHistory } from "react-router-dom";

type LoginProps = {
  validation: Validation;
  authentication: Authentication;
};
const Login = ({ validation, authentication }: LoginProps) => {
  const history = useHistory();
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
    try {
      if (
        initialState.isLoading ||
        initialState.emailError ||
        initialState.passwordError
      ) {
        return;
      }

      setInitialState({ ...initialState, isLoading: true });
      const account = await authentication.auth({
        email: initialState.email,
        password: initialState.password,
      });
      localStorage.setItem("accessToken", account.accessToken);
      history.replace("/");
    } catch (error) {
      setInitialState({
        ...initialState,
        isLoading: false,
        mainError: error.message,
      });
    }
  };

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ initialState, setInitialState }}>
        <form
          data-testid="form"
          className={Styles.form}
          onSubmit={handleSubmit}
        >
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
          <Link data-testid="signup" to="/signup" className={Styles.link}>
            Criar conta
          </Link>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;
