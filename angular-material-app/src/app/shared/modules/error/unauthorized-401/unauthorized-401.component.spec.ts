/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Unauthorized-401Component } from './unauthorized-401.component';

describe('Unauthorized-401Component', () => {
  let component: Unauthorized-401Component;
  let fixture: ComponentFixture<Unauthorized-401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Unauthorized-401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unauthorized-401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
