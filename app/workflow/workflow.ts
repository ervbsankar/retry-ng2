
import {Component} from "@angular/core";
@Component({
    selector: "workflow",
    templateUrl: "./app/workflow/workflow.html"
})

export class WorkFlowComponent {

    rowValues= ["Start","Stop", "pause","job"];
    colValues= ["query"];
    workflowArr=[];
    workflowColumnArr = [];

    getRow($event) {
        this.workflowArr.push({selected:false,id:1,event:$event});

        let firstRow = this.workflowArr[0];
        if(this.workflowColumnArr.length == 0) {
            for (var key in firstRow) {
                if (key == "selected") {
                    key = "#";
                }
                this.workflowColumnArr.push(key);
            }
        }
    }

    getCol($event)  {
        this.workflowColumnArr= [];
        console.log(this.workflowArr);
        this.workflowArr.forEach((obj) => {
            console.log(obj);
            if(obj.selected){
                obj.query = $event;
            }
        });
        console.log(this.workflowArr);
        let firstRow = this.workflowArr[0];
        for (var key in firstRow) {
            if (key == "selected") {
                key = "#";
            }
            this.workflowColumnArr.push(key);
        }
    }

}