import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreradetaillComponent } from './carreradetaill.component';

describe('CarreradetaillComponent', () => {
  let component: CarreradetaillComponent;
  let fixture: ComponentFixture<CarreradetaillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarreradetaillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreradetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
