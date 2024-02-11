import { Point, TPayer, User, Address } from '.';

export interface Order {
  _id: string;
  senderPoint: Point;
  senderAddress: Address;
  sender: User;
  receiverPoint: Point;
  receiverAddress: Address;
  receiver: User;
  payer: TPayer;
  status: number;
  cancellable: boolean;
}
