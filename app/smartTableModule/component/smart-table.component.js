"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
let SmartTableComponent = class SmartTableComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.columns = [];
        this.rows = [];
        this._rows = [];
        this.tableChanged = new core_1.EventEmitter();
        this.cellClicked = new core_1.EventEmitter();
        this.config = {
            paging: true,
            filter: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-striped', 'table-bordered']
        };
    }
    ngOnInit() {
        this._rows = this.rows;
    }
    sanitize(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
    getData(row, propertyName) {
        return propertyName.split('.')
            .reduce((prev, curr) => prev[curr], row);
    }
    onChangeTable(column) {
        this.columns.forEach((col) => {
            if (col.name !== column.name && col.sort !== false) {
                col.sort = '';
            }
        });
        let sortedData = this.changeSort();
        this.rows = sortedData;
        this.tableChanged.emit(this.columns);
    }
    cellClick(row, column) {
        this.cellClicked.emit({ row, column });
    }
    onFilterChange(config, column) {
        console.log(config);
        console.log(column);
        this._rows = this.rows;
        this.columns.forEach(col => {
            if (col.filtering) {
                if (col.filtering.filterString)
                    this._rows = this.rows.filter((row) => {
                        return row[col.name].toLowerCase().indexOf(col.filtering.filterString.toLowerCase()) >= 0;
                    });
            }
        });
    }
    changeSort() {
        let sort = void 0;
        let columnName = void 0;
        this.columns.forEach((col) => {
            if (col.sort !== '' && col.sort !== false) {
                sort = col.sort;
                columnName = col.name;
            }
        });
        return this.rows.sort((previous, current) => {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    }
};
SmartTableComponent = __decorate([
    core_1.Component({
        selector: "smart-table",
        inputs: ["columns", "rows"],
        outputs: ["tableChanged", "cellClicked"],
        templateUrl: "./app/smartTableModule/component/smart-table.component.html"
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], SmartTableComponent);
exports.SmartTableComponent = SmartTableComponent;

//# sourceMappingURL=smart-table.component.js.map
