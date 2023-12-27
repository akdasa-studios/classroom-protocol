import { Request, Response } from '../core/Requests'
import { AsyncTask } from '../core/AsyncTask'
import { KnownError } from '../core/KnownError'
import { KnownErrors } from '../core/KnownErrors'

export interface GetSignInCodeRequest
  extends Request
{
  email: string
}

export interface GetSignInCodeResponse
  extends Response
{ }

export interface SignInRequest
  extends Request
{
  code: string
}

export interface SignInResponse
  extends Response
{
  registrationRequired: boolean
}


const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));


export class GetSignInWithEmailCodeTask
  extends AsyncTask<
    GetSignInCodeRequest,
    GetSignInCodeResponse
  >
{
  protected async onWork(
    request: GetSignInCodeRequest
  ): Promise<GetSignInCodeResponse> {
    await sleep(1000);

    if (request.email != "test") {
      throw new KnownError(KnownErrors.InvalidEmail)
    }

    return { }
  }
}

export class SignInWithEmailTask
  extends AsyncTask<
    SignInRequest,
    SignInResponse
  > {
  protected async onWork(
    request: SignInRequest
  ): Promise<SignInResponse> {
    await sleep(1000);

    if (request.code == "2345") {
      return { registrationRequired: true }
    }

    if (request.code != "1234") {
      throw new KnownError(KnownErrors.InvalidSignInCode)
    }

    return {
      registrationRequired: false
    }
  }
}
