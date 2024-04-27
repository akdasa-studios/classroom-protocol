export interface Lesson {
  id: string
  course: string
  title: string
  description: string
}

// create

export interface CreateLessonRequest {
  course: string
  title: string
  description: string
}

export interface CreateLessonResponse {
}


// get one

export interface GetLessonResponse {
  id: string
  course: string
  title: string
  description: string
}


// get all

export interface GetLessonsResponse {
  items: Lesson[]
}


// update

export interface UpdateLessonRequest {
  title?: string
  description?: string
}

export interface UpdateLessonResponse {
}

