import {NgModule} from "@angular/core";
import {DellComponent} from "./dell.component";
import {DatepickerModule, Ng2BootstrapModule, DatepickerConfig} from "ng2-bootstrap";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "@angular/material";

@NgModule({
    imports: [Ng2BootstrapModule,DatepickerModule,CommonModule,MaterialModule.forRoot()],
    declarations: [DellComponent],
    providers: [DatepickerConfig]
})

export class DellModule{

    /*static forRoot(){
        return {
            ngModule: MaterialModule,
            providers: []
        }
    }*/
}