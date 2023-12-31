import { AsyncTask, KnownError, KnownErrorCode, Request, Response, sleep } from '../core'

export interface TimeBlock {
  startHours: number
  endHours: number
}

export interface SubmitEnrolmentFormRequest
  extends Request
{
  groupId: string
  comments: string
  timeBlocks: TimeBlock[]
}

export interface SubmitEnrolmentFormResponse
  extends Response
{
}

export class SubmitEnrolmentFormTask
  extends AsyncTask<
    SubmitEnrolmentFormRequest,
    SubmitEnrolmentFormResponse
  > {
  protected async onWork(
    request: SubmitEnrolmentFormRequest
  ): Promise<SubmitEnrolmentFormResponse> {
    await sleep(1000)

    if (!request.timeBlocks) {
      throw new KnownError(KnownErrorCode.UnknownError)
    }

    console.log(request)

    return { }
  }
}
