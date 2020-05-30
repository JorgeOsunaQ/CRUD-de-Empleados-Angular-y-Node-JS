import { TestBed } from '@angular/core/testing';

import { InfoEmployeesService } from './info-employees.service';

describe('InfoEmployeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoEmployeesService = TestBed.get(InfoEmployeesService);
    expect(service).toBeTruthy();
  });
});
