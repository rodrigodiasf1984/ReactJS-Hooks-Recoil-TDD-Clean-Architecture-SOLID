import { HttpPostCLientSpy } from "../../test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";
import { mockAuthentication } from "../../../../domain/test/mock-authentication";
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
});
