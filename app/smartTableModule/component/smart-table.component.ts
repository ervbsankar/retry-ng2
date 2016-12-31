import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {SafeHtml, DomSanitizer} from "@angular/platform-browser";
@Component({
    selector: "smart-table",
    inputs: ["columns","rows"],
    templateUrl: "./app/smartTableModule/component/smart-table.component.html"
})

export class SmartTableComponent implements OnInit {

    public columns: Array<any> = [];
    public rows: Array<any> = [];

    private _columns:Array<any> = [];
    @Output() public tableChanged:EventEmitter<any> = new EventEmitter();
    @Output() public cellClicked:EventEmitter<any> = new EventEmitter();

    public config: any = {
        paging: true,
        sorting: {columns: this.columns},
        filtering: {filterString: ''},
        className: ['table-striped', 'table-bordered']
    };

    public constructor(private sanitizer: DomSanitizer) {
    }

    public ngOnInit(): void {
    }

    public sanitize(html: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }


    public getData(row:any, propertyName:string):string {
      return propertyName.split('.')
            .reduce((prev:any, curr:string) => prev[curr], row);
    }

    public onChangeTable(column:any):void {
        this._columns.forEach((col:any) => {
            if (col.name !== column.name && col.sort !== false) {
                col.sort = '';
            }
        });
        this.tableChanged.emit({sorting: this.configColumns});
    }

    public get configColumns():any {
        let sortColumns:Array<any> = [];

        this.columns.forEach((column:any) => {
            if (column.sort) {
                sortColumns.push(column);
            }
        });
        return {columns: sortColumns};
    }

    public cellClick(row:any, column:any):void {
        this.cellClicked.emit({row, column});
    }

    }