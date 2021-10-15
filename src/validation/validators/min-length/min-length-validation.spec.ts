import { InvalidFiedlError } from "@/validation/errors";
import { MinlengthValidation } from "./min-length-validation";
import faker from "faker";

const makeSut = (): MinlengthValidation =>
  new MinlengthValidation(faker.database.column(), 5);

describe("MinlengthValidation", () => {
  test("Should return error if value is less then 5 characters ", () => {
    const sut = makeSut();
    const error = sut.validate(faker.random.alphaNumeric(4));
    expect(error).toEqual(new InvalidFiedlError());
  });

  test("Should return false if value is equal or greater then 5 characters", () => {
    const sut = makeSut();
    const error = sut.validate(faker.random.alphaNumeric(5));
    expect(error).toBeFalsy();
  });
});
