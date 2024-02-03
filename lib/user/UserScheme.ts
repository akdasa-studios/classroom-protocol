// import type { UserStatus } from '@classroom/core/aggregates'

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


export interface UpdateUserRequest
  extends Partial<Pick<UserScheme, 'name' | 'email' | 'roles' | 'status' | 'title' | 'department'>> {
}

export interface UpdateUserResponse {
  success: boolean
  message?: string
}
