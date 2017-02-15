import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MegaMenuModule, MessagesModule, GrowlModule, MenubarModule, AutoCompleteModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { MsgMessageComponent } from './msg-message/msg-message.component';
import {RouterModule} from "@angular/router";
import { MsgGrowlComponent } from './msg-growl/msg-growl.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { InputAutoCompleteComponent } from './input-auto-complete/input-auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    MsgMessageComponent,
    MsgGrowlComponent,
    MenuNavComponent,
    InputAutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MegaMenuModule,
    MessagesModule,
    GrowlModule,
    MenubarModule,
    AutoCompleteModule,
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
        path:'menu/nav',
        component:MenuNavComponent
      },
      {
        path:'input/autocomplete',
        component:InputAutoCompleteComponent
      },
      {
        path:'',
        redirectTo:'menu/nav',
        pathMatch:'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
