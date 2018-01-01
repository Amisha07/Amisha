import { TestBed, inject } from '@angular/core/testing';

import { PeopleserviceService } from './peopleservice.service';

describe('PeopleserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleserviceService]
    });
  });

  it('should be created', inject([PeopleserviceService], (service: PeopleserviceService) => {
    expect(service).toBeTruthy();
  }));
});
