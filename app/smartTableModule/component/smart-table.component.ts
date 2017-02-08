import {Component, OnInit, EventEmitter} from "@angular/core";
import {SafeHtml, DomSanitizer} from "@angular/platform-browser";
@Component({
    selector: "smart-table",
    inputs: ["columns","rows"],
    outputs: ["tableChanged","cellClicked"],
    templateUrl: "./app/smartTableModule/component/smart-table.component.html"
})

export class SmartTableComponent implements OnInit {

    public columns: Array<any> = [];
    public rows: Array<any> = [];

    public _rows: Array<any> = [];

    public tableChanged:EventEmitter<any> = new EventEmitter();
    public cellClicked:EventEmitter<any> = new EventEmitter();

    public config: any = {
        paging: true,
        filter: true,
        sorting: {columns: this.columns},
        filtering: {filterString: ''},
        className: ['table-striped', 'table-bordered']
    };

    public constructor(private sanitizer: DomSanitizer) {
    }

    public ngOnInit(): void {
        this._rows = this.rows;
    }

    public sanitize(html: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }


    public getData(row:any, propertyName:string):string {
      return propertyName.split('.')
            .reduce((prev:any, curr:string) => prev[curr], row);
    }

    public onChangeTable(column:any):void {
        this.columns.forEach((col:any) => {
            if (col.name !== column.name && col.sort !== false) {
                col.sort = '';
            }
        });

        let sortedData = this.changeSort();
        this.rows = sortedData;
       this.tableChanged.emit(this.columns);
    }


    public cellClick(row:any, column:any):void {
        this.cellClicked.emit({row, column});
    }

    public onFilterChange(config: any, column: any) {
        this._rows = this.rows;

        this.columns.forEach(col => {
            if(col.filtering){
                if(col.filtering.filterString)
                this._rows = this.rows.filter((row: any) => {
                    return row[col.name].toLowerCase().indexOf(col.filtering.filterString.toLowerCase()) >= 0;
                });
            }
        });
    }

    public changeSort() : any{

        let sort:string = void 0;
        let columnName:string = void 0;

        this.columns.forEach((col:any) => {
            if (col.sort !== '' && col.sort !== false) {
                sort = col.sort;
                columnName = col.name;
            }
        });

        return this.rows.sort((previous: any, current: any) => {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            } else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        })

    }

}