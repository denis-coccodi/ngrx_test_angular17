import { TestBed } from '@angular/core/testing';
import { ELEMENT_DATA } from './table.data';
import { TableService } from './table.service';

describe('BlogComponent', (): void => {
  let service: TableService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [TableService],
    });
    service = TestBed.inject(TableService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should load data', done => {
    service.loadTableData().subscribe(data => {
      done();
      expect(data).toBe(ELEMENT_DATA);
    });
  }, 2500);
});
