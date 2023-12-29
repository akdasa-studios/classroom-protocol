import { KnownErrorCode } from "./KnownError"

export interface Error {
  code: KnownErrorCode,
  message?: string
}

export interface Request {
}

export interface Response {
  error?: Error
}
