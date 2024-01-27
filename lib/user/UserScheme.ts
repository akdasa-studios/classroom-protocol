import type { UserStatus } from '@classroom/core/aggregates'

export interface UserScheme {
  id: string
  name: string
  email: string,
  roles: UserRoleScheme[]
  status: UserStatus
  title?: string
  department?: string
  avatarUrl?: string
}

export interface UserRoleScheme {
  id: string
}
