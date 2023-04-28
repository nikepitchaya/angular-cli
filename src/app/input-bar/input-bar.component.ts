import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.scss'],
})
export class InputBarComponent {
  movieName: string = '';
  @Output() setMovieName = new EventEmitter();
  searchMovie(): void {
    this.setMovieName.emit(this.movieName);
  }
}
