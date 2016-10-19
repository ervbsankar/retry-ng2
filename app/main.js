"use strict";
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app.module");
const core_1 = require("@angular/core");
const app_routes_1 = require("./app.routes");
core_1.enableProdMode();
const platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule, [app_routes_1.appRoutingProviders])
    .catch((err) => console.error(err));

//# sourceMappingURL=main.js.map
