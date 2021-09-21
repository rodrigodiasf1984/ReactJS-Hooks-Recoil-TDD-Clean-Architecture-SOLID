import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";

describe("Login Component", () => {
  test("should start start with initial state", () => {
    const { getByTestId } = render(<Login />);
    const errorWrap = getByTestId("error-wrap");
    expect(errorWrap.childElementCount).toBe(0);

    const submitButton = getByTestId("submitButton") as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });
});
