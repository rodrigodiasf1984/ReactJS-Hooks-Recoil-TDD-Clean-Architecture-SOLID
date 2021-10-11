import React from "react";
import faker from "faker";
import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
} from "@testing-library/react";
import Login from "./Login";
import { AuthenticationSpy, ValidationStub } from "@/presentation/test";

type SutTypes = {
  sut: RenderResult;
  authenticationSpy: AuthenticationSpy;
};

type SutParams = {
  validationError: string;
};

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub();
  const authenticationSpy = new AuthenticationSpy();
  validationStub.errorMessage = params?.validationError;
  const sut = render(
    <Login validation={validationStub} authentication={authenticationSpy} />
  );
  return {
    sut,
    authenticationSpy,
  };
};

const populatedEmailField = (
  sut: RenderResult,
  email = faker.internet.email()
): void => {
  const emailInput = sut.getByTestId("email");
  fireEvent.input(emailInput, {
    target: { value: email },
  });
};

const populatedPasswordField = (
  sut: RenderResult,
  password = faker.internet.password()
): void => {
  const passwordInput = sut.getByTestId("password");
  fireEvent.input(passwordInput, {
    target: { value: password },
  });
};

const simulateValidSubmit = (
  sut: RenderResult,
  email = faker.internet.email(),
  password = faker.internet.password()
): void => {
  populatedEmailField(sut, email);
  populatedPasswordField(sut, password);
  const submitButton = sut.getByTestId("submitButton");
  fireEvent.submit(submitButton);
};

const simulateStatusForField = (
  sut: RenderResult,
  fieldName: string,
  validationError?: string
): void => {
  const emailStatus = sut.getByTestId(`${fieldName}-status`);
  expect(emailStatus.title).toBe(validationError || "Tudo certo!");
  expect(emailStatus.textContent).toBe(validationError ? "🔴" : "🟢");
};

describe("Login Component", () => {
  afterEach(cleanup);

  test("should start start with initial state", () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    const errorWrap = sut.getByTestId("error-wrap");
    expect(errorWrap.childElementCount).toBe(0);

    const submitButton = sut.getByTestId("submitButton") as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
    simulateStatusForField(sut, "email", validationError);
    simulateStatusForField(sut, "password", validationError);
  });

  test("should show email error if Validation fails", () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    populatedEmailField(sut);
    simulateStatusForField(sut, "email", validationError);
  });

  test("should show password error if Validation fails", () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    populatedPasswordField(sut);
    simulateStatusForField(sut, "password", validationError);
  });

  test("should show the valid  email state if Validation succeeds", () => {
    const { sut } = makeSut();
    populatedEmailField(sut);
    simulateStatusForField(sut, "email");
  });

  test("should show the valid password state Validation succeeds", () => {
    const { sut } = makeSut();
    populatedPasswordField(sut);
    simulateStatusForField(sut, "password");
  });

  test("should enabled submit button if the form is valid", () => {
    const { sut } = makeSut();
    populatedEmailField(sut);
    populatedPasswordField(sut);
    const submitButton = sut.getByTestId("submitButton") as HTMLButtonElement;
    expect(submitButton.disabled).toBe(false);
  });

  test("should show loading spinner on submit", () => {
    const { sut } = makeSut();
    simulateValidSubmit(sut);
    const spinner = sut.getByTestId("spinner");
    expect(spinner).toBeTruthy();
  });

  test("should calls Authentication with correct values", () => {
    const { sut, authenticationSpy } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();
    simulateValidSubmit(sut, email, password);
    expect(authenticationSpy.params).toEqual({
      email,
      password,
    });
  });

  test("should calls Authentication once", () => {
    const { sut, authenticationSpy } = makeSut();
    simulateValidSubmit(sut);
    simulateValidSubmit(sut);
    expect(authenticationSpy.callsCount).toBe(1);
  });
});
