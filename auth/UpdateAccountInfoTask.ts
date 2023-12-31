import { Request, Response, AsyncTask, KnownErrorCode, sleep, KnownError } from '../core'


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
    await sleep(1000)

    if (!request.name) {
      throw new KnownError(KnownErrorCode.InvalidValue, 'name')
    }

    if (!request.phoneNumber) {
      throw new KnownError(KnownErrorCode.InvalidValue, 'phoneNumber')
    }

    return { }
  }
}
