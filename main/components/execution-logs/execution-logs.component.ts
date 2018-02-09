import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api/api.service';

@Component({
  selector: 'app-execution-logs',
  templateUrl: './execution-logs.component.html',
  styleUrls: ['./execution-logs.component.scss']
})
export class ExecutionLogsComponent implements OnInit {

  public logs = [];
  public page = 1;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadLogs();
  }

  loadLogs() {
    this.api.get('/logs').subscribe((results) => {
        if (results.success) {
            this.logs = results.logs;
        }
    });
  }

}
