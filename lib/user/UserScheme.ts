// import type { UserStatus } from '@classroom/core/aggregates'

type OptionalFields<TScheme, K extends keyof TScheme> = Partial<Pick<TScheme, K>>
type RequiredFields<TScheme, K extends keyof TScheme> = Pick<TScheme, K>

export interface UserScheme {
  id: string
  name: string
  email: string,
  roles: string[]
  status: 'active' | 'inactive' | 'invited'
  title?: string
  department?: string
  avatarUrl?: string
}

export interface GetUserResponse extends UserScheme {
}

export interface GetUsersResponse {
  data: UserScheme[]
}

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */


export interface CreateUserRequest extends
  RequiredFields<UserScheme, 'name' | 'email' | 'roles'>,
  OptionalFields<UserScheme, 'title' | 'department'>
{
}

export interface CreateUserResponse {
  success: boolean
  message?: string
}



/* -------------------------------------------------------------------------- */
/*                                   Update                                   */
/* -------------------------------------------------------------------------- */

type UserUpdatableFields = 'name' | 'email' | 'roles' | 'status' | 'title' | 'department'

export interface UpdateUserRequest extends
  OptionalFields<UserScheme, UserUpdatableFields>
{
}

export interface UpdateUserResponse {
  success: boolean
  message?: string
}
