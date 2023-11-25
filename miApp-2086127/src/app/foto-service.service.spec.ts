import { TestBed } from '@angular/core/testing';
import { FotoServiceService } from './foto-service.service';


describe('PhotoService', () => {
  let service: FotoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
