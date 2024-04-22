export interface Role {
  name: string
  description: string
  permissions: string[]
}

// create

export interface CreateRoleRequest {
  name: string
  description: string
  permissions: string[]
}

export interface CreateRoleResponse {
}


// get one

export interface GetRoleResponse {
  id: string
  name: string
  description: string
  permissions: string[]
}


// get all

export interface GetRolesResponse {
  items: Role[]
}


// update

export interface UpdateRoleRequest {
  name?: string
  description?: string
  permissions?: string[]
}

export interface UpdateRoleResponse {
}
