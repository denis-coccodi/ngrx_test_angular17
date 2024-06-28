import { createReducer, on } from '@ngrx/store';
import { gridListLoadActions } from './grid-list.actions';
import { GridListState } from './grid-list.state';

export const initialGridListState: GridListState = {
  loading: false,
  gridImages: [],
  error: [],
};

const onError = (state: GridListState) => ({
  ...state,
  gridList: [],
});

export const gridListReducer = createReducer(
  initialGridListState,
  on(gridListLoadActions.loadData, (state: GridListState) => ({
    ...state,
    loading: true,
  })),
  on(gridListLoadActions.loadDataSuccess, (state, { gridList }) => ({
    ...state,
    loading: false,
    gridImages: gridList,
  })),
  on(gridListLoadActions.loadDataError, onError),
);
