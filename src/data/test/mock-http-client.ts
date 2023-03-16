import {
  HttpPostResponse,
  HttpStatusCode
} from '@/data/protocols/http/http-response'
import {
  HttpPostClient,
  HttpPostParams
} from '@/data/protocols/http/http-post-client'

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpPostResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post(params: HttpPostParams<T>): Promise<HttpPostResponse<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
