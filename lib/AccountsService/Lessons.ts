export interface Lesson {
  id: string
  courseId: string
  title: string
  description: string
}

// create

export interface CreateLessonRequest {
  name: string
  description?: string
  leaderId: string
  startsAt: number
}

export interface CreateLessonResponse {
}


// get one

export interface GetLessonResponse {
  name: string
  description?: string
  leaderId: string
  startsAt: number
}


// get all

export interface GeLessonsResponse {
  items: Lesson[]
}


// update

export interface UpdateLessonRequest {
  name?: string
  description?: string
  leaderId?: string
  startsAt?: number
}

export interface UpdateLessonResponse {
}
