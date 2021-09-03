import { Grid } from '@devexpress/dx-react-grid-material-ui';
import React from 'react';
import { DataGridFormatters } from './formatters';
import DataGridProcessing from './plugins/Processing';
import DataGridState from './plugins/State';
import DataGridStore from './plugins/Store';
import { DataGridProps } from './props';
import { DataGrid, DataGridHeader, DataGridToolbar } from './templates';

const Root = (props: Grid.RootProps) => (
  <Grid.Root {...props} style={{ height: '100%', minHeight: 0 }} />
);

export default <T,>({
  data = [],
  columns = [],
  formatters = [],
  toolbarItems = [],
  store,
  ...props
}: DataGridProps<T>) => {
  return (
    <Grid rows={data} columns={columns} rootComponent={Root}>
      <DataGridStore store={store} />
      <DataGridState />
      <DataGridProcessing />

      <DataGridFormatters formatters={formatters} />

      <DataGrid />
      <DataGridToolbar items={toolbarItems} />
      <DataGridHeader withSorting={props.withSorting} />
    </Grid>
  );
};
