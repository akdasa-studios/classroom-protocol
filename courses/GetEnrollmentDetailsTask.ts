import { Request, Response } from '../core'


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
