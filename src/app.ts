import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/payment.js";
import { Formatter } from "./interfaces/formater.js";
import {ListTempleate} from "./classes/listTemplate.js"
let invoices: Invoice[] = [];

const form = document.querySelector(".new-item-form");
const dType = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul:HTMLUListElement=document.querySelector(".item-list")!;
const li=new ListTempleate(ul)


form?.addEventListener("submit", (e: Event) => {
  let doc:Formatter
  
type renderType = {
  item: Formatter ;
  heading: string;
  pos: "start" | "end";
};
  e.preventDefault();
  if(dType.value==='invoice'){
    doc=new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  }else{
    doc=new Payment(toFrom.value, details.value, amount.valueAsNumber)

  }
  const data:renderType={
    item: doc,
    heading: dType.value,
    pos:'end'

  }

  // use the templete to append this 
  li.render(data)
});
