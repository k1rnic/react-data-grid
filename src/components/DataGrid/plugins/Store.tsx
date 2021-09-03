import { Getter, Plugin } from '@devexpress/dx-react-core';
import React from 'react';
import { DataGridStoreProps } from '../props';

type Props = {
  store: DataGridStoreProps;
};

const Store = ({ store: { state, dispatchers } }: Props) => {
  return (
    <Plugin name="StorePlugin">
      <Getter name="state" value={state} />
      <Getter name="dispatch" value={dispatchers} />
    </Plugin>
  );
};

export default Store;
