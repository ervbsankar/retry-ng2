import {Component, OnInit} from "@angular/core";
import {LoginService} from "../service/login.service";
@Component({
    selector: "product-list",
    templateUrl: "./app/batchMonitoring/batch.monitoring.html"
})

export class BatchMonitorComponent implements OnInit {

    funcAreas=['MMIS Notices','Dell Notices','MMIS trans'];

<<<<<<< HEAD
    x = 0;

=======
>>>>>>> c299d0fe1787500982cded4b2549acb8a35212bc
    ngOnInit(): void {
        this.runMethod();
    }

    result: any;

    constructor(private loginService: LoginService) {
    }

    getLogin() {
        this.loginService.getLogin().subscribe(res => {
                this.result = res;
            console.log(res);
            },
            err => {
                console.log(err)
            });
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
<<<<<<< HEAD

    repeatTest(){
        this.loginService.repeatTest().
        takeWhile(c => c.status == "IN_PROGRESS");
        this.loginService.repeatTest().subscribe(x => {
            console.log('repeat: ');
            console.log(x);
        });
    }
=======
>>>>>>> c299d0fe1787500982cded4b2549acb8a35212bc
}
