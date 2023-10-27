import { sabor } from "./sabor";
import { size } from "./size";

export class item {

    id!: number;
    codigo!: string;
    preco!:number;
    pizza!:boolean;
    tamanho!:size;
    extra!:string;
    remove!:string;
    sabor!: sabor [];

    constructor(id: number |undefined, codigo : string  |undefined, preco : number  | undefined, pizza : boolean, tamanho : size  |undefined, extra : string  |undefined, remove : string  |undefined){};


}


// private Long id;



// private String codigo;
// private Float preco;
// private Boolean pizza;

// @ManyToOne
// @JoinColumn(name = "tamanho_id")
// private Size tamanho;
// private String extra;
// private String remove;