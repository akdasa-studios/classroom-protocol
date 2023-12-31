/**
 * Represents a collection of known error codes.
 */
export enum KnownErrorCode {
  NoError = 'no.error',
  UnknownError = 'unknown',
  InvalidEmail = 'error-invalid-email',
  InvalidSignInCode = 'error-invalid-signin-code',
  InvalidValue = 'error-invalid-value'
}

/**
 * Represents a known error.
 */
export class KnownError extends Error {
  private _code: KnownErrorCode

  /**
   * Creates a new instance of the KnownError class.
   * @param code The known error code.
   * @param message An optional error message.
   */
  constructor(
    code: KnownErrorCode,
    message?: string
  ) {
    super(message)
    this._code = code
  }

  /**
   * Gets the error code.
   * @returns The error code.
   */
  public get code(): KnownErrorCode {
    return this._code
  }
}
