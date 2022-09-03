import { BACKEND_BASE_URL } from "./server"

export default {
  meEndpoint: '/auth/me',
  loginEndpoint: `jwt/login`, //`${BACKEND_BASE_URL}/auth/login`,
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  refreshTokenKeyName: 'refreshToken',
}
