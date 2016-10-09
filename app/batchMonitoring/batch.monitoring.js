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
const login_service_1 = require("../service/login.service");
let BatchMonitorComponent = class BatchMonitorComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.funcAreas = ['MMIS Notices', 'Dell Notices', 'MMIS trans'];
<<<<<<< HEAD
        this.x = 0;
=======
>>>>>>> c299d0fe1787500982cded4b2549acb8a35212bc
    }
    ngOnInit() {
        this.runMethod();
    }
    getLogin() {
        this.loginService.getLogin().subscribe(res => {
            this.result = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    runMethod() {
        this.loginService.runTenSeconds().subscribe(value => console.log("received: " + value));
    }
    test() {
        this.loginService.test().subscribe({
            next: x => console.log("test " + x),
            complete: () => console.log('done')
        });
    }
    getFuncArea(funcArea) {
        console.log(funcArea);
    }
<<<<<<< HEAD
    repeatTest() {
        this.loginService.repeatTest().
            takeWhile(c => c.status == "IN_PROGRESS");
        this.loginService.repeatTest().subscribe(x => {
            console.log('repeat: ');
            console.log(x);
        });
    }
=======
>>>>>>> c299d0fe1787500982cded4b2549acb8a35212bc
};
BatchMonitorComponent = __decorate([
    core_1.Component({
        selector: "product-list",
        templateUrl: "./app/batchMonitoring/batch.monitoring.html"
    }), 
    __metadata('design:paramtypes', [login_service_1.LoginService])
], BatchMonitorComponent);
exports.BatchMonitorComponent = BatchMonitorComponent;

//# sourceMappingURL=batch.monitoring.js.map
