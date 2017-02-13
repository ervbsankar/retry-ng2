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
let DellComponent = class DellComponent {
    constructor() {
        this.showStartDatePicker = false;
        this.showEndDatePicker = false;
    }
    toggleEndDatePicker() {
        this.showEndDatePicker = !this.showEndDatePicker;
        this.showStartDatePicker = false;
    }
};
DellComponent = __decorate([
    core_1.Component({
        selector: "dell-trans",
        templateUrl: "./app/dellModule/dell.component.html",
        styleUrls: ["./app/dellModule/dell.component.css"]
    }),
    __metadata("design:paramtypes", [])
], DellComponent);
exports.DellComponent = DellComponent;

//# sourceMappingURL=dell.component.js.map
