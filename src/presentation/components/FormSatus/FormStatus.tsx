import React from "react";
import Spinner from "../Spinner/Spinner";
import Styles from "./form-status-styles.scss";

const FormSatus = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <div className={Styles.error}>Erro</div>
    </div>
  );
};

export default FormSatus;
