import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { tableLoadActions, tableManagementActions } from './table.actions';
import { PeriodicElement, TableState } from './table.state';

const sortBySymbol = (
  a: PeriodicElement,
  b: PeriodicElement
): number => {
  return a.symbol.localeCompare(b.symbol);
};

export const tableAdapter: EntityAdapter<PeriodicElement> =
  createEntityAdapter<PeriodicElement>({
    selectId: (element: PeriodicElement) => element?.id,
    sortComparer: sortBySymbol,
  });

export const initialTableState: TableState = tableAdapter.getInitialState({
  loading: false,
  error: [],
});

const onError = (state: TableState) => ({
  ...state,
  periodicTable: [],
});

export const tableReducer = createReducer(
  initialTableState,
  on(tableLoadActions.loadData, (state: TableState) => ({
    ...state,
    loading: true,
  })),
  on(tableLoadActions.loadDataSuccess, (state, { tableElements }) =>
    tableAdapter.addMany(tableElements, { ...state, loading: false })
  ),
  on(tableLoadActions.loadDataError, onError),
  on(tableManagementActions.addElement, (state, { element }) =>
    tableAdapter.addOne(element, state)
  ),
  on(tableManagementActions.removeElement, (state, { elementId }) =>
    tableAdapter.removeOne(elementId, state)
  )
);
