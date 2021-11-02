export class UnexpectedError extends Error {
  constructor () {
    super('Algo inesperado aconteceu. Tente novamente mais tarde')
    this.name = 'UnexpectedError'
  }
}
