import { Component, OnInit } from '@angular/core';
import { AlertService, Alert } from '../../../services/alert.service'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  public alerts: Alert[] = [];

  constructor(
    public alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.alerts = this.alertService.alerts;
  }


}
