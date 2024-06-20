import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { ELEMENT_DATA } from './table.data';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor() {}

  loadTableData = () => of(ELEMENT_DATA).pipe(delay(2000));
}
