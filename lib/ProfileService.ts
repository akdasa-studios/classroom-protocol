export type GetProfileResponse = {
  id: string,
  name: string
  permissions: string[]
}

export type UpdateProfileRequest = {
  name: string
  location: string
  phone: string
}

export type UpdateProfileResponse = {
}