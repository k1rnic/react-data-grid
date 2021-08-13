import {
  IDependency,
  Plugin,
  TemplateConnector,
} from '@devexpress/dx-react-core';
import { SortingState } from '@devexpress/dx-react-grid';
import React from 'react';
import { PluginConnectorGetters } from '../interfaces/plugin';

const deps: IDependency[] = [{ name: 'StorePlugin' }];

const State = () => {
  return (
    <Plugin name="StatePlugin" dependencies={deps}>
      <TemplateConnector>
        {
          (({ state, dispatch }: PluginConnectorGetters) => (
            <>
              <SortingState
                sorting={state.sorting}
                onSortingChange={dispatch.sort}
              />
            </>
          )) as any
        }
      </TemplateConnector>
    </Plugin>
  );
};

export default State;
