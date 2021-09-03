import { ActionDispatchers } from '../store/actions';
import { State } from '../store/reducer';

export type PluginConnectorGetters = {
  state: State;
  dispatch: ActionDispatchers;
} & Readonly<Record<string, any>>;
