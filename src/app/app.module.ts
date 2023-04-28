import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputBarComponent } from './input-bar/input-bar.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBarComponent,
    ListCustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
