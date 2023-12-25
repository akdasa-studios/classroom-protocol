import { KnownError } from "./KnownError";
import { KnownErrors } from "./KnownErrors";
import { Request, Response } from './Requests'
import { Error } from './Requests'

export interface AsyncTaskState {
  isInProgress: boolean,
  error?: Error
  progress?: number
}

export type AsyncTaskStateChanged = (a: AsyncTaskState) => void

export interface AsyncTaskOptions {
  stateChanged?: AsyncTaskStateChanged
}

export abstract class AsyncTask<
  TRequest extends Request,
  TResponse extends Response
> {
  private _stateChanged?: AsyncTaskStateChanged;

  constructor(
    options?: AsyncTaskOptions
  ) {
    this._stateChanged = options?.stateChanged
  }

  protected abstract onWork(
    request: TRequest
  ): Promise<TResponse>;

  public subscribeStateChanged(callback: AsyncTaskStateChanged) {
    this._stateChanged = callback
  }

  async execute(
    request: TRequest
  ): Promise<TResponse> {
    try {
      // Notify that task is stared
      if (this._stateChanged) {
        this._stateChanged({ isInProgress: true })
      }

      const result = await this.onWork(request)

      // Notify
      if (this._stateChanged) {
        this._stateChanged({ isInProgress: false })
      }

      return result
    } catch (error) {
      const errorDescription = {
        code: error instanceof KnownError ? error.code : KnownErrors.UnknownError,
        message: error as string
      }

      // Notify that task is stared
      if (this._stateChanged) {
        this._stateChanged({
          isInProgress: false,
          error: errorDescription
        })
      }

      return {
        error: errorDescription
      } as TResponse
    }
  }
}
