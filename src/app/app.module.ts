import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MegaMenuModule,MessagesModule,GrowlModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { MsgMessageComponent } from './msg-message/msg-message.component';
import {RouterModule} from "@angular/router";
import { MsgGrowlComponent } from './msg-growl/msg-growl.component';

@NgModule({
  declarations: [
    AppComponent,
    MsgMessageComponent,
    MsgGrowlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MegaMenuModule,
    MessagesModule,
    GrowlModule,
    RouterModule.forRoot([
      {
        path:'msg/message',
        component:MsgMessageComponent
      },
      {
        path:'msg/growl',
        component:MsgGrowlComponent
      },
      {
        path:'',
        redirectTo:'/msg/growl',
        pathMatch:'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
