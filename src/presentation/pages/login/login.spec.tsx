import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Login from "./Login";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi";

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (): SutTypes => {
  const sut = render(<Login />);
  return {
    sut,
  };
};

describe("Login Component", () => {
  test("should start start with initial state", () => {
    const { sut } = makeSut();
    const errorWrap = sut.getByTestId("error-wrap");
    expect(errorWrap.childElementCount).toBe(0);

    const submitButton = sut.getByTestId("submitButton") as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);

    const emailStatus = sut.getByTestId("email-status");
    expect(emailStatus.title).toBe("Campo obrigatório");
    // expect(emailStatus.textContent).toBe(<HiOutlineXCircle color="red" />);
    expect(emailStatus.textContent).toBe("🔴");

    const passwordStatus = sut.getByTestId("password-status");
    expect(passwordStatus.title).toBe("Campo obrigatório");
    // expect(passwordStatus.childNodes).toBe(<HiOutlineXCircle color="red" />);
    expect(passwordStatus.textContent).toBe("🔴");
  });
});
