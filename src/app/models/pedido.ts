import { Produto } from "./produto";

export class Pedido {
    id!: number;
    time!: string; // Represented as a string for LocalTime
    day!: string; // Represented as a string for LocalDate
    payment!: string; // Represented as a string for Enum Payment
    status!: number; // Represented as a number for Enum Status
    description!: string;
    produtos!: Produto[];
}
