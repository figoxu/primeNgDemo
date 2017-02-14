/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MsgGrowlComponent } from './msg-growl.component';

describe('MsgGrowlComponent', () => {
  let component: MsgGrowlComponent;
  let fixture: ComponentFixture<MsgGrowlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgGrowlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgGrowlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
