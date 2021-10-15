import { InvalidFiedlError } from "@/validation/errors";
import { MinlengthValidation } from "./min-length-validation";

describe("MinlengthValidation", () => {
  test("Should return error if value is less then 5 characters ", () => {
    const sut = new MinlengthValidation("fieldName", 5);
    const error = sut.validate("123");
    expect(error).toEqual(new InvalidFiedlError());
  });

  test("Should return false if value is equal or greater then 5 characters", () => {
    const sut = new MinlengthValidation("fieldName", 5);
    const error = sut.validate("1234567");
    expect(error).toBeFalsy();
  });
});
