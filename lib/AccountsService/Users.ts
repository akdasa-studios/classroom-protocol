export interface User {
  id: string
  name: string
  email: string
  status: string
  roles: string[]
  title?: string
  department?: string
  avatarUrl?: string
}

// create

export interface CreateUserRequest {
  name: string
  email: string
  title?: string
  department?: string
  avatarUrl?: string
}

export interface CreateUserResponse {
}


// get one

export interface GetUserResponse {
  id: string
  name: string
  email: string
  status: string
  roles: string[]
  title?: string
  department?: string
  avatarUrl?: string
}


// get all

export interface GetUsersResponse {
  items: User[]
}


// update

export interface UpdateUserRequest {
  name: string
  email: string
  status: string
  roles: string[]
	title?: string
	department?: string
	avatarUrl?: string
}

export interface UpdateUserResponse {
}

