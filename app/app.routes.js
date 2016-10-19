"use strict";
const router_1 = require("@angular/router");
const app_home_component_1 = require("./home/app-home.component");
const batch_monitor_component_1 = require("./batchMonitoring/batch-monitor.component");
const work_flow_component_1 = require("./workflow/work-flow.component");
// Route configurations
exports.routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: app_home_component_1.HomeComponent },
    { path: "batchMonitor", component: batch_monitor_component_1.BatchMonitorComponent },
    { path: "workFlow", component: work_flow_component_1.WorkFlowComponent }
];
//route function
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);

//# sourceMappingURL=app.routes.js.map
