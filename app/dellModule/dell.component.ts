import {Component} from "@angular/core";
@Component({
    selector: "dell-trans",
    templateUrl: "./app/dellModule/dell.component.html",
    styleUrls: ["./app/dellModule/dell.component.css"]
})
export class DellComponent{

    private showStartDatePicker: boolean = false;
    private showEndDatePicker: boolean = false;

    private toggleEndDatePicker() :void {
        this.showEndDatePicker = !this.showEndDatePicker;
        this.showStartDatePicker = false;
    }


}