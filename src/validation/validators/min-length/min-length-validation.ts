import { InvalidFiedlError } from "@/validation/errors";
import { FieldValidation } from "@/validation/protocols/field-validation";

export class MinlengthValidation implements FieldValidation {
  constructor(readonly fieldName: string, private readonly minLength: number) {}
  validate(fieldValue: string): Error {
    return new InvalidFiedlError();
  }
}
