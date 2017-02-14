/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MsgMessageComponent } from './msg-message.component';

describe('MsgMessageComponent', () => {
  let component: MsgMessageComponent;
  let fixture: ComponentFixture<MsgMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
