import { Request, Response } from '../core'


export interface UpdateAccountRequest
  extends Request
{
  name: string
  phoneNumber: string
}

export interface UpdateAccountResponse
  extends Response
{ }

