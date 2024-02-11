import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TokenService } from '@/shared/api';
import { API_URL } from '@/shared/constants';

import {
  CalcDeliveryRequest,
  CalcDeliveryResponse,
  CreateOrderRequest,
  CreateOrderResponse,
  GetOrdersResponse,
  GetPackageTypesResponse,
  GetPointsResponse,
} from './types';

const DeliveryService = createApi({
  reducerPath: 'DeliveryService',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders(headers) {
      headers.append('Authorization', `Bearer ${TokenService.getToken()}`);
    },
  }),
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
    getOrders: build.query<GetOrdersResponse, void>({
      query: () => '/delivery/orders',
    }),
    createOrder: build.mutation<CreateOrderResponse, CreateOrderRequest>({
      query: (order) => ({
        url: '/delivery/order',
        method: 'POST',
        body: { ...order },
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            DeliveryService.util.updateQueryData(
              'getOrders',
              undefined,
              (draft) => {
                draft.orders.push(data.order);
              }
            )
          );
        } catch {}
      },
    }),
  }),
});

export { DeliveryService };

export const {
  useGetPointsQuery,
  useGetPackageTypesQuery,
  useCalcDeliveryMutation,
  useCreateOrderMutation,
  useGetOrdersQuery,
} = DeliveryService;
