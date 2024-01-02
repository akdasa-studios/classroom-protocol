import { Request, Response } from '../core'


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
  isOpenToEnroll: boolean
}
