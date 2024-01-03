import { KnownErrorCode } from './KnownError'

/* -------------------------------------------------------------------------- */
/*                                  Requests                                  */
/* -------------------------------------------------------------------------- */

export interface Request {
}

export interface GetItemRequest extends Request {
  id: string
}

export interface GetItemsRequest extends Request {
  count: number
  offset: number
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

export interface GetItemResponse<
  TModel
> extends Response {
  item: TModel
}

export interface GetItemsResponse<
  TModel
> extends Response {
  total: number
  items: TModel[]
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

