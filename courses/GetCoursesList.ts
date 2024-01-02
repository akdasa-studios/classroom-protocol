import { PaginatedRequest, PaginatedResponse } from '../core'


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
  title?: string
}

export interface GetCoursesListResponse
  extends PaginatedResponse<Course>
{
}
