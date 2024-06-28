import { TestBed } from '@angular/core/testing';
import { GRID_LIST_DATA } from './grid-list.data';
import { GridListService } from './grid-list.service';

describe('BlogComponent', (): void => {
  let service: GridListService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [GridListService],
    });
    service = TestBed.inject(GridListService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should load data', done => {
    service.loadTableData().subscribe(data => {
      done();
      expect(data).toBe(GRID_LIST_DATA);
    });
  }, 2500);
});
