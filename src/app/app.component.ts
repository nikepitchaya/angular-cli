import { Component, ViewChild } from '@angular/core';
import { RequestGetComponent } from './request/request-get/request-get.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(RequestGetComponent) child: any;
  ngOnInit(): void {
    console.log('component redering');
  }
  setMovieName(name: string): void {
    this.child.fetchData(name);
  }
}
