import {
  Filter,
  Sorting,
  TableColumnWidthInfo,
} from '@devexpress/dx-react-grid';
import { ReactText } from 'react';
import { Actions, ActionTypes } from './actions';

export interface State {
  sorting: Array<Sorting>;
  filtering: Array<Filter>;
  selection: Array<ReactText>;
  hiddenColumnNames: Array<string>;
  order: Array<string>;
  columnWidths: TableColumnWidthInfo[];
}

export const initialState: State = {
  sorting: [],
  filtering: [],
  selection: [],
  hiddenColumnNames: [],
  order: [],
  columnWidths: [],
};

const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ChangeState:
      return {
        ...state,
        [action.payload.slice]: action.payload.value,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
