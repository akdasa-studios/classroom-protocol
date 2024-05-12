export type AuthRequest = {
  email: string
  code?: string
}

export type AuthResponse = {
  accessToken: string
  refreshToken: string
}

export type RefreshTokenRequest = {
  refreshToken: string
}

export type RefreshTokenResponse = {
  accessToken: string
  refreshToken: string
}
