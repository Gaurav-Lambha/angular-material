/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BadRequest-400Component } from './bad-request-400.component';

describe('BadRequest-400Component', () => {
  let component: BadRequest-400Component;
  let fixture: ComponentFixture<BadRequest-400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadRequest-400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadRequest-400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
