import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent {
  count: number = 0;
  @Input() name: string = '';
  @Output() showCount = new EventEmitter();

  plusNumber(): void {
    this.count++;
    this.emitCounter()
  }
  minusNumber(): void {
    this.count--;
    this.emitCounter()
  }
  emitCounter(): void {
    if (this.name == 'Minus') {
      let payload = {
        count: this.count,
        action: 'Minus',
      };
      this.showCount.emit(payload);
    } else if (this.name == 'Plus') {
      let payload = {
        count: this.count,
        action: 'Plus',
      };
      this.showCount.emit(payload);
    }
  }
}
