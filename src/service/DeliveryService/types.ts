import { Address, Delivery, Order, Package, TPayer, User } from '@/types';
import { Point } from '@/types/Point';

export interface GetPointsResponse {
  success: boolean;
  reason: string;
  points: Point[];
}

export interface GetPackageTypesResponse {
  success: boolean;
  reason: string;
  packages: Package[];
}

export interface CalcDeliveryRequest {
  package: {
    length: number;
    width: number;
    weight: number;
    height: number;
  };
  senderPoint: {
    latitude: number;
    longitude: number;
  };
  receiverPoint: {
    latitude: number;
    longitude: number;
  };
}

export interface CalcDeliveryResponse {
  success: boolean;
  reason: string;
  options: Delivery[];
}

export interface CreateOrderRequest {
  senderPoint: Point,
  senderAddress: Address,
  sender: User,
  receiverPoint: Point,
  receiverAddress: Address,
  receiver: User,
  payer: TPayer,
  option: Delivery,
}

export interface CreateOrderResponse {
  success: boolean;
  reason: string;
  order: Order;
}
