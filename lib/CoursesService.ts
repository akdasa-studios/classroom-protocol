export interface Course {
  id: string
  title: string
  subtitle: string
  description: string
  coverImageUrl: string
}

// create

export interface CreateCourseRequest {
  title: string,
  subtitle: string,
  description: string,
  coverImageUrl: string
}

export interface CreateCourseResponse {
}


// get one

export interface GetCourseResponse {
  id: string
  title: string,
  subtitle: string,
  description: string,
  coverImageUrl: string
}


// get all

export interface GetCoursesResponse {
  items: Course[]
}


// update

export interface UpdateCourseRequest {
  title?: string,
  subtitle?: string,
  description?: string,
  coverImageUrl?: string
}

export interface UpdateCourseResponse {
}
