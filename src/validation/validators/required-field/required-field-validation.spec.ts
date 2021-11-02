import { RequiredFiedlError } from '@/validation/errors'
import { RequiredFieldValidation } from './required-field-validation'
import faker from 'faker'

const makeSut = (): RequiredFieldValidation =>
  new RequiredFieldValidation(faker.database.column())

describe('RequiredFiedlValidation', () => {
  test('Should return an error if the field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFiedlError())
  })

  test("Should return false if the field isn't empty", () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
