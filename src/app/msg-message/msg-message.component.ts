import { Component, OnInit } from '@angular/core';
import {MessagesModule,Message} from 'primeng/primeng';

@Component({
  selector: 'app-msg-message',
  templateUrl: './msg-message.component.html',
  styleUrls: ['./msg-message.component.css']
})
export class MsgMessageComponent implements OnInit {
  constructor() { }

  msgs: Message[] = [];

  ngOnInit():void {
  }


  showInfo() {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
  }

  showWarn() {
    this.msgs = [];
    this.msgs.push({severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'});
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
  }

  showMultiple() {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Message 1', detail:'PrimeNG rocks'});
    this.msgs.push({severity:'info', summary:'Message 2', detail:'PrimeUI rocks'});
    this.msgs.push({severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'});
  }

  clear() {
    this.msgs = [];
  }

}
