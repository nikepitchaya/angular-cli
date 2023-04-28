import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RequestModule } from './request/request.module';
import { HttpClientModule } from '@angular/common/http';
import { InputBarComponent } from './input-bar/input-bar.component';
@NgModule({
  declarations: [AppComponent, InputBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RequestModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
