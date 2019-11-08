import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectdetallComponent } from './subjectdetall.component';

describe('SubjectdetallComponent', () => {
  let component: SubjectdetallComponent;
  let fixture: ComponentFixture<SubjectdetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectdetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectdetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
