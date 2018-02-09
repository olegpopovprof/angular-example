import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../shared/services/api/api.service';
import {DialogService} from '../../../shared/services/dialog/dialog.service';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent implements OnInit {

    public permissions = [];
    public jiraGroups = [];
    public page = 1;
    constructor(private api: ApiService,
                private dialog: DialogService) {
    }

    ngOnInit() {
        this.loadPermissions();
    }

    loadPermissions() {
        this.api.get('/permissions').subscribe((results: any) => {
            this.permissions = results.permissions;
            this.jiraGroups = results.jiraGroups.filter(jg => !this.permissions.find(p => p.name === jg.name));
        });
    }

    addPermission(form, permission) {
        if (form.form.valid) {
            this.api.post('/permissions', {name: permission.value}).subscribe((results: any) => {
                if (results.success) {
                    this.dialog.flag(results.message, 'success');
                    this.jiraGroups = this.jiraGroups.filter(jg => jg.name !== permission.value);
                    this.permissions.push(results.permission);
                }
            });
        }
    }

    deletePermission(permission) {
        const confirm = this.dialog.confirm('Are you sure you wish to remove this permission?').subscribe((confirmed: boolean) => {
            if (confirmed) {
                this.api.delete('/permissions/' + permission.id).subscribe((results: any) => {
                    if (results.success) {
                        this.dialog.flag(results.message, 'success');
                        this.jiraGroups.push(permission);
                        this.permissions = this.permissions.filter(p => p.id !== permission.id);
                    }
                });
            } else {
                confirm.unsubscribe();
            }
        });
    }

}
