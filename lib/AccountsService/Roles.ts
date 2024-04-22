export interface CreateRoleRequest {
  name: string
  description: string
  permissions: string[]
}

export interface CreateRoleResponse {
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
