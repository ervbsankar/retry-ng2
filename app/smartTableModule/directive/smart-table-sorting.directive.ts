
import {Directive, EventEmitter, HostListener} from "@angular/core";
@Directive({
    selector: "[ngTableSorting]",
    inputs: ["ngTableSorting","column","config"],
    outputs: ["sortChanged"]

})

export class SmartTableSortingDirective {


   public ngTableSorting:any;
   public column:any;
   public sortChanged:EventEmitter<any> = new EventEmitter();

    public get config():any {
        return this.ngTableSorting;
    }

    @HostListener('click',['$event'])
    public onToggleSort(event: any):void {
        if(event){
            event.preventDefault();
        }

        if(this.ngTableSorting && this.column && this.column.sort !== false){
            switch(this.column.sort){
                case 'asc':
                    this.column.sort = 'desc';
                    break;
                case 'desc':
                    this.column.sort = '';
                    break;
                default:
                    this.column.sort= 'asc';
                    break;
            }

            this.sortChanged.emit(this.column);
        }
    }

}