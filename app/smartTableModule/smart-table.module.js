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
const common_1 = require("@angular/common");
const smart_table_component_1 = require("./component/smart-table.component");
const smart_table_sorting_directive_1 = require("./directive/smart-table-sorting.directive");
const smart_table_filtering_directive_1 = require("./directive/smart-table-filtering.directive");
let SmartTableModule = class SmartTableModule {
};
SmartTableModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [smart_table_component_1.SmartTableComponent, smart_table_sorting_directive_1.SmartTableSortingDirective, smart_table_filtering_directive_1.NgTableFilteringDirective],
        exports: [smart_table_component_1.SmartTableComponent, smart_table_sorting_directive_1.SmartTableSortingDirective, smart_table_filtering_directive_1.NgTableFilteringDirective]
    }),
    __metadata("design:paramtypes", [])
], SmartTableModule);
exports.SmartTableModule = SmartTableModule;

//# sourceMappingURL=smart-table.module.js.map
