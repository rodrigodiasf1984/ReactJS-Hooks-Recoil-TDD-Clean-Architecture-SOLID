export enum HttpStatusCode {
  unauthorized = 401,
  noContent = 204
}

export type HttpPostResponse = {
  statusCode: HttpStatusCode
  body?: any
}
