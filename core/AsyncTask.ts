import { KnownError, KnownErrorCode } from "./KnownError";
import { Request, Response } from './Requests'


export interface IAsyncTask<
  TRequest extends Request,
  TResponse extends Response
> {
  execute(request: TRequest): Promise<TResponse>
}

export abstract class AsyncTask<
  TRequest extends Request,
  TResponse extends Response
> {

  protected abstract onWork(
    request: TRequest
  ): Promise<TResponse>;

  async execute(
    request: TRequest
  ): Promise<TResponse> {
    try {
      return await this.onWork(request)
    } catch (error) {
      const errorDescription = {
        code: error instanceof KnownError ? error.code : KnownErrorCode.UnknownError,
        message: error as string
      }
      return {
        error: errorDescription
      } as TResponse
    }
  }
}
