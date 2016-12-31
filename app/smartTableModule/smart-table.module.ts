import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartTableComponent} from "./component/smart-table.component";
import {SmartTableSortingDirective} from "./directive/smart-table-sorting.directive";
@NgModule({
    imports: [CommonModule],
    declarations: [SmartTableComponent,SmartTableSortingDirective],
    exports: [SmartTableComponent,SmartTableSortingDirective]
})

export class SmartTableModule{}
