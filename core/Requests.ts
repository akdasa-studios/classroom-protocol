import { KnownErrors } from "./KnownErrors"

export interface Error {
  code: KnownErrors,
  message: string
}

export interface Request {
}

export interface Response {
  error?: Error
}
