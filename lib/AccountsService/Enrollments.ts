export type EnrollmentStatus = 'new' | 'approved' | 'declined' | 'graduated'


export interface Enrollment {
  id: string
  userId: string
  groupId?: string
  courseId: string
  status: EnrollmentStatus
}

// create

export interface CreateEnrollmentRequest {
  groupId?: string
  courseId: string
}

export interface CreateEnrollmentResponse {
}


// get one

export interface GetEnrollmentResponse {
  id: string
  userId: string
  groupId?: string
  courseId: string
  status: EnrollmentStatus
}


// get all

export interface GetEnrollmentsResponse {
  items: Enrollment[]
}


// update

export interface UpdateEnrollementRequest {
 groupId?: string
 courseId?: string
}

export interface UpdateEnrollmentResponse {
}

