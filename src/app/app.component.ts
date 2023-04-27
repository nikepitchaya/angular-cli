import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  money: number = 0;
  priceShabu: number = 0;
  paymentPrice :number = 0;
  calculateMoney(): void {
    this.paymentPrice = (this.priceShabu * 3) / 4;
  }
}
