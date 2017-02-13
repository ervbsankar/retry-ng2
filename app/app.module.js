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
const ng2_bootstrap_1 = require("ng2-bootstrap");
const app_routes_1 = require("./app.routes");
const batch_monitor_component_1 = require("./batchMonitoring/batch-monitor.component");
const http_1 = require("@angular/http");
const first_directive_1 = require("./directive/first.directive");
const dell_module_1 = require("./dellModule/dell.module");
const smart_table_directive_1 = require("./directive/smart.table.directive");
const smart_table_module_1 = require("./smartTableModule/smart-table.module");
const home_component_1 = require("./home/home.component");
const work_flow_component_1 = require("./workflow/work-flow.component");
const rest_api_service_1 = require("./service/rest-api.service");
const short_status_pipe_1 = require("./pipe/short-status.pipe");
const func_area_component_1 = require("./batchMonitoring/func-area.component");
const material_1 = require("@angular/material");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, ng2_bootstrap_1.Ng2BootstrapModule, ng2_bootstrap_1.ButtonsModule, ng2_bootstrap_1.AlertModule, app_routes_1.routing, http_1.HttpModule, ng2_bootstrap_1.TooltipModule, dell_module_1.DellModule, smart_table_module_1.SmartTableModule, material_1.MaterialModule.forRoot()],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, batch_monitor_component_1.BatchMonitorComponent, short_status_pipe_1.ShortStatusPipe, work_flow_component_1.WorkFlowComponent, first_directive_1.FirstDirective, smart_table_directive_1.SmartTableDirective, func_area_component_1.FuncAreaComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [rest_api_service_1.RestApiService, ng2_bootstrap_1.DropdownConfig]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
