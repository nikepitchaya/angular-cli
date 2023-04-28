import { Component } from '@angular/core';
import { Counter } from 'src/interfaces/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  divWidthCounter: number = 20;
  changeCountWidth(value: number): void {
    this.divWidthCounter = value;
  }
}
