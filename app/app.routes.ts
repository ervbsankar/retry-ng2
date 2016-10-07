import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/app.home.component";
import {BatchMonitorComponent} from "./batchMonitoring/batch.monitoring";


// Route configurations

export const routes: Routes = [

    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "batchMonitor", component: BatchMonitorComponent}
];

//route function
export const appRoutingProviders: any[] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);