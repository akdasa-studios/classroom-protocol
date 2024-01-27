export interface UserScheme {
  id: string
  name: string
  roles: UserRoleScheme[]
}

export interface UserRoleScheme {
  id: string
}
