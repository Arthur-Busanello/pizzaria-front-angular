 import { Client } from "./client";
export class Adress {
    id!: number;
    cidade!: string;
    rua!: string;
    numero_rua!:number;
    client!: Client[];
    adress!: Adress[];
}


