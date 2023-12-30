import { AsyncTask, KnownError, KnownErrorCode, Request, Response, sleep } from '../core'
import { courses, loremIpsum } from '../fixtures'


export interface GetCourseDetailsRequest
  extends Request
{
  id: string
}

export interface GetCourseDetailsResponse
  extends Response
{
  title: string
  description: string
  coverImageUrl: string
}

export class GetCourseDetailsTaskTask
  extends AsyncTask<
    GetCourseDetailsRequest,
    GetCourseDetailsResponse
  > {
  protected async onWork(
    request: GetCourseDetailsRequest
  ): Promise<GetCourseDetailsResponse> {
    await sleep(1000)

    const course = courses.find(x => x.id === request.id)
    if (!course) {
      throw new KnownError(KnownErrorCode.UnknownError)
    }

    return {
      title: course.title,
      description: course.description + loremIpsum + loremIpsum + loremIpsum,
      coverImageUrl: course.coverImageUrl
    }
  }
}
