import React, { useContext } from "react";
import Spinner from "../Spinner/Spinner";
import Styles from "./form-status-styles.scss";
import Context from "@/presentation/context/form/form-context";

const FormSatus = () => {
  const { initialState, errorState } = useContext(Context);
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {initialState.isLoading && <Spinner className={Styles.spinner} />}
      {errorState.mainError && (
        <div className={Styles.error}>errorState.mainError</div>
      )}
    </div>
  );
};

export default FormSatus;
