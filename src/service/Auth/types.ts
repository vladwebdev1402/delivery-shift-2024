import { User } from '@/types';

export interface CreateOtpResponse {
  success: boolean;
  reason: string;
  retryDelay: number;
}

export interface SigninResponse {
  success: boolean;
  reason: string;
  user: User;
  token: string;
}

export interface SigninRequest{
  code: number;
  phone: string;
}

export interface GetSessionResponse {
  success: boolean;
  reason: string;
  user: User;
}

export interface UpdateProfileRequest {
  profile: User,
  phone: string;
}

export interface UpdateProfileResponse {
  success: boolean;
  reason: string;
  user: User;
}

