import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent {
  @Input() count: number = 0;
  @Input() name: string = '';
  @Input() step: number = 1;
  @Output() changeCountWidth = new EventEmitter();

  plusNumber(): void {
    if (this.count < 200)
      (this.count += this.step), this.changeCountWidth.emit(this.count);
  }
  minusNumber(): void {
    if (this.count >= this.step)
      (this.count -= this.step), this.changeCountWidth.emit(this.count);
  }
}
