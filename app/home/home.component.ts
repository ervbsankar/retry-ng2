import {Component} from "@angular/core";


@Component({
    selector: "home",
    templateUrl: "./app/home/home.component.html"
})

export class HomeComponent {

    date: Date = new Date();
    products: String[];
    public childData: any;
    public columns: Array<any> = [
        {title: 'Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
        {title: 'Position', name: 'position', sort: false, filtering: {filterString: '', placeholder: 'Filter by position'}},
        {title: 'Office', className: ['text-success'], name: 'office', sort: 'asc'},
        {title: 'Extn.', name: 'ext', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
        {title: 'Start date', className: 'text-warning', name: 'startDate'},
        {title: 'Salary ($)', name: 'salary'}
    ];


    public rows: Array<any> = [
        {
            'name': 'Sankar',
            'position': 'Lead Developer',
            'office': 'UHG',
            'ext': '67890',
            'startDate': '28-DEC-2016',
            'salary': 120000
        },
        {
            'name': 'Soumya',
            'position': 'Developer',
            'office': 'Target',
            'ext': '61223',
            'startDate': '15-JAN-2017',
            'salary': 90000
        }
    ];

    public page: number = 1;
    public itemsPerPage: number = 10;
    public maxSize: number = 5;
    public numPages: number = 1;
    public length: number = 0;

    constructor() {
        this.products = ["paste", "brush"];
    }

    onOut(e) {
        console.log('Emitting event');
        console.log(e);
        this.childData = e.Sankar;
    }

    public onCellClick(data: any): any {
        console.log(data);
    }

// page: any = {page: this.page, itemsPerPage: this.itemsPerPage}
    public onChangeTable(columns: any): any {
        //console.log(columns);
    }

}