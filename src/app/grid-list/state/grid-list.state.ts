import { HttpErrorResponse } from '@angular/common/http';
import { createFeature } from '@ngrx/store';
import { Features } from '../../shared/features';
import { GridImage } from '../grid-list.model';
import { gridListReducer } from './grid-list.reducers';

export interface GridListState {
  loading: boolean;
  gridImages: GridImage[];
  error: HttpErrorResponse[];
}

export const gridListFeature = createFeature({
  name: Features.NGRX_GRID_LIST,
  reducer: gridListReducer,
});
