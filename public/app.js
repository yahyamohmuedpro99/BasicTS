import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTempleate } from "./classes/listTemplate.js";
let invoices = [];
const form = document.querySelector(".new-item-form");
const dType = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector(".item-list");
const li = new ListTempleate(ul);
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    let doc;
    e.preventDefault();
    if (dType.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    const data = {
        item: doc,
        heading: dType.value,
        pos: 'end'
    };
    // use the templete to append this 
    li.render(data);
});
