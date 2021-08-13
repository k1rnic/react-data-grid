import { Plugin } from '@devexpress/dx-react-core';
import { TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import React from 'react';
import { SmartTableFeatureProps } from '../props';

type Props = SmartTableFeatureProps;

const Header = ({ withSorting }: Props) => (
  <Plugin>
    <TableHeaderRow showSortingControls={withSorting} />
  </Plugin>
);

export default Header;
