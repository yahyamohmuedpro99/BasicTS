export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.timestamp = Date.now();
    }
    format() {
        return `clien: ${this.client} get amount = ${this.amount} and the reason was ${this.details} with id ${this.timestamp}`;
    }
}
