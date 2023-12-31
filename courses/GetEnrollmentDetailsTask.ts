import { AsyncTask, KnownError, KnownErrorCode, Request, Response, sleep } from '../core'
import { courses, groups } from '../fixtures'


export interface Group {
  id: string,
  courseId: string
  name: string
  couratorName: string
  couratorAvatarUrl: string
  startsAt: number
}

export interface GetEnrollmentDetailsRequest
  extends Request
{
  courseId: string
}

export interface GetEnrollmentDetailsResponse
  extends Response
{
  groups: Group[]
}

export class GetEnrollmentDetailsTask
  extends AsyncTask<
    GetEnrollmentDetailsRequest,
    GetEnrollmentDetailsResponse
  > {
  protected async onWork(
    request: GetEnrollmentDetailsRequest
  ): Promise<GetEnrollmentDetailsResponse> {
    await sleep(1000)

    const course = courses.find(x => x.id === request.courseId)
    if (!course) {
      throw new KnownError(KnownErrorCode.UnknownError)
    }

    const re = groups.filter(x => x.courseId === request.courseId)

    return {
      groups: re
    }
  }
}
