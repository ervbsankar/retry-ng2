"use strict";
const router_1 = require("@angular/router");
const app_home_component_1 = require("./home/app.home.component");
const batch_monitoring_1 = require("./batchMonitoring/batch.monitoring");
// Route configurations
exports.routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: app_home_component_1.HomeComponent },
    { path: "batchMonitor", component: batch_monitoring_1.BatchMonitorComponent }
];
//route function
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);

//# sourceMappingURL=app.routes.js.map
