import {Directive, Input, HostListener, Output, EventEmitter} from "@angular/core";
@Directive({
    selector: '[ngTableFiltering]'
})

export class NgTableFilteringDirective {

    @Input() public ngTableFiltering:any = {
        filterString: '',
        columnName: 'name'
    };

    @Output() public tableChanged:EventEmitter<any> = new EventEmitter();

    @HostListener('input',['$event.target.value'])
    public filterColumn(event: any):void {
       this.ngTableFiltering.filterString = event;
       this.tableChanged.emit(this.ngTableFiltering);
    }
}

