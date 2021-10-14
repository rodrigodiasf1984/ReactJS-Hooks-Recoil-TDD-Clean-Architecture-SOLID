import { RequiredFiedlError } from "@/validation/errors";
import { RequiredFieldValidation } from "./required-field-validation";
import faker from "faker";

describe("RequiredFiedlValidation", () => {
  test("Should return an error if the field is empty", () => {
    const sut = new RequiredFieldValidation("email");
    const error = sut.validate("");
    expect(error).toEqual(new RequiredFiedlError());
  });

  test("Should return false if the field isn't empty", () => {
    const sut = new RequiredFieldValidation("email");
    const error = sut.validate(faker.random.word());
    expect(error).toBeFalsy();
  });
});
