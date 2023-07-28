export default class GeneralError extends Error {
  readonly generalError: string

  constructor(message: string, generalError: string) {
    super(message)
    this.generalError = generalError
  }
}
