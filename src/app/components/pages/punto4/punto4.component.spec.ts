import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto4Component } from './punto4.component';

describe('Punto4Component', () => {
  let component: Punto4Component;
  let fixture: ComponentFixture<Punto4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
