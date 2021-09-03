import { Plugin } from '@devexpress/dx-react-core';
import { TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import React from 'react';
import { DataGridFeatureProps } from '../props';

type Props = DataGridFeatureProps;

const Header = ({ withSorting }: Props) => (
  <Plugin name="DataGridHeader">
    <TableHeaderRow showSortingControls={withSorting} />
  </Plugin>
);

export default Header;
