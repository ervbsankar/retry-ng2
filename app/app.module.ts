import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/app.home.component";
import {
    ButtonsModule, AlertModule, Ng2BootstrapModule,
    TooltipModule, DropdownConfig
} from "ng2-bootstrap";
import {routing} from "./app.routes";
import {BatchMonitorComponent} from "./batchMonitoring/batch.monitoring";
import {LoginService} from "./service/login.service";
import {HttpModule} from "@angular/http";
import {MassComponent} from "./batchMonitoring/mmis.notices";
import {JobStatusPipe} from "./pipe/jobstatus.pipe";
import {WorkFlowComponent} from "./workflow/workflow";
import {FirstDirective} from "./directive/first.directive";
import {DellModule} from "./dellModule/dell.module";


@NgModule({
    imports : [ BrowserModule, Ng2BootstrapModule, ButtonsModule, AlertModule, routing, HttpModule, TooltipModule, DellModule ],
    declarations: [ AppComponent, HomeComponent, BatchMonitorComponent, MassComponent, JobStatusPipe, WorkFlowComponent, FirstDirective ],
    bootstrap : [AppComponent],
    providers: [LoginService,DropdownConfig]
})

export class AppModule {
}