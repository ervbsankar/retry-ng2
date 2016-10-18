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
let WorkFlowComponent = class WorkFlowComponent {
    constructor() {
        this.rowValues = ["Start", "Stop", "pause", "job"];
        this.colValues = ["query"];
        this.workflowArr = [];
        this.workflowColumnArr = [];
    }
    getRow($event) {
        this.workflowArr.push({ selected: false, id: 1, event: $event });
        let firstRow = this.workflowArr[0];
        if (this.workflowColumnArr.length == 0) {
            for (var key in firstRow) {
                if (key == "selected") {
                    key = "#";
                }
                this.workflowColumnArr.push(key);
            }
        }
    }
    getCol($event) {
        this.workflowColumnArr = [];
        console.log(this.workflowArr);
        this.workflowArr.forEach((obj) => {
            console.log(obj);
            if (obj.selected) {
                obj.query = $event;
            }
        });
        console.log(this.workflowArr);
        let firstRow = this.workflowArr[0];
        for (var key in firstRow) {
            if (key == "selected") {
                key = "#";
            }
            this.workflowColumnArr.push(key);
        }
    }
};
WorkFlowComponent = __decorate([
    core_1.Component({
        selector: "workflow",
        templateUrl: "./app/workflow/workflow.html"
    }), 
    __metadata('design:paramtypes', [])
], WorkFlowComponent);
exports.WorkFlowComponent = WorkFlowComponent;

//# sourceMappingURL=workflow.js.map
