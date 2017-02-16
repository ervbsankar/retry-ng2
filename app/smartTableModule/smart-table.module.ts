import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartTableComponent} from "./component/smart-table.component";
import {SmartTableSortingDirective} from "./directive/smart-table-sorting.directive";
import {NgTableFilteringDirective} from "./directive/smart-table-filtering.directive";
import {Ng2BootstrapModule, PaginationModule} from "ng2-bootstrap";
import {MaterialModule} from "@angular/material";

@NgModule({
    imports: [CommonModule,Ng2BootstrapModule,PaginationModule.forRoot(), MaterialModule.forRoot()],
    declarations: [SmartTableComponent,SmartTableSortingDirective,NgTableFilteringDirective],
    exports: [SmartTableComponent,SmartTableSortingDirective,NgTableFilteringDirective]
})

export class SmartTableModule {}
