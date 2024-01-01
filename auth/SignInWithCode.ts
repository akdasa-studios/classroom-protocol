import { Request, Response } from '../core'


export interface SignInWithCodeRequest
  extends Request
{
  code: string
}

export interface SignInWithCodeResponse
  extends Response
{
  registrationRequired: boolean
}
