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
let MassComponent = class MassComponent {
    constructor() {
        this.mmisJobs = [{ "job": "13", "database": "11" },
            { "job": "19", "database": "19" },
            { "job": "17", "database": "15" },
            { "job": "18", "database": "16" },
            { "job": "20", "database": "--" }];
    }
};
__decorate([
    core_1.Input('master'), 
    __metadata('design:type', String)
], MassComponent.prototype, "funcArea", void 0);
MassComponent = __decorate([
    core_1.Component({
        selector: "mmis-notices",
        templateUrl: "./app/batchMonitoring/mmis.notices.html"
    }), 
    __metadata('design:paramtypes', [])
], MassComponent);
exports.MassComponent = MassComponent;

//# sourceMappingURL=mmis.notices.js.map
