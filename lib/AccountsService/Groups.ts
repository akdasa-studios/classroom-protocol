import { CreateRequest, CreateResponse } from "../Requests"
import { Enrollment } from "./Enrollments"

export type Group = {
  id: string
  name: string
  description?: string
  leaderId: string
  startsAt: number
}

// create

export type CreateGroupRequest = CreateRequest<
  Group, 'name' | 'description' | 'leaderId' | 'startsAt'
>

export type CreateGroupResponse = CreateResponse<Group, 'id'>


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

