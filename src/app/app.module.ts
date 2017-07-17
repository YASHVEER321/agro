import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataGridModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppComponentHome } from './app.home';


@NgModule({
  declarations: [
    AppComponent,AppComponentHome
  ],
  imports: [
    BrowserModule,
    DataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
