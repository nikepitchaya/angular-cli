import { Component, EventEmitter, Input ,Output} from '@angular/core';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss'],
})
export class ListCustomerComponent {
  @Input() customerList: string[] = [];
  @Output() deleteCustomer = new EventEmitter
}
