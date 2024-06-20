import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { TableService } from '../table.service';
import { tableLoadActions } from './table.actions';

@Injectable()
export class TableEffects {
  loadTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tableLoadActions.loadData),
      exhaustMap(() =>
        this.tableService.loadTableData().pipe(
          map(data =>
            tableLoadActions.loadDataSuccess({ tableElements: data })
          ),
          catchError((error: HttpErrorResponse) =>
            of(tableLoadActions.loadDataError({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private tableService: TableService
  ) {}
}
