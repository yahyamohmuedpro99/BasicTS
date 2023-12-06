import { Formatter } from "../interfaces/formater.js";
export class Invoice implements Formatter {
    private timestamp: number;
    constructor(
      readonly client: string,
      private details: string,
      public amount: number
    ) {
      this.client = client;
      this.details = details;
      this.amount = amount;
      this.timestamp = Date.now();
    }
  
    format() {
      return `clien: ${this.client} get amount = ${this.amount} and the reason was ${this.details} with id ${this.timestamp}`;
    }
  }