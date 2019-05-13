/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InternalServerError-500Component } from './internal-server-error-500.component';

describe('InternalServerError-500Component', () => {
  let component: InternalServerError-500Component;
  let fixture: ComponentFixture<InternalServerError-500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalServerError-500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalServerError-500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
