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
/*
 This is first service extract login information from another server
 */
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
let RestApiService = class RestApiService {
    constructor(_http) {
        this._http = _http;
        this.arrayList = [{ id: 1, status: "IN_PROGRESS" }, { id: 2, status: "COMPLETED" }];
        this.mmisNoticeJobs = [{ "job": "14", "database": "14" }, { "job": "13", "database": "11" },
            { "job": "19", "database": "19" },
            { "job": "17", "database": "15" },
            { "job": "18", "database": "16" },
            { "job": "20", "database": null }];
        this.dellNoticeJobs = [{ "job": "11", "database": "10" },
            { "job": "21", "database": null }];
        this.mmisTransJobs = [{ "job": "9", "database": "8" },
            { "job": "10", "database": "9" }];
        this.dellTransJobs = [{ "job": "3", "database": "2" },
            { "job": "8", "database": "7" }];
        this.loginUrl = "http://localhost:8090/batchMonitor/rest/API";
    }
    getJobStatus(jobType, createdDate) {
        var restUrl = this.loginUrl + "/job/" + jobType + "/" + createdDate;
        return this._http.get(restUrl, { withCredentials: false })
            .map((res) => res.json() || {})
            .catch((error) => Rx_1.Observable.throw((error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error'));
    }
    getJobList(funcArea) {
        if (funcArea == "MMIS Notices") {
            return this.mmisNoticeJobs;
        }
        else if (funcArea == "Dell Notices") {
            return this.dellNoticeJobs;
        }
        else if (funcArea == "MMIS Trans") {
            return this.mmisTransJobs;
        }
        else if (funcArea == "Dell Trans") {
            return this.dellTransJobs;
        }
    }
    runTenSeconds() {
        return Rx_1.Observable.interval(10000)
            .take(5)
            .map(i => i * 2);
        //.do(i => console.log(i));
    }
    test() {
        return Rx_1.Observable.create((observer) => {
            observer.next(1);
            observer.next(2);
            setTimeout(() => {
                observer.next(3);
                observer.complete();
            }, 1000);
        });
    }
    repeatTest() {
        return Rx_1.Observable.interval(5000)
            .flatMap((x) => {
            return Rx_1.Observable.from(this.arrayList);
        });
        //Observable.from(this.arrayList);
    }
};
RestApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RestApiService);
exports.RestApiService = RestApiService;

//# sourceMappingURL=rest-api.service.js.map
