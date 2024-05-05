export type AuthRequest = {
  email: string
  code?: string
}

export type AuthResponse = {
  access_token: string
}

