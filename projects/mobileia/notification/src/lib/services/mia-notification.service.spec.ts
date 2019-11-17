import { TestBed } from '@angular/core/testing';

import { MiaNotificationService } from './mia-notification.service';

describe('MiaNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiaNotificationService = TestBed.get(MiaNotificationService);
    expect(service).toBeTruthy();
  });
});
