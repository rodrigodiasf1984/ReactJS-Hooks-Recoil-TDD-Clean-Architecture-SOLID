import { InvalidFiedlError } from "@/validation/errors";
import { EmailValidation } from "./email-validation";

describe("EmailValidation", () => {
  test("Should return error if the email is invalid", () => {
    const sut = new EmailValidation("email");
    const error = sut.validate("");
    expect(error).toEqual(new InvalidFiedlError());
  });
});
