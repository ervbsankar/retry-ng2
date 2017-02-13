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
let SmartTableSortingDirective = class SmartTableSortingDirective {
    constructor() {
        this.sortChanged = new core_1.EventEmitter();
    }
    get config() {
        return this.ngTableSorting;
    }
    onToggleSort(event) {
        if (event) {
            event.preventDefault();
        }
        if (this.ngTableSorting && this.column && this.column.sort !== false) {
            switch (this.column.sort) {
                case 'asc':
                    this.column.sort = 'desc';
                    break;
                case 'desc':
                    this.column.sort = '';
                    break;
                default:
                    this.column.sort = 'asc';
                    break;
            }
            this.sortChanged.emit(this.column);
        }
    }
};
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SmartTableSortingDirective.prototype, "onToggleSort", null);
SmartTableSortingDirective = __decorate([
    core_1.Directive({
        selector: "[ngTableSorting]",
        inputs: ["ngTableSorting", "column", "config"],
        outputs: ["sortChanged"]
    }),
    __metadata("design:paramtypes", [])
], SmartTableSortingDirective);
exports.SmartTableSortingDirective = SmartTableSortingDirective;

//# sourceMappingURL=smart-table-sorting.directive.js.map
