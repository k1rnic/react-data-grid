import {
  Filter,
  Sorting,
  TableColumnWidthInfo,
} from '@devexpress/dx-react-grid';
import { Dispatch, ReactText } from 'react';
import { State } from './reducer';

export enum ActionTypes {
  ChangeState = 'CHANGE_STATE',
}

type ChangeStatePayload = {
  [K in keyof State]: { slice: K; value: State[K] };
}[keyof State];

type ChangeStateAction = {
  readonly type: ActionTypes.ChangeState;
  readonly payload: ChangeStatePayload;
};

export type Actions = ChangeStateAction;

const mapTo = <K extends keyof State>(slice: K, value: State[K]) =>
  ({
    type: ActionTypes.ChangeState,
    payload: { slice, value },
  } as const);

export const mapToDispatch = (d: Dispatch<Actions>) => ({
  sort: (val: Sorting[]) => d(mapTo('sorting', val)),
  filter: (val: Filter[]) => d(mapTo('filtering', val)),
  select: (val: ReactText[]) => d(mapTo('selection', val)),
  reorder: (val: string[]) => d(mapTo('order', val)),
  toggleColumns: (val: string[]) => d(mapTo('hiddenColumnNames', val)),
  resizeColumns: (val: TableColumnWidthInfo[]) => d(mapTo('columnWidths', val)),
});

export type ActionDispatchers = ReturnType<typeof mapToDispatch>;
