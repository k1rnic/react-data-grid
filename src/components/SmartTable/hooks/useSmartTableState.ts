import { useReducer } from 'react';
import { SmartTableStoreProps } from '../props';
import { mapToDispatch } from '../store/actions';
import reducer, { initialState, State } from '../store/reducer';

const useSmartTableState = (
  userDefinedState: Partial<State> = {},
): SmartTableStoreProps => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...userDefinedState,
  });

  const dispatchers = mapToDispatch(dispatch);

  return { state, dispatchers };
};

export default useSmartTableState;
