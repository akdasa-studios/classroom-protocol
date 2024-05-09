import { CreateRequest } from "./Requests"

export type EnrollmentStatus = 'pending' | 'approved' | 'declined' | 'graduated'


export type Enrollment = {
  id: string
  applicantId: string
  groupId?: string
  courseId: string
  status: EnrollmentStatus
}

// create

export type CreateEnrollmentRequest = CreateRequest<Enrollment, 'groupId' | 'courseId'>;

export interface CreateEnrollmentResponse {
}


// get one

export interface GetEnrollmentResponse {
  id: string,
  applicant: { id: string, name: string, avatarUrl?: string }
  course:    { id: string, title: string }
  group?:    { id: string, name: string }
  status:    EnrollmentStatus
}


// get all

export interface GetEnrollmentsResponse {
  items: Array<{
    id: string
    status:    EnrollmentStatus
    applicant: { id: string, name: string, avatarUrl: string }
    group:     { id: string, name: string }
    course:    { id: string, title: string }
  }>
}


// update

export interface UpdateEnrollmentRequest
  extends Partial<Pick<Enrollment, 'groupId' | 'courseId' | 'status'>> {
}

export interface UpdateEnrollmentResponse {
}

