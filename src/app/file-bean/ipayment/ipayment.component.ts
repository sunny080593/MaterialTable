import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ipayment',
  templateUrl: './ipayment.component.html',
  styleUrls: ['./ipayment.component.scss']
})
export class IpaymentComponent implements OnInit {
@Input() fileId:number;
  constructor() { }

  ngOnInit() {
  }

}
