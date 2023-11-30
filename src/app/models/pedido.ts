import { Produto } from "./produto";

export class Pedido {
    client: any;
    static time(time: any) {
      throw new Error('Method not implemented.');
    }
    id!: number;
    time!: string;
    day!: string;
    payment!: string;
    status!: string;
    description!: string;
    data!: string;
    produtos!: Produto[];
    constructor() {
        // Initialize time and day properties with current date and time
        const currentDate = new Date();
        this.time = currentDate.toLocaleTimeString(); // You can format the time as needed
        this.day = currentDate.toISOString().split('T')[0]; // Format the date as "YYYY-MM-DD"
      }

}
