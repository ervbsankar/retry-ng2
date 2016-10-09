import {Component, Input} from "@angular/core";
@Component({
    selector: "mmis-notices",
    templateUrl: "./app/batchMonitoring/mmis.notices.html"
})

export class MassComponent {

    mmisJobs=[{"job": "13", "database": "11"},
        {"job": "19", "database": "19"},
        {"job": "17", "database": "15"},
        {"job": "18", "database": "16"},
        {"job": "20", "database": "--"}];

    @Input('master') funcArea: String;
<<<<<<< HEAD
    private date;

    constructor(){
        this.date = new Date();
    }
=======
>>>>>>> c299d0fe1787500982cded4b2549acb8a35212bc


}
