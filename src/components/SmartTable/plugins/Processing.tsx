import { Plugin } from '@devexpress/dx-react-core';
import { IntegratedSorting } from '@devexpress/dx-react-grid';
import React from 'react';

const Processing = () => {
  return (
    <Plugin name="ProcessingPlugin">
      <>
        <IntegratedSorting />
      </>
    </Plugin>
  );
};

export default Processing;
