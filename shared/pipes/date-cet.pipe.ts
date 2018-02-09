import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'dateCet'
})
export class DateCetPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return moment(value).format('DD MMM HH:mm:ss');
    }

}
