import {Component, OnInit} from "@angular/core";
import {RestApiService} from "../service/rest-api.service";
import {Observable, Scheduler} from "rxjs/Rx";

@Component({
    selector: "product-list",
    templateUrl: "./app/batchMonitoring/batch-monitor.html"
})

export class BatchMonitorComponent implements OnInit {

    funcAreas=['MMIS Notices','Dell Notices','MMIS Trans','Dell Trans'];

    ngOnInit(): void {
        this.runMethod();
    }

    result: any;

    constructor(private loginService: RestApiService) {
    }

    runMethod() {
        this.loginService.runTenSeconds().subscribe(value => console.log("received: " + value));
    }

    test() {
        this.loginService.test().subscribe({
            next: x => console.log("test " + x),
            complete: () => console.log('done')
        });
    }

    getFuncArea(funcArea) {
        console.log(funcArea);

    }

    repeatTest(){
            //.filter( c => c.status == "COMPLETED");
        //observer.subscribeOn();
        let i = 0;
         let subscrip = this.loginService.repeatTest().subscribe(x => {
         console.log('repeat: ');
         console.log(x);
             i++;
             console.log(i);
             if(i > 5) {
                 subscrip.unsubscribe();
             }
         });

        let dispose = Scheduler.async;
        console.log(dispose.active);
    }
}
