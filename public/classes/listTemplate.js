export class ListTempleate {
    constructor(container) {
        this.container = container;
    }
    render(params) {
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
        }
        else {
            this.container.append(li);
        }
    }
}
