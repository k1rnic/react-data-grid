import {
  Grid,
  TableHeaderRow,
  VirtualTable,
} from '@devexpress/dx-react-grid-material-ui';
import React from 'react';
import { SmartTableColumn } from './interfaces/column';

const Root = (props: Grid.RootProps) => (
  <Grid.Root {...props} style={{ height: '100%' }} />
);

export type SmartTableProps<T = any> = {
  data: T[];
  columns: SmartTableColumn<T>[];
};

const SmartTable = <T,>({ data = [], columns = [] }: SmartTableProps<T>) => {
  return (
    <Grid rows={data} columns={columns} rootComponent={Root}>
      <VirtualTable height="auto" />
      <TableHeaderRow />
    </Grid>
  );
};

export default SmartTable;
