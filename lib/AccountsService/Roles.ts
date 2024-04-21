export interface CreateRoleRequest {
  name: string
  description: string
  permissions: string[]
}

export class CreateRoleResponse implements protocol.CreateRoleResponse {
}


export class GetRoleResponse implements protocol.GetRoleResponse {
}

