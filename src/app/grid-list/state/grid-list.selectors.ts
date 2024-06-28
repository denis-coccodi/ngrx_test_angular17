import { gridListFeature } from './grid-list.state';

// automatically created by the createFeature function
export const {
  selectNgrxGridListState: selectGridListFeature, // feature selector
  selectLoading: selectGridListLoading, // selector for `loading` property
  selectError: selectGridListErrors, // selector for error property
  selectGridImages,
} = gridListFeature;

