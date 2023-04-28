import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-request-get',
  templateUrl: './request-get.component.html',
  styleUrls: ['./request-get.component.scss'],
})
export class RequestGetComponent {
  data: Book[] = [];
  constructor(private http: HttpClient) {}
  async ngOnInit() {
    await this.http
      .get<Book[]>('https://www.anapioficeandfire.com/api/books')
      .subscribe((res) => ((this.data = res), console.log(res)));
  }
  async fetchData(name: string) {
    await this.http
      .get<Book[]>(`https://www.anapioficeandfire.com/api/books?name=${name}`)
      .subscribe((res) => ((this.data = res), console.log(res)));
  }
}
