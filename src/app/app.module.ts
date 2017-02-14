import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MegaMenuModule,MessagesModule} from 'primeng/primeng';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MegaMenuModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
