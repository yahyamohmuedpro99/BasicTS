import { Formatter } from "../interfaces/formater.js";

type renderType = {
  item: Formatter;
  heading: string;
  pos: "start" | "end";
};
export class ListTempleate {
  constructor(private container: HTMLUListElement) {}

  render(params: renderType) {
    //create li inside the container
    const li = document.createElement("li");

    const h4 = document.createElement("h4");
    h4.innerText = params.heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = params.item.format();
    li.append(p);
    if (params.pos == "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
