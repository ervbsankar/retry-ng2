import {Directive, OnInit, ElementRef, Renderer, AfterViewInit} from "@angular/core";
@Directive({
    selector: "[smartTable]",
    inputs: ["columns"]
})

export class SmartTableDirective implements OnInit, AfterViewInit{

    columns: any;

    constructor(private _el: ElementRef, private _renderer: Renderer ){}

    ngOnInit(): void {
        this.columns.forEach(obj => {
            console.log(obj["columnName"]);
            console.log(obj["sorting"]);
            console.log(obj["filter"]);
        });
    }

    ngAfterViewInit(): void {
        this._renderer.createElement(this._el.nativeElement,"table");
    }


}