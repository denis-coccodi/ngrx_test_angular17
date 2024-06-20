import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import { PeriodicElement } from './table.state';

export enum TABLE_ACTIONS {
  LOAD = 'Load Data',
  LOAD_SUCCESS = 'Load Data Success',
  LOAD_ERROR = 'Load Data Error',
}

export interface TableLoadData {
  elementId: string;
}

export interface TableLoadDataSuccess {
  tableElements: PeriodicElement[];
}

export interface TableLoadDataError {
  error: HttpErrorResponse;
}

export interface AddTableElement {
  element: PeriodicElement;
}

export interface RemoveTableElement {
  elementId: number;
}

export type TableLoadActions =
  | TableLoadData
  | TableLoadDataSuccess
  | TableLoadDataError;
export type TableManagementActions = AddTableElement | RemoveTableElement;
export type TableActions = TableLoadActions | TableManagementActions;

export const tableLoadActions = createActionGroup({
  source: 'Table Load',
  events: {
    'Load Data': props<TableLoadData>(),
    'Load Data Success': props<TableLoadDataSuccess>(),
    'Load Data Error': props<TableLoadDataError>(),
  },
});

export const tableManagementActions = createActionGroup({
  source: 'Table Management',
  events: {
    'Add Element': props<AddTableElement>(),
    'Remove Element': props<RemoveTableElement>(),
  },
});
