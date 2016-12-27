import {Component, Input, OnInit} from "@angular/core";
import {DatePipe} from "@angular/common";
import {LoginService} from "../service/login.service";
@Component({
    selector: "mmis-notices",
    templateUrl: "./app/batchMonitoring/mmis.notices.html",
    styleUrls: ["./app/batchMonitoring/batch.monitoring.css"]
})

export class MassComponent implements OnInit {
    ngOnInit(): void {
        localStorage.setItem("funcArea",this.funcArea);
        this.jobList = this.loginService.getJobList(this.funcArea);
        this.jobList.forEach((job) => {
            if(!(job.database == null)) this.getJobStatus(job.database);
        });
    }

    @Input('master') funcArea: string;
    private date: string;
    private result: Array<Object> = [];
    private result1: Array<Object>;
    private jobList=[];


    constructor(private loginService: LoginService){
        this.date = new DatePipe('en-US').transform(new Date,'dd-MMM-yy');
    }

    getJobStatus(job: string) {
    console.log(this.date);
    this.loginService.getJobStatus(job, this.date).subscribe(res => {
            this.result1 = res;
            this.result1.forEach(function (obj) {
                var date = new Date(obj['endTime']);
                console.log();
                date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
                console.log(date.toString());
                obj['endTime'] =  date.toString();
            });

        },
        err => {
            console.log(err)
        },
        () => {
            this.result.push.apply(this.result, this.result1);
        }
    );
}
}
