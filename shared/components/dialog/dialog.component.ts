import {Component, OnInit} from '@angular/core';
import {DialogService} from '../../services/dialog/dialog.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

    public message: string;
    public type: string;

    constructor(private dialog: DialogService) {
    }

    ngOnInit() {
        this.dialog.dialogMessage.subscribe((data: any) => {
            this.message = data.message;
            this.type = data.type;
            this.open();
            AJS.dialog2('#aui-dialog').on('hide', () => {
                this.dialog.dialogClosed(false);
            });
        });
    }

    open() {
        AJS.dialog2('#aui-dialog').show();
    }

    close(state) {
        this.dialog.dialogClosed(state);
        AJS.dialog2('#aui-dialog').hide();
    }

}
