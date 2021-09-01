import { Plugin } from '@devexpress/dx-react-core';
import { VirtualTable } from '@devexpress/dx-react-grid-material-ui';
import React from 'react';

const Table = () => {
  return (
    <Plugin name="SmartTable">
      <VirtualTable height="auto" />
    </Plugin>
  );
};

export default Table;
