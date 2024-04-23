export interface Group {
  id: string
  name: string
  description?: string
  leaderId: string
  startsAt: number
}

// create

export interface CreateGroupRequest {
  name: string
  description?: string
  leaderId: string
  startsAt: number
}

export interface CreateGroupResponse {
}


// get one

export interface GetGroupResponse {
  id: string
  name: string
  description?: string
  leaderId: string
  startsAt: number
}


// get all

export interface GetGroupsResponse {
  items: Group[]
}


// update

export interface UpdateGroupRequest {
  name?: string
  description?: string
  leaderId?: string
  startsAt?: number
}

export interface UpdateGroupResponse {
}

