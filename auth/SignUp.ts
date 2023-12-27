import { Request, Response } from '../core/Requests'
import { AsyncTask } from '../core/AsyncTask'
import { KnownErrors } from '../core/KnownErrors'

export interface UpdateAccountRequest
  extends Request
{
  name: string
  phoneNumber: string
}

export interface UpdateAccountResponse
  extends Response
{ }

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));


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
          code: KnownErrors.UnknownError
        }
      }
    }

    if (!request.phoneNumber) {
      return {
        error: {
          code: KnownErrors.UnknownError
        }
      }
    }

    return { }
  }
}
