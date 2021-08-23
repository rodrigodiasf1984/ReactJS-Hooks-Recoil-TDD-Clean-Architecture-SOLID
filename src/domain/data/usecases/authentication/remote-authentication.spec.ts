import { HttpPostCLientSpy } from "../../test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";
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
    await sut.auth();
    expect(httpPostCLientSpy.url).toBe(url);
  });
});
