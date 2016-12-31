import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "jobStatusTransform"})

export class ShortStatusPipe implements PipeTransform {

    transform(value: string, args: String): any {
        if(!value) return value;
         let words: string[] = value.split("_");
         let str: String = "";
         words.forEach((word) => {
            str += word.substr(0,1);
        });
        return str;
    }

}
