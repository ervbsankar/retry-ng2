/*
 This is first service extract login information from another server
*/
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class LoginService {

    arrayList = [{id: 1, status: "COMPLETED"},{id: 2, status:"COMPLETED"}];

    constructor(private _http: Http){
    }

    private loginUrl = "http://localhost:8080/batchMonitor/rest/sample/show";

    getLogin() : Observable<String> {
      return this._http.get(this.loginUrl,{withCredentials: false})
          .map((res: Response) => res.json() || {})
          .catch((error: any) => Observable.throw((error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error'));
    }

    runTenSeconds() {
        return Observable.interval(10000)
            .take(5)
            .map(i => i * 2)
            ;
            //.do(i => console.log(i));
    }

    test() {
        return Observable.create( (observer) => {
            observer.next(1);
            observer.next(2);
            setTimeout(() => {
                observer.next(3);
                observer.complete();
            },1000)
        })
        ;
    }


    repeatTest()  {
        return Observable.from(this.arrayList)
           // .repeat(2)
            ;
    }

}