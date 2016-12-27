import {Component, ChangeDetectionStrategy, EventEmitter, Output} from "@angular/core";
import {ButtonsModule} from "ng2-bootstrap";


@Component({
    selector: "home",
    template: ` Home Page
     <div myFirst [store]="'Soumya'" (out)="onOut($event)">Toggle</div>
    {{childData}}
    <button class="btn btn-primary right" (click)="onOut($event)" >Click Me!</button>
`
})

export class HomeComponent {

    date: Date = new Date();
    products: String[];
    public childData: any;

    constructor() {
        this.products = ["paste", "brush"];
    }

    onOut(e) {
        console.log('Emitting event');
        console.log(e);
        this.childData = e.Sankar;
    }

    }