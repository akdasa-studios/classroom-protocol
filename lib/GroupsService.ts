import type { CreateRequest, CreateResponse } from "./Requests"

export type Group = {
  id: string
  name: string
  description: string
  leaderId: string
  courseId: string
  startsAt: string
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
  description: string
  leaderId: string
  courseId: string
  startsAt: string
}


// get all

export interface GetGroupsResponse {
  items: Array<{
    id: string
    name: string
    description: string
    leader: { id: string, name: string, avatarUrl: string }
    course: { id: string, title: string }
    startsAt: string
  }>
}


// update

export interface UpdateGroupRequest {
  name?: string
  description?: string
  leaderId?: string
  courseId?: string
  startsAt?: string
}

export interface UpdateGroupResponse {
}

