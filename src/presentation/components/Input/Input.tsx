import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

import Styles from "./input-styles.scss";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = (props: InputProps) => {
  return (
    <div className={Styles.inputWrap}>
      <input {...props} />
      <span className={Styles.status}>🔴</span>
    </div>
  );
};

export default Input;
