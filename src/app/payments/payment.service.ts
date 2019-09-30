import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Payments{
  paymentId:string;
  paymentUniqueId:string;
  paymentType:string;
  paymentAmount:string;
}


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
 path: string = '../../assets/data/payments.json';
  constructor(private http:HttpClient) { }


  getPayments() :Observable<Payments[]>
  {
    alert(this.path);
    return this.http.get<Payments[]>(this.path);
  }
}
