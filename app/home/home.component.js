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
let HomeComponent = class HomeComponent {
    constructor() {
        this.date = new Date();
        this._columns = [];
        this.columns = [
            { title: 'Name', name: 'name', filtering: { filterString: '', placeholder: 'Filter by name' } },
            { title: 'Position', name: 'position', sort: false, filtering: { filterString: '', placeholder: 'Filter by position' } },
            { title: 'Office', className: ['text-success'], name: 'office', sort: 'asc' },
            { title: 'Extn.', name: 'ext', sort: '', filtering: { filterString: '', placeholder: 'Filter by extn.' } },
            { title: 'Start date', className: 'text-warning', name: 'startDate' },
            { title: 'Salary ($)', name: 'salary' }
        ];
        this.rows = [
            {
                'name': 'Sankar',
                'position': 'Lead Developer',
                'office': 'UHG',
                'ext': '67890',
                'startDate': '28-DEC-2016',
                'salary': 120000
            },
            {
                'name': 'Soumya',
                'position': 'Developer',
                'office': 'Target',
                'ext': '61223',
                'startDate': '15-JAN-2017',
                'salary': 90000
            }
        ];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.filteredColumns = this.columns;
        this.products = ["paste", "brush"];
    }
    ngOnInit() {
        this._columns = this.columns;
    }
    onOut(e) {
        console.log('Emitting event');
        console.log(e);
        this.childData = e.Sankar;
    }
    onCellClick(data) {
        console.log(data);
    }
    // trigger from check box
    onCheckboxChange(col) {
        this._columns = this.columns.filter(col => !col.hide);
        console.log(this._columns);
    }
    // page: any = {page: this.page, itemsPerPage: this.itemsPerPage}
    onChangeTable(columns) {
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "./app/home/home.component.html"
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=home.component.js.map
