import { TestBed, inject } from '@angular/core/testing';

import { GetSelectionsService } from './get-selections.service';

describe('GetSelectionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSelectionsService]
    });
  });

  it('should be created', inject([GetSelectionsService], (service: GetSelectionsService) => {
    expect(service).toBeTruthy();
  }));
});
