import { ReactNode } from 'react';
import { DataGridColumn } from './interfaces/column';
import { ActionDispatchers } from './store/actions';
import { State } from './store/reducer';

export type DataGridStoreProps = {
  state: State;
  dispatchers: ActionDispatchers;
};

export type DataGridFeatureProps = Partial<{
  withSorting: boolean;
}>;

export type DataGridProps<T = any> = {
  data: T[];
  columns: DataGridColumn<T>[];
  store: DataGridStoreProps;
  restoreState?: boolean;
  formatters?: ReactNode[];
  toolbarItems?: ReactNode[];
} & DataGridFeatureProps;
