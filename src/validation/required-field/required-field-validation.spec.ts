import { RequiredFiedlError } from "@/validation/errors";
import { RequiredFieldValidation } from "./required-field-validation";

describe("RequiredFiedlValidation", () => {
  test("Should return an error if the field is empty", () => {
    const sut = new RequiredFieldValidation("email");
    const error = sut.validate("");
    expect(error).toEqual(new RequiredFiedlError());
  });
});
