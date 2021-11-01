import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Input from "./input";
import Context from "@/presentation/context/form/form-context";

const makeSut = (): RenderResult => {
  return render(
    <Context.Provider value={{ state: {} }}>
      <Input name="field" />
    </Context.Provider>
  );
};

describe("Input Component", () => {
  test("Shoul begin with readOnly", () => {
    const sut = makeSut();
    const input = sut.getByTestId("input") as HTMLInputElement;
    expect(input.readOnly).toBe(true);
  });
});
