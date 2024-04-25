import { CreateRequest } from "../Requests"

export type EnrollmentStatus = 'new' | 'approved' | 'declined' | 'graduated'


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

export interface GetEnrollmentResponse 
  extends Enrollment {
}


// get all

export interface GetEnrollmentsResponse {
  items: Enrollment[]
}


// update

export interface UpdateEnrollmentRequest 
  extends Partial<Pick<Enrollment, 'groupId' | 'courseId' | 'status'>> {
}

export interface UpdateEnrollmentResponse {
}

