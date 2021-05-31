import {
  Grid,
  GridProps,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import React from 'react';

export type SmartTableProps<T = any> = {
  data: T[];
  columns: GridProps['columns'];
};

const SmartTable = <T,>({ data = [], columns = [] }: SmartTableProps<T>) => {
  return (
    <Grid rows={data} columns={columns}>
      <Table />
      <TableHeaderRow />
    </Grid>
  );
};

export default SmartTable;
