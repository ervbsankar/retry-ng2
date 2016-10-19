import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/app-home.component";
import {BatchMonitorComponent} from "./batchMonitoring/batch-monitor.component";
import {WorkFlowComponent} from "./workflow/work-flow.component";


// Route configurations

export const routes: Routes = [

    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "batchMonitor", component: BatchMonitorComponent},
    {path: "workFlow", component: WorkFlowComponent}
];

//route function
export const appRoutingProviders: any[] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);