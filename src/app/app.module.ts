import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { SquareFlexComponent } from './square-flex/square-flex.component';
@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    SquareFlexComponent
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
