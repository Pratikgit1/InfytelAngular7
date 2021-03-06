import { Component, OnInit } from '@angular/core';

import { CallDetailsService } from './call-details.service';
import { CallDetail } from './callDetail';

@Component({
  selector: 'app-call-details',
  templateUrl: './call-details.component.html',
  styleUrls: ['./call-details.component.css']
})
export class CallDetailsComponent implements OnInit {

  callDetails: CallDetail[];
  errorMsg: string;
  constructor(private callDetailService: CallDetailsService) { }

  getCallDetails() {
    this.callDetailService.getCallDetails().subscribe(
      data => this.callDetails = data,
      error => this.errorMsg = error
    );
  }

  ngOnInit() {
    this.getCallDetails();
  }

}
