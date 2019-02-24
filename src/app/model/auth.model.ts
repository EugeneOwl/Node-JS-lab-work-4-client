export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  authorized: boolean;
  token: string;
  errorMessage: string;
}

export interface IsAuthorizedResponse {
  authorized: boolean;
}
