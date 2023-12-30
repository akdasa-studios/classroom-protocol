import { AsyncTask, PaginatedRequest, PaginatedResponse, sleep } from '../core'
import { courses } from '../fixtures'


export interface Course {
  id: string
  title: string
  subtitle: string
  description: string
  coverImageUrl: string

}

export interface GetCoursesListRequest
  extends PaginatedRequest
{
}

export interface GetCoursesListResponse
  extends PaginatedResponse<Course>
{
}

export class GetCoursesListTask
  extends AsyncTask<
    GetCoursesListRequest,
    GetCoursesListResponse
  > {
  protected async onWork(
    request: GetCoursesListRequest
  ): Promise<GetCoursesListResponse> {
    await sleep(1000)

    const items = courses.filter(
      (_, idx) => idx >= request.offset &&
                  idx <  request.offset + request.count)

    return {
      total: items.length,
      items: items
    }
  }
}
