import { FieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFiedlError } from '@/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly fieldName: string) {}

  validate (fieldValue: string): Error {
    return fieldValue ? null : new RequiredFiedlError()
  }
}
