import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import { GridImage } from '../grid-list.model';

export enum GRID_LIST_ACTIONS {
  LOAD = 'Load Data',
  LOAD_SUCCESS = 'Load Data Success',
  LOAD_ERROR = 'Load Data Error',
}

export interface GridListLoadDataSuccess {
  gridList: GridImage[];
}

export interface GridListLoadDataError {
  error: HttpErrorResponse;
}

export type GridListLoadActions =
  | GridListLoadDataSuccess
  | GridListLoadDataError;

export const gridListLoadActions = createActionGroup({
  source: 'Grid List Load',
  events: {
    'Load Data': props<Object>(),
    'Load Data Success': props<GridListLoadDataSuccess>(),
    'Load Data Error': props<GridListLoadDataError>(),
  },
});
