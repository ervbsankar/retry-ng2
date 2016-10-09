import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/app.home.component";
import {ButtonsModule, AlertModule, AlertComponent, Ng2BootstrapModule, CollapseDirective} from "ng2-bootstrap";
import {routing} from "./app.routes";
import {BatchMonitorComponent} from "./batchMonitoring/batch.monitoring";
import {LoginService} from "./service/login.service";
import {HttpModule} from "@angular/http";
import {MassComponent} from "./batchMonitoring/mmis.notices";

@NgModule({
    imports : [ BrowserModule, Ng2BootstrapModule, ButtonsModule, AlertModule, routing, HttpModule ],
    declarations: [ AppComponent, HomeComponent, BatchMonitorComponent, MassComponent ],
    bootstrap : [AppComponent],
    providers: [LoginService]
})

export class AppModule {
}