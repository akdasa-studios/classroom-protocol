import { Request, Response } from '../core'

export interface GetSignInCodeByEmailRequest
  extends Request
{
  email: string
}

export interface GetSignInCodeByEmailResponse
  extends Response
{ }
