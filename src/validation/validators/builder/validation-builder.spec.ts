import {
  EmailValidation,
  RequiredFieldValidation,
  MinlengthValidation,
} from "@/validation/validators";
import { ValidationBuilder as sut } from "./validation-builder";
import faker from "faker";

describe("ValidaitonBuilder", () => {
  test("Should return RequiredFieldValidation", () => {
    const field = faker.database.column();
    const validations = sut.field(field).required().build();
    expect(validations).toEqual([new RequiredFieldValidation(field)]);
  });

  test("Should return EmailValidation", () => {
    const field = faker.database.column();
    const validations = sut.field(field).email().build();
    expect(validations).toEqual([new EmailValidation(field)]);
  });

  test("Should return MinValidation", () => {
    const field = faker.database.column();
    const length = faker.datatype.number();
    const validations = sut.field(field).min(length).build();
    expect(validations).toEqual([new MinlengthValidation(field, length)]);
  });

  test("Should return a list of validation", () => {
    const field = faker.database.column();
    const length = faker.datatype.number();
    const validations = sut.field(field).required().min(length).email().build();
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinlengthValidation(field, length),
      new EmailValidation(field),
    ]);
  });
});
