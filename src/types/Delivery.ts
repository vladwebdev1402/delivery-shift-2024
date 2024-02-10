
export type TDelivery = "DEFAULT" | "EXPRESS";

export interface Delivery {
    id: string;
    price: number;
    days: number;
    name: string;
    type: TDelivery;
}