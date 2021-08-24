import { RemoteAuthentication } from "./remote-authentication";
import { HttpPostCLientSpy } from "@/data/test/mock-http-client";
import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { mockAuthentication } from "@/domain/test/mock-authentication";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credetials-error";
import faker from "faker";

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostCLientSpy: HttpPostCLientSpy;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostCLientSpy = new HttpPostCLientSpy();
  const sut = new RemoteAuthentication(url, httpPostCLientSpy);
  return {
    sut,
    httpPostCLientSpy,
  };
};

describe("RemoteAuthentication", () => {
  test("Should call HttpPostClient with correct URL", async () => {
    const url = faker.internet.url();
    const { sut, httpPostCLientSpy } = makeSut(url);
    await sut.auth(mockAuthentication());
    expect(httpPostCLientSpy.url).toBe(url);
  });

  test("Should call HttpPostClient with correct body", async () => {
    const { sut, httpPostCLientSpy } = makeSut();
    const AuthenticationParams = mockAuthentication();
    await sut.auth(AuthenticationParams);
    expect(httpPostCLientSpy.body).toEqual(AuthenticationParams);
  });

  test("Should throw InvalidCredentialsError if HttpPostClient returns 401", async () => {
    const { sut, httpPostCLientSpy } = makeSut();
    httpPostCLientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });
});
