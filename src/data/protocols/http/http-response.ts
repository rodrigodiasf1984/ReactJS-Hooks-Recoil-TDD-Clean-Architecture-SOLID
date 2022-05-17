export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  unauthorized = 401,
  notFound = 404,
  badRequest = 400,
  serverError = 500
}
export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
