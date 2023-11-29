import { Sabor } from "./sabor";

export class Produto {
    id!: number;
    codigo!: string;
    preco!:number;
    tamanho!:string;
    extra!:string;
    remove!:string;
    sabor!: Sabor [];

    // constructor(id: number |undefined, codigo : string  |undefined, preco : number  | undefined, pizza : boolean, tamanho : string  |undefined, extra : string  |undefined, remove : string  |undefined){};

}
