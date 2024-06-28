import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { GridListService } from '../grid-list.service';
import { gridListLoadActions } from './grid-list.actions';

@Injectable()
export class GridListEffects {
  loadGridList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gridListLoadActions.loadData),
      exhaustMap(() =>
        this.gridListService.loadTableData().pipe(
          map(data =>
            gridListLoadActions.loadDataSuccess({ gridList: data })
          ),
          catchError((error: HttpErrorResponse) =>
            of(gridListLoadActions.loadDataError({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private gridListService: GridListService
  ) {}
}
