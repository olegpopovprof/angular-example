import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DialogService} from '../dialog/dialog.service';
import {environment} from '../../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient, private dialog: DialogService) {
    }

    get(url: string) {
        return this.http.get(environment.url + url)
            .map((results: any) => results)
            .catch((error: Response) => this.dialog.errorHandler(error));
    }

    post(url: string, data: object) {
        return this.http.post(environment.url + url, data)
            .map((results: any) => results)
            .catch((error: Response) => this.dialog.errorHandler(error));
    }

    put(url: string, data: object) {
        return this.http.put(environment.url + url, data)
            .map((results: any) => results)
            .catch((error: Response) => this.dialog.errorHandler(error));
    }

    delete(url: string) {
        return this.http.delete(environment.url + url)
            .map((results: any) => results)
            .catch((error: Response) => this.dialog.errorHandler(error));
    }

}
