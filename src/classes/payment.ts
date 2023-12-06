import { Formatter } from "../interfaces/formater.js"
export class Payment implements Formatter{
    constructor(
        readonly reciver:string,
        private details:string,
        public amount:number
    ){
        this.reciver=reciver
        this.amount=amount
        this.details=details

    }
    format(){
        return `the ${this.reciver} recive ${this.amount} $ for ${this.details}`
    }
}