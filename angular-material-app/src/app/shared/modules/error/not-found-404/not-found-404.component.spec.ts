/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotFound-404Component } from './not-found-404.component';

describe('NotFound-404Component', () => {
  let component: NotFound-404Component;
  let fixture: ComponentFixture<NotFound-404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFound-404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFound-404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
