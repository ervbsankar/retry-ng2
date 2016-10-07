import {Component} from "@angular/core";


@Component({
    selector : "my-app",
    templateUrl: "./app/app.component.html",
    styles: [`
    .footer {
    margin-top: 80px;
}
.footer .footer-inner {
    padding: 40px 0;
    border-top: 1px solid #DDD;
}
`]
})

export class AppComponent {
}