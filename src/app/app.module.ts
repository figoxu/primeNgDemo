import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MegaMenuModule,MessagesModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { MsgMessageComponent } from './msg-message/msg-message.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    MsgMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MegaMenuModule,
    MessagesModule,
    RouterModule.forRoot([
      {
        path:'msg/message',
        component:MsgMessageComponent
      },
      {
        path:'',
        redirectTo:'/msg/message',
        pathMatch:'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
