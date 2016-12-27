import {Directive, TemplateRef, ViewContainerRef, Input, OnInit, ElementRef, Output, EventEmitter} from "@angular/core";
@Directive({
    selector: "[myFirst]",
    inputs: ["store"],
    outputs: ["out"]
})

export class FirstDirective implements OnInit{

    constructor(private el: ElementRef){
        console.log('constructor');
        this.out = new EventEmitter<any>();
        setTimeout(() => console.log("Directive - Constructor" ),1000);
    }

    store: any;
    out: EventEmitter<any>;

    ngOnInit(){
        console.log(this.store);
        console.log(this.out);
        this.out.emit({'Sankar': 'Rock'});
    }


}
