import { RemoteAuthentication } from './remote-authentication'
import { HttpPostCLientSpy } from '@/data/test'
import { HttpStatusCode } from '@/data/protocols/http'
import { mockAccountModel, mockAuthentication } from '@/domain/test'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import faker from 'faker'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostCLientSpy: HttpPostCLientSpy<AuthenticationParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostCLientSpy = new HttpPostCLientSpy<
  AuthenticationParams,
  AccountModel
  >()
  const sut = new RemoteAuthentication(url, httpPostCLientSpy)
  return {
    sut,
    httpPostCLientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostCLientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostCLientSpy.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const { sut, httpPostCLientSpy } = makeSut()
    const AuthenticationParams = mockAuthentication()
    await sut.auth(AuthenticationParams)
    expect(httpPostCLientSpy.body).toEqual(AuthenticationParams)
  })

  test('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostCLientSpy } = makeSut()
    httpPostCLientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostCLientSpy } = makeSut()
    httpPostCLientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostCLientSpy } = makeSut()
    httpPostCLientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostCLientSpy } = makeSut()
    httpPostCLientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return an AccountModel if HttpPostClient returns 200', async () => {
    const { sut, httpPostCLientSpy } = makeSut()
    const httpResult = mockAccountModel()
    httpPostCLientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const account = await sut.auth(mockAuthentication())
    expect(account).toEqual(httpResult)
  })
})
