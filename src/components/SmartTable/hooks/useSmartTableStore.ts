import { useReducer } from 'react';
import { SmartTableStoreProps } from '../props';
import { mapToDispatch } from '../store/actions';
import reducer, { initialState, State } from '../store/reducer';

type Props = {
  state?: Partial<State>;
};

const useSmartTableStore = ({
  state: userDefinedState,
}: Props = {}): SmartTableStoreProps => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...userDefinedState,
  });

  const dispatchers = mapToDispatch(dispatch);

  return { state, dispatchers };
};

export default useSmartTableStore;
