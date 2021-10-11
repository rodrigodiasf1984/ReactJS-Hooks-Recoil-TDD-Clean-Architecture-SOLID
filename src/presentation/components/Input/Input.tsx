import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  FocusEvent,
  useContext,
} from "react";
import Context from "@/presentation/context/form/form-context";
import Styles from "./input-styles.scss";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = (props: InputProps) => {
  const { initialState, setInitialState } = useContext(Context);
  const error = initialState[`${props.name}Error`];

  function enableInput(event: FocusEvent<HTMLInputElement>): void {
    event.target.readOnly = false;
  }

  function getTitle(): string {
    return error || "Tudo certo!";
  }

  function getStatus(): string {
    return error ? "🔴" : "🟢";
  }

  function handleChange(event: FocusEvent<HTMLInputElement>): void {
    setInitialState({
      ...initialState,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className={Styles.inputWrap}>
      <input
        {...props}
        data-testid={props.name}
        readOnly
        onFocus={enableInput}
        onChange={handleChange}
      />
      <span
        data-testid={`${props.name}-status`}
        title={getTitle()}
        className={Styles.status}
      >
        {getStatus()}
      </span>
    </div>
  );
};

export default Input;
