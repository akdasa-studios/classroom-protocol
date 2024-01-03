import { GetItemsRequest, GetItemsResponse } from '../core'
import { Course } from './Course'


export interface GetCoursesListRequest
  extends GetItemsRequest
{
  title?: string
}

export interface GetCoursesListResponse
  extends GetItemsResponse<Course>
{
}
