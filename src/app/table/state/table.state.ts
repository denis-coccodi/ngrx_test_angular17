import { HttpErrorResponse } from '@angular/common/http';
import { EntityState } from '@ngrx/entity';
import { createFeature } from '@ngrx/store';
import { Features } from '../../shared/features';
import { tableReducer } from './table.reducers';

export interface PeriodicElement {
  id: number;
  name: string;
  weight: number;
  symbol: string;
}

export interface TableState extends EntityState<PeriodicElement> {
  loading: boolean;
  error: HttpErrorResponse[];
}

export const tableFeature = createFeature({
  name: Features.NGRX_TABLE,
  reducer: tableReducer,
});
