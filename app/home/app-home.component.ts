import {Component, ChangeDetectionStrategy, EventEmitter, Output} from "@angular/core";
import {ButtonsModule} from "ng2-bootstrap";


@Component({
    selector: "home",
    template: ` Home Page
 
`
})

export class HomeComponent {

    date: Date = new Date();
    products: String[];

    constructor() {
        this.products = ["paste", "brush"];
    }

}