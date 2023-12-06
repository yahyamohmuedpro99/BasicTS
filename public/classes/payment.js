export class Payment {
    constructor(reciver, details, amount) {
        this.reciver = reciver;
        this.details = details;
        this.amount = amount;
        this.reciver = reciver;
        this.amount = amount;
        this.details = details;
    }
    format() {
        return `the ${this.reciver} recive ${this.amount} $ for ${this.details}`;
    }
}
