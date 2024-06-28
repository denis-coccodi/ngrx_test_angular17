import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { GRID_LIST_DATA } from './grid-list.data';

@Injectable({
  providedIn: 'root',
})
export class GridListService {
  constructor() {}

  loadTableData = () => of(GRID_LIST_DATA).pipe(delay(500));
}
