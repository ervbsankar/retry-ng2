"use strict";
const router_1 = require("@angular/router");
const home_component_1 = require("./home/home.component");
const batch_monitoring_1 = require("./batchMonitoring/batch.monitoring");
const workflow_1 = require("./workflow/workflow");
const dell_component_1 = require("./dellModule/dell.component");
// Route configurations
exports.routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "batchMonitor", component: batch_monitoring_1.BatchMonitorComponent },
    { path: "workFlow", component: workflow_1.WorkFlowComponent },
    { path: "dellTrans", component: dell_component_1.DellComponent }
];
//route function
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);

//# sourceMappingURL=app.routes.js.map
