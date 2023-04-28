import { Component } from '@angular/core';
import { Counter } from 'src/interfaces/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showCustomerList: boolean = true;
  customerList: string[] = [];
  setCustomerList(customerName: string): void {
    console.log(customerName);
    this.customerList.unshift(customerName);
  }
  deleteCustomer(index: number): void {
    console.log(index)
    this.customerList.splice(index, 1);
  }
}
