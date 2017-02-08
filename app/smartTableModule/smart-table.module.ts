import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartTableComponent} from "./component/smart-table.component";
import {SmartTableSortingDirective} from "./directive/smart-table-sorting.directive";
import {NgTableFilteringDirective} from "./directive/smart-table-filtering";

@NgModule({
    imports: [CommonModule],
    declarations: [SmartTableComponent,SmartTableSortingDirective,NgTableFilteringDirective],
    exports: [SmartTableComponent,SmartTableSortingDirective,NgTableFilteringDirective]
})

export class SmartTableModule {}
