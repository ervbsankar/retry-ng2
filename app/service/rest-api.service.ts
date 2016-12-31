/*
 This is first service extract login information from another server
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class RestApiService {

    arrayList = [{id: 1, status: "IN_PROGRESS"}, {id: 2, status: "COMPLETED"}];
    mmisNoticeJobs=[{"job": "14", "database": "14"},{"job": "13", "database": "11"},
        {"job": "19", "database": "19"},
        {"job": "17", "database": "15"},
        {"job": "18", "database": "16"},
        {"job": "20", "database": null}];

    dellNoticeJobs=[{"job": "11", "database": "10"},
        {"job": "21", "database": null}];

    mmisTransJobs=[{"job": "9", "database": "8"},
        {"job": "10", "database": "9"}];

    dellTransJobs=[{"job": "3", "database": "2"},
        {"job": "8", "database": "7"}];

    constructor(private _http: Http) {
    }

    private loginUrl = "http://localhost:8090/batchMonitor/rest/API";

    getJobStatus(jobType: string, createdDate: string): Observable<Array<Object>> {
        var restUrl = this.loginUrl + "/job/" + jobType + "/" + createdDate;
        return this._http.get(restUrl, {withCredentials: false})
            .map((res: Response) => res.json() || {})
            .catch((error: any) => Observable.throw((error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error'))
            ;
    }

    getJobList(funcArea: string) : any {
         if(funcArea == "MMIS Notices"){
             return this.mmisNoticeJobs;
         }else if(funcArea == "Dell Notices"){
             return this.dellNoticeJobs;
         }else if(funcArea == "MMIS Trans"){
             return this.mmisTransJobs;
         } else if(funcArea == "Dell Trans"){
             return this.dellTransJobs;
         }
    }

    runTenSeconds() {
        return Observable.interval(10000)
            .take(5)
            .map(i => i * 2)
            ;
        //.do(i => console.log(i));
    }

    test() {
        return Observable.create((observer) => {
            observer.next(1);
            observer.next(2);
            setTimeout(() => {
                observer.next(3);
                observer.complete();
            }, 1000)
        })
            ;
    }


    repeatTest() {
         return Observable.interval(5000)
             .flatMap((x) => {
                 return Observable.from(this.arrayList);
             });
        //Observable.from(this.arrayList);

    }

}