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
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const app_home_component_1 = require("./home/app.home.component");
const ng2_bootstrap_1 = require("ng2-bootstrap");
const app_routes_1 = require("./app.routes");
const batch_monitoring_1 = require("./batchMonitoring/batch.monitoring");
const login_service_1 = require("./service/login.service");
const http_1 = require("@angular/http");
const mmis_notices_1 = require("./batchMonitoring/mmis.notices");
const jobstatus_pipe_1 = require("./pipe/jobstatus.pipe");
const workflow_1 = require("./workflow/workflow");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, ng2_bootstrap_1.Ng2BootstrapModule, ng2_bootstrap_1.ButtonsModule, ng2_bootstrap_1.AlertModule, app_routes_1.routing, http_1.HttpModule, ng2_bootstrap_1.TooltipModule],
        declarations: [app_component_1.AppComponent, app_home_component_1.HomeComponent, batch_monitoring_1.BatchMonitorComponent, mmis_notices_1.MassComponent, jobstatus_pipe_1.JobStatusPipe, workflow_1.WorkFlowComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [login_service_1.LoginService]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
