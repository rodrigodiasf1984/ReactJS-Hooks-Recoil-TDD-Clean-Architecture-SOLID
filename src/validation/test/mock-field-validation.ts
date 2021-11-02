import { FieldValidation } from '../protocols/field-validation'

export class FieldValidationSpy implements FieldValidation {
  error: Error = null;
  constructor (readonly fieldName: string) {}
  validate (fieldValue: string): Error {
    return this.error
  }
}
