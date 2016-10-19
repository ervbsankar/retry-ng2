import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/app-home.component";
import {
    ButtonsModule, AlertModule, Ng2BootstrapModule,
    TooltipModule
} from "ng2-bootstrap";
import {routing} from "./app.routes";
import {BatchMonitorComponent} from "./batchMonitoring/batch-monitor.component";
import {RestApiService} from "./service/rest-api.service";
import {HttpModule} from "@angular/http";
import {FuncAreaComponent} from "./batchMonitoring/func-area.component";
import {ShortStatusPipe} from "./pipe/short-status.pipe";
import {WorkFlowComponent} from "./workflow/work-flow.component";



@NgModule({
    imports : [ BrowserModule, Ng2BootstrapModule, ButtonsModule, AlertModule, routing, HttpModule, TooltipModule ],
    declarations: [ AppComponent, HomeComponent, BatchMonitorComponent, FuncAreaComponent, ShortStatusPipe, WorkFlowComponent ],
    bootstrap : [AppComponent],
    providers: [RestApiService],
    exports: [ShortStatusPipe]
})

export class AppModule {
}