import { HttpPostClient } from "../../protocols/http/http-post-client";
import { RemoteAuthentication } from "./remote-authentication";

describe("RemoteAuthentication", () => {
  test("Should call HttpPostClient with correct URL", async () => {
    class HttpPostCLientSpy implements HttpPostClient {
      url?: string;
      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = "any_url";
    const httpPostCLientSpy = new HttpPostCLientSpy();
    const sut = new RemoteAuthentication(url, httpPostCLientSpy);
    await sut.auth();
    expect(httpPostCLientSpy.url).toBe(url);
  });
});
