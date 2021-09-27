import React, { HTMLAttributes } from "react";
import Styles from "./spinner-styles.scss";

type SpinnerProps = HTMLAttributes<HTMLElement>;

const Spinner: React.FC<SpinnerProps> = (props: SpinnerProps) => {
  return (
    <div
      {...props}
      data-testid="spinner"
      className={[Styles.spinner, props.className].join(" ")}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
