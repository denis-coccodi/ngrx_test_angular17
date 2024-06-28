import { createSelector } from '@ngrx/store';
import { tableAdapter } from './table.reducers';
import { tableFeature } from './table.state';

// automatically created by the createFeature function
export const {
  selectNgrxTableState: selectElementsFeature, // feature selector
  selectLoading: selectElementsLoading, // selector for `loading` property
  selectError: selectElementsErrors, // selector for error property
  selectIds: selectElementsIds,
  selectEntities: selectElementsEntities,
} = tableFeature;

export const { selectAll: selectAllElements, selectTotal: elementCount } =
  tableAdapter.getSelectors();

export const selectPeriodicElements = createSelector(
  selectElementsFeature,
  selectAllElements
);

export const selectOddPeriodicElements = createSelector(
  selectPeriodicElements,
  periodicElements => periodicElements.filter((_el, i) => i % 2 === 0)
);
