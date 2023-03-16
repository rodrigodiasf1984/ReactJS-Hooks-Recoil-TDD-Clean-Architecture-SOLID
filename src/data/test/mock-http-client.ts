import {
  HttpPostResponse,
  HttpStatusCode
} from '@/data/protocols/http/http-response'
import {
  HttpPostClient,
  HttpPostParams
} from '@/data/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpPostResponse = {
    statusCode: HttpStatusCode.ok
  }

  async post(params: HttpPostParams): Promise<HttpPostResponse> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
