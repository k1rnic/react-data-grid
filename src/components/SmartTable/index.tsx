import { Grid } from '@devexpress/dx-react-grid-material-ui';
import React from 'react';
import { SmartTableFormatters } from './formatters';
import SmartTableProcessing from './plugins/Processing';
import SmartTableState from './plugins/State';
import SmartTableStore from './plugins/Store';
import { SmartTableProps } from './props';
import { SmartTable, SmartTableHeader, SmartTableToolbar } from './templates';

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
}: SmartTableProps<T>) => {
  return (
    <Grid rows={data} columns={columns} rootComponent={Root}>
      <SmartTableStore store={store} />
      <SmartTableState />
      <SmartTableProcessing />

      <SmartTableFormatters formatters={formatters} />

      <SmartTable />
      <SmartTableToolbar items={toolbarItems} />
      <SmartTableHeader withSorting={props.withSorting} />
    </Grid>
  );
};
