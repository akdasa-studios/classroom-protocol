import { Request, Response } from '../core'

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
