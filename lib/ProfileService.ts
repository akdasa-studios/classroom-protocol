export type GetProfileResponse = {
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