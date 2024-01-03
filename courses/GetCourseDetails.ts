import { GetItemRequest, GetItemResponse } from '../core'
import { Course } from './Course'


export interface GetCourseDetailsRequest
  extends GetItemRequest
{
}

export interface GetCourseDetailsResponse
  extends GetItemResponse<Course>
{
}

