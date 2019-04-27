import { TestBed } from '@angular/core/testing';

import { GocodeeLightboxService } from './gocodee-lightbox.service';

describe('GocodeeLightboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GocodeeLightboxService = TestBed.get(GocodeeLightboxService);
    expect(service).toBeTruthy();
  });
});
