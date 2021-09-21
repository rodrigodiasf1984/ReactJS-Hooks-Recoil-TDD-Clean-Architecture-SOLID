import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  FocusEvent,
} from "react";

import Styles from "./input-styles.scss";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = (props: InputProps) => {
  function enableInput(event: FocusEvent<HTMLInputElement>): void {
    event.target.readOnly = false;
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span className={Styles.status}>🔴</span>
    </div>
  );
};

export default Input;
