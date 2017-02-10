import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {
    ButtonsModule, AlertModule, Ng2BootstrapModule,
    TooltipModule, DropdownConfig
} from "ng2-bootstrap";
import {routing} from "./app.routes";
import {BatchMonitorComponent} from "./batchMonitoring/batch-monitor.component";
import {HttpModule} from "@angular/http";
import {FirstDirective} from "./directive/first.directive";
import {DellModule} from "./dellModule/dell.module";
import {SmartTableDirective} from "./directive/smart.table.directive";
import {SmartTableModule} from "./smartTableModule/smart-table.module";
import {HomeComponent} from "./home/home.component";
import {WorkFlowComponent} from "./workflow/work-flow.component";
import {RestApiService} from "./service/rest-api.service";
import {ShortStatusPipe} from "./pipe/short-status.pipe";
import {FuncAreaComponent} from "./batchMonitoring/func-area.component";
import {MaterialModule} from "@angular/material";


@NgModule({
    imports: [BrowserModule, Ng2BootstrapModule, ButtonsModule, AlertModule, routing, HttpModule, TooltipModule, DellModule, SmartTableModule,MaterialModule.forRoot()],
    declarations: [AppComponent, HomeComponent, BatchMonitorComponent, ShortStatusPipe, WorkFlowComponent, FirstDirective, SmartTableDirective,FuncAreaComponent],
    bootstrap: [AppComponent],
    providers: [RestApiService, DropdownConfig]
})


export class AppModule {
}