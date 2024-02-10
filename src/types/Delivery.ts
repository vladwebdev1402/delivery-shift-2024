export type TDelivery = 'DEFAULT' | 'EXPRESS';
export type TPayer = 'RECEIVER' | 'SENDER ';

export interface Delivery {
  id: string;
  price: number;
  days: number;
  name: string;
  type: TDelivery;
}
