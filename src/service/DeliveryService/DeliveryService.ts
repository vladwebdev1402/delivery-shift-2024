import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/shared/constants';

import {
  CalcDeliveryRequest,
  CalcDeliveryResponse,
  GetPackageTypesResponse,
  GetPointsResponse,
} from './types';

const DeliveryService = createApi({
  reducerPath: 'DeliveryService',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getPoints: build.query<GetPointsResponse, void>({
      query: () => ({ url: '/delivery/points' }),
    }),
    getPackageTypes: build.query<GetPackageTypesResponse, void>({
      query: () => ({ url: '/delivery/package/types' }),
    }),
    calcDelivery: build.mutation<CalcDeliveryResponse, CalcDeliveryRequest>({
      query: (delivery) => ({
        url: '/delivery/calc',
        method: 'POST',
        body: { ...delivery },
      }),
    }),
  }),
});

export { DeliveryService };

export const {
  useGetPointsQuery,
  useGetPackageTypesQuery,
  useCalcDeliveryMutation,
} = DeliveryService;
