import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test222Component } from './test222.component';

describe('Test222Component', () => {
  let component: Test222Component;
  let fixture: ComponentFixture<Test222Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Test222Component]
    });
    fixture = TestBed.createComponent(Test222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
