import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GroceryComponent } from './app.grocery';
import { HttpModule } from '@angular/http';
import {FormsModule} from "@angular/forms";
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';	
// import { Component } from '@angular/core';

@NgModule({
  declarations: [
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule { }