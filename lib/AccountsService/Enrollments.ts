export type EnrollmentStatus = 'not-submitted' | 'pending' | 'in-review' | 'approved' | 'declined' | 'graduated'


export interface Enrollment {
  id: string
  userId: string
  groupId?: string
  courseId: string
  status: EnrollmentStatus
}

// create

export interface CreateEnrollmentRequest {
  userId: string
  groupId?: string
  courseId: string
  status: EnrollmentStatus
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

export interface GetEnrollmentResponse {
  items: Enrollment[]
}


// update

export interface UpdateEnrollementRequest {
 groupId?: string
 courseId?: string
 status?: EnrollmentStatus
}

export interface UpdateEnrollmentResponse {
}

