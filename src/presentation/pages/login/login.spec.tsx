import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi";

describe("Login Component", () => {
  test("should start start with initial state", () => {
    const { getByTestId } = render(<Login />);
    const errorWrap = getByTestId("error-wrap");
    expect(errorWrap.childElementCount).toBe(0);

    const submitButton = getByTestId("submitButton") as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);

    const emailStatus = getByTestId("email-status");
    expect(emailStatus.title).toBe("Campo obrigatório");
    // expect(emailStatus.textContent).toBe(<HiOutlineXCircle color="red" />);
    expect(emailStatus.textContent).toBe("🔴");

    const passwordStatus = getByTestId("password-status");
    expect(passwordStatus.title).toBe("Campo obrigatório");
    // expect(passwordStatus.childNodes).toBe(<HiOutlineXCircle color="red" />);
    expect(passwordStatus.textContent).toBe("🔴");
  });
});
