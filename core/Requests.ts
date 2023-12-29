import { KnownErrorCode } from "./KnownError"

/* -------------------------------------------------------------------------- */
/*                                  Requests                                  */
/* -------------------------------------------------------------------------- */

export interface Request {
}


/* -------------------------------------------------------------------------- */
/*                                  Responses                                 */
/* -------------------------------------------------------------------------- */

export enum ResponseCode {
  Ok,
  Error
}

export interface Response {
}

interface ResponseWithStatus
  extends Response
{
  status: ResponseCode
}

export interface SucceededResponse<
  T extends Response
> extends ResponseWithStatus {
  status: ResponseCode.Ok
  data: T,
}

export interface FailedResponse
  extends ResponseWithStatus
{
  status: ResponseCode.Error
  errorCode: KnownErrorCode,
  errorMessage?: string
}

export type CompletedResponse<T extends Response> =
  SucceededResponse<T> | FailedResponse
