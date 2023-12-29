import { Request, Response, AsyncTask, KnownErrorCode, sleep } from '../core'


export interface UpdateAccountRequest
  extends Request
{
  name: string
  phoneNumber: string
}

export interface UpdateAccountResponse
  extends Response
{ }


export class UpdateAccountInfoTask
  extends AsyncTask<
    UpdateAccountRequest,
    UpdateAccountResponse
  >
{
  protected async onWork(
    request: UpdateAccountRequest
  ): Promise<UpdateAccountResponse> {
    await sleep(1000);

    if (!request.name) {
      return {
        error: {
          code: KnownErrorCode.UnknownError
        }
      }
    }

    if (!request.phoneNumber) {
      return {
        error: {
          code: KnownErrorCode.UnknownError
        }
      }
    }

    return { }
  }
}
