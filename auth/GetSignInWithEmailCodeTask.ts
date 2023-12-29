import { AsyncTask, KnownError, KnownErrorCode, Request, Response, sleep } from '../core'

export interface GetSignInCodeRequest
  extends Request
{
  email: string
}

export interface GetSignInCodeResponse
  extends Response
{ }

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
      throw new KnownError(KnownErrorCode.InvalidEmail);
    }

    return {};
  }
}
