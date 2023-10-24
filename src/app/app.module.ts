import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialog } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test222Component } from './test2/test222/test222.component';

@NgModule({
  declarations: [AppComponent, Test2Component],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ConfirmDialog,
    Test222Component,
  ],
})
export class AppModule {}
