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
const rest_api_service_1 = require("../service/rest-api.service");
const Rx_1 = require("rxjs/Rx");
let BatchMonitorComponent = class BatchMonitorComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.funcAreas = ['MMIS Notices', 'Dell Notices', 'MMIS Trans', 'Dell Trans'];
    }
    ngOnInit() {
        this.runMethod();
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
    repeatTest() {
        //.filter( c => c.status == "COMPLETED");
        //observer.subscribeOn();
        let i = 0;
        let subscrip = this.loginService.repeatTest().subscribe(x => {
            console.log('repeat: ');
            console.log(x);
            i++;
            console.log(i);
            if (i > 5) {
                subscrip.unsubscribe();
            }
        });
        let dispose = Rx_1.Scheduler.async;
        console.log(dispose.active);
    }
};
BatchMonitorComponent = __decorate([
    core_1.Component({
        selector: "product-list",
        templateUrl: "batch-monitor.html"
    }), 
    __metadata('design:paramtypes', [rest_api_service_1.RestApiService])
], BatchMonitorComponent);
exports.BatchMonitorComponent = BatchMonitorComponent;

//# sourceMappingURL=batch-monitor.component.js.map
