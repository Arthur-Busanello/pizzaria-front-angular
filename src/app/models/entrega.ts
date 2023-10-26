import { Pedido } from "./pedido";

export class Entrega {
    id!: number;
    metodoEntrega!: number;
    DeliveryName!:string;
    ValueDelivery!:number;
    pedido!: Pedido[];
}
