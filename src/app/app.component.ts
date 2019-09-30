import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MaterialDatatable';
  color = 'warn';
  checked = false;
  disabled = false;
  public show:boolean = false;
  public paymentShowState:string="Show";
   toggle() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.paymentShowState = "Hide Payments";
    else
      this.paymentShowState = "Show Payments";
  }
}
