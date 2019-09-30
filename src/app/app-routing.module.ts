import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileBeanComponent } from './file-bean/file-bean.component';
import { IpaymentComponent } from './file-bean/ipayment/ipayment.component';

const routes: Routes = [
{path:'par',component:FileBeanComponent},
{path:'chi',component:IpaymentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FileBeanComponent,IpaymentComponent]