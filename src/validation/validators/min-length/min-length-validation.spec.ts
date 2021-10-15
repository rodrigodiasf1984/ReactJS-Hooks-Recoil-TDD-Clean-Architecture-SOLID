import { InvalidFiedlError } from "@/validation/errors";
import { MinlengthValidation } from "./min-length-validation";

describe("MinlengthValidation", () => {
  test("Should return error if ", () => {
    const sut = new MinlengthValidation("fieldName", 5);
    const error = sut.validate("123");
    expect(error).toEqual(new InvalidFiedlError());
  });
});
