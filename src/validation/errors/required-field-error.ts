export class RequiredFiedlError extends Error {
  constructor() {
    super("Campo obrigatório");
    this.name = "RequiredFieldError";
  }
}