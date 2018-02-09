import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

// services
import { ApiService } from './services/api/api.service';
import { DialogService } from './services/dialog/dialog.service';

// components
import { DialogComponent } from './components/dialog/dialog.component';
import { DateCetPipe } from './pipes/date-cet.pipe';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        DialogComponent,
        DateCetPipe
    ],
    providers: [
        ApiService,
        DialogService
    ],
    declarations: [DialogComponent, DateCetPipe]
})
export class SharedModule {
}
