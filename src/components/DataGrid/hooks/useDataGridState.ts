import { useReducer } from 'react';
import { DataGridStoreProps } from '../props';
import { mapToDispatch } from '../store/actions';
import reducer, { initialState, State } from '../store/reducer';

const useDataGridState = (
  userDefinedState: Partial<State> = {},
): DataGridStoreProps => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...userDefinedState,
  });

  const dispatchers = mapToDispatch(dispatch);

  return { state, dispatchers };
};

export default useDataGridState;
