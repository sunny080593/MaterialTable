import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentService } from '../payment.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {
listData: MatTableDataSource<any>;
breakpoint: number;
displayedColumns:string[] = ['paymentId','paymentType','paymentUniqueId','paymentAmount','actions']
@ViewChild(MatSort,{ static: true }) sort:MatSort;
@ViewChild(MatPaginator,{ static: true }) paginator:MatPaginator;
  constructor(private paymentService : PaymentService) { 


  }
  onResize(event) {
    console.log('Width : '+event.target.innerWidth);
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : this.displayedColumns.length;
  }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : this.displayedColumns.length;

    this.paymentService.getPayments().subscribe(
      list=>{
        let array =list.map( item =>{
          return{
            $key:item.paymentId,
            ...item
          };
        });
        this.listData =new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator=this.paginator;
        
      });

  }

}
