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
const rest_api_service_1 = require("../service/rest-api.service");
let FuncAreaComponent = class FuncAreaComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.result = [];
        this.jobList = [];
        this.date = new common_1.DatePipe('en-US').transform(new Date, 'dd-MMM-yy');
    }
    ngOnInit() {
        localStorage.setItem("funcArea", this.funcArea);
        this.jobList = this.loginService.getJobList(this.funcArea);
        this.jobList.forEach((job) => {
            if (!(job.database == null))
                this.getJobStatus(job.database);
        });
    }
    getJobStatus(job) {
        console.log(this.date);
        this.loginService.getJobStatus(job, this.date).subscribe(res => {
            this.result1 = res;
            this.result1.forEach(function (obj) {
                var date = new Date(obj['endTime']);
                console.log();
                date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
                console.log(date.toString());
                obj['endTime'] = date.toString();
            });
        }, err => {
            console.log(err);
        }, () => {
            this.result.push.apply(this.result, this.result1);
        });
    }
};
__decorate([
    core_1.Input('master'),
    __metadata("design:type", String)
], FuncAreaComponent.prototype, "funcArea", void 0);
FuncAreaComponent = __decorate([
    core_1.Component({
        selector: "mmis-notices",
        templateUrl: "./app/batchMonitoring/func-area.html",
        styleUrls: ["./app/batchMonitoring/batch-monitor.css"]
    }),
    __metadata("design:paramtypes", [rest_api_service_1.RestApiService])
], FuncAreaComponent);
exports.FuncAreaComponent = FuncAreaComponent;

//# sourceMappingURL=func-area.component.js.map
