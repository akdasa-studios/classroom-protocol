import { KnownError, KnownErrorCode } from './KnownError'
import { CompletedResponse, Request, Response, ResponseCode } from './Requests'



export interface ITask<
  TRequest extends Request,
  TResponse extends Response
> {
  execute(
    request: TRequest
  ): Promise<CompletedResponse<TResponse>>
}

export abstract class Task<
  TRequest extends Request,
  TResponse extends Response
> implements ITask<TRequest, TResponse> {

  protected abstract onWork(
    request: TRequest
  ): Promise<TResponse>;

  async execute(
    request: TRequest
  ): Promise<CompletedResponse<TResponse>> {
    try {
      return {
        status: ResponseCode.Ok,
        data: await this.onWork(request)
      }
    } catch (error) {
      return {
        status: ResponseCode.Error,
        errorCode: error instanceof KnownError ? error.code : KnownErrorCode.UnknownError,
        errorMessage: error as string
      }
    }
  }
}
