import {
  DataTypeProvider,
  DataTypeProviderProps,
} from '@devexpress/dx-react-grid';
import React from 'react';

const Formatter = (props: DataTypeProviderProps) => (
  <DataTypeProvider {...props} />
);

export default Formatter;
