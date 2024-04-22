export interface CreateRoleRequest {
  name: string
  description: string
  permissions: string[]
}

export interface CreateRoleResponse {
}

export interface Role {
  name: string
  description: string
  permissions: string[]
}

export interface GetRolesResponse {
  id: string
  items: Role[]
}

export interface GetRoleResponse {
  id: string
  name: string
  description: string
  permissions: string[]
}


export interface UpdateRoleRequest {
  name?: string
  description?: string
  permissions?: string[]
}

export interface UpdateRoleResponse {
}
