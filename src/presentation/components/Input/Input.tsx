import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  FocusEvent,
  useContext,
  ReactElement,
} from "react";
import { HiOutlineXCircle, HiOutlineCheckCircle } from "react-icons/hi";
import Context from "@/presentation/context/form/form-context";
import Styles from "./input-styles.scss";
import { IconType } from "react-icons";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = (props: InputProps) => {
  const { errorState } = useContext(Context);
  const error = errorState[props.name];
  function enableInput(event: FocusEvent<HTMLInputElement>): void {
    event.target.readOnly = false;
  }

  function getTitle(): string {
    return error;
  }

  // function getStatus() {
  //   return <HiOutlineXCircle color="red" />;
  // }

  function getStatus(): string {
    return "🔴";
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      {/* <span className={Styles.status}>🔴</span> */}
      <span
        data-testid={`${props.name}-status`}
        title={getTitle()}
        className={Styles.status}
      >
        {getStatus()}
      </span>
      {/* <span className={Styles.status}>
        <HiOutlineCheckCircle color="green" />
      </span> */}
    </div>
  );
};

export default Input;
