import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.scss'],
})
export class InputBarComponent {
  customerName: string = '';
  @Output() setCustomerList = new EventEmitter();

  createCustomer(): void {
    this.setCustomerList.emit(this.customerName)
  }
}
