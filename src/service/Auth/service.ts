import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TokenService } from '@/shared/api';
import { API_URL } from '@/shared/constants';

import {
  CreateOtpResponse,
  GetSessionResponse,
  SigninRequest,
  SigninResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from './types';

export const AuthService = createApi({
  reducerPath: 'AuthService',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      headers.append('Authorization', `Bearer ${TokenService.getToken()}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    createOtp: build.query<CreateOtpResponse, string>({
      query: (phone) => ({
        url: '/auth/otp',
        method: 'POST',
        body: {
          phone,
        },
      }),
    }),
    signin: build.query<SigninResponse, SigninRequest>({
      query: (payload) => ({
        url: '/users/signin',
        method: 'POST',
        body: {
          ...payload,
        },
      }),
    }),
    getSession: build.query<GetSessionResponse, void>({
      query: () => ({
        url: '/users/session',
      }),
    }),
    updateProfile: build.mutation<UpdateProfileResponse, UpdateProfileRequest>({
      query: (payload) => ({
        url: '/users/profile',
        method: 'PATCH',
        body: { ...payload },
      }),
    }),
  }),
});

export const {
  useCreateOtpQuery,
  useLazyCreateOtpQuery,
  useLazySigninQuery,
  useLazyGetSessionQuery,
  useUpdateProfileMutation,
} = AuthService;
