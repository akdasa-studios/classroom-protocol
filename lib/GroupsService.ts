import { CreateRequest, CreateResponse } from "./Requests"

export type Group = {
  id: string
  name: string
  description?: string
  leaderId: string
  courseId: string
  startsAt: number
}

// create

export type CreateGroupRequest = CreateRequest<
  Group, 'name' | 'description' | 'leaderId' | 'courseId' | 'startsAt'
>

export type CreateGroupResponse = CreateResponse<Group, 'id'>


// get one

export interface GetGroupResponse {
  id: string
  name: string
  description?: string
  leaderId: string
  courseId: string
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

