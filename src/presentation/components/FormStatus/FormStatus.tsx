import React, { useContext } from "react";
import Spinner from "../Spinner/Spinner";
import Styles from "./form-status-styles.scss";
import Context from "@/presentation/context/form/form-context";

const FormSatus = () => {
  const { isLoading, errorMessage } = useContext(Context);
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && <div className={Styles.error}>errorMessage</div>}
    </div>
  );
};

export default FormSatus;
