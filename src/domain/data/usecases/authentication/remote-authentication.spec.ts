import { HttpPostCLientSpy } from "../../test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";

describe("RemoteAuthentication", () => {
  test("Should call HttpPostClient with correct URL", async () => {
    const url = "any_url";
    const httpPostCLientSpy = new HttpPostCLientSpy();
    const sut = new RemoteAuthentication(url, httpPostCLientSpy);
    await sut.auth();
    expect(httpPostCLientSpy.url).toBe(url);
  });
});
