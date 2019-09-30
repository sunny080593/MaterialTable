import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponentModule } from './material-component/material-component.module';
import { PaymentListComponent } from './payments/payment-list/payment-list.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaymentService } from './payments/payment.service';
import { PaymentsComponent } from './payments/payments/payments.component';


@NgModule({
  declarations: [
    AppComponent,
    PaymentListComponent,
    PaymentsComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PaymentService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
