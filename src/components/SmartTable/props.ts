import { ReactNode } from 'react';
import { SmartTableColumn } from './interfaces/column';
import { ActionDispatchers } from './store/actions';
import { State } from './store/reducer';

export type SmartTableStoreProps = {
  state: State;
  dispatchers: ActionDispatchers;
};

export type SmartTableFeatureProps = Partial<{
  withSorting: boolean;
}>;

export type SmartTableProps<T = any> = {
  data: T[];
  columns: SmartTableColumn<T>[];
  store: SmartTableStoreProps;
  restoreState?: boolean;
  formatters?: ReactNode[];
} & SmartTableFeatureProps;
