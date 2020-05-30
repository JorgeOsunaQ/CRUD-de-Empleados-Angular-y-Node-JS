import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEmployeesComponent } from './registro-employees.component';

describe('RegistroEmployeesComponent', () => {
  let component: RegistroEmployeesComponent;
  let fixture: ComponentFixture<RegistroEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
