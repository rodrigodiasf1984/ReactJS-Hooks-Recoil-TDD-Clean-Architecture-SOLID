import React, { useState } from "react";
import {
  LoginHeader,
  Footer,
  Input,
  FormStatus,
} from "@/presentation/components";

import Context from "@/presentation/context/form/form-context";

import Styles from "./login-styles.scss";

type StateProps = {
  isLoading: boolean;
  errorMessage: string;
};

const Login = () => {
  const [initialState] = useState<StateProps>({
    isLoading: false,
    errorMessage: "",
  });

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={initialState}>
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
