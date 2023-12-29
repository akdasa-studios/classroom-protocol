import { AsyncTask, KnownError, KnownErrorCode, Request, Response, sleep } from '../core'

export interface GetSignInCodeByEmailRequest
  extends Request
{
  email: string
}

export interface GetSignInCodeByEmailResponse
  extends Response
{ }

export class GetSignInCodeByEmailTask
  extends AsyncTask<
    GetSignInCodeByEmailRequest,
    GetSignInCodeByEmailResponse
  >
{
  protected async onWork(
    request: GetSignInCodeByEmailRequest
  ): Promise<GetSignInCodeByEmailResponse> {
    await sleep(1000);

    if (request.email != "test") {
      throw new KnownError(KnownErrorCode.InvalidEmail);
    }

    return { };
  }
}
