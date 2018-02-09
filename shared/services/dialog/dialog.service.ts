import {EventEmitter, Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

@Injectable()
export class DialogService {

    public dialogMessage = new EventEmitter<object>();
    public dialogAnswer = new EventEmitter<boolean>();
    constructor() {
    }

    errorHandler(error) {
        this.flag(error.error.message, 'error');
        return Observable.empty();
    }

    flag(message: string, type: string) {
        if (!message || !type) {
            return false;
        }
        const flag = AJS.flag({
            type: type,
            body: message,
        });

        setTimeout(() => {
            flag.close();
        }, 3000);
    }

    confirm(message: string) {
        this.dialogMessage.emit({
            message: message,
            type: 'confirm'
        });
        return this.dialogAnswer;
    }

    message(message: string) {
        this.dialogMessage.emit({
            message: message,
            type: 'message'
        });
    }

    dialogClosed(state) {
        this.dialogAnswer.emit(state);
    }
}
