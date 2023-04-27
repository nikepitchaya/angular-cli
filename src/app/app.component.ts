import { Component } from '@angular/core';
import { Counter } from 'src/interfaces/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  money: number = 0;
  priceShabu: number = 0;
  paymentPrice: number = 0;
  countPlus: number = 0;
  countMinus: number = 0;

  calculateMoney(): void {
    this.paymentPrice = (this.priceShabu * 3) / 4;
  }
  showCount(data: Counter): void {
    if (data.action == 'Plus') this.countPlus = data.count;
    else if (data.action == 'Minus')  this.countMinus = data.count;
    else console.log('Error');
  }
}
