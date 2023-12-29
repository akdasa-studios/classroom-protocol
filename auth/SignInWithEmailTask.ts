import { AsyncTask, KnownError, KnownErrorCode, Request, Response, sleep } from '../core';


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

export class SignInWithEmailTask
  extends AsyncTask<
    SignInRequest, SignInResponse
  > {
  protected async onWork(
    request: SignInRequest
  ): Promise<SignInResponse> {
    await sleep(1000);

    if (request.code == "2345") {
      return { registrationRequired: true };
    }

    if (request.code != "1234") {
      throw new KnownError(KnownErrorCode.InvalidSignInCode);
    }

    return {
      registrationRequired: false
    };
  }
}
