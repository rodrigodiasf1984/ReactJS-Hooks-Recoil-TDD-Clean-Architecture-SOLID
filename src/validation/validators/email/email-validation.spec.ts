import { InvalidFiedlError } from "@/validation/errors";
import { EmailValidation } from "./email-validation";
import faker from "faker";

describe("EmailValidation", () => {
  test("Should return error if the email is invalid", () => {
    const sut = new EmailValidation(faker.random.word());
    const error = sut.validate(faker.random.word());
    expect(error).toEqual(new InvalidFiedlError());
  });

  test("Should return false if the email is valid", () => {
    const sut = new EmailValidation(faker.random.word());
    const error = sut.validate(faker.internet.email());
    expect(error).toBeFalsy();
  });
});
