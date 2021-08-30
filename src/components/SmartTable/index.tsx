import { Grid } from '@devexpress/dx-react-grid-material-ui';
import React from 'react';
import SmartTableProcessing from './plugins/Processing';
import SmartTableState from './plugins/State';
import SmartTableStore from './plugins/Store';
import { SmartTableProps } from './props';
import SmartTableHeader from './templates/Header';
import SmartTable from './templates/Table';

const Root = (props: Grid.RootProps) => (
  <Grid.Root {...props} style={{ height: '100%', minHeight: 0 }} />
);

const Core = <T,>({
  data = [],
  columns = [],
  formatters = [],
  store,
  ...props
}: SmartTableProps<T>) => {
  return (
    <Grid rows={data} columns={columns} rootComponent={Root}>
      <SmartTableStore store={store} />
      <SmartTableState />
      <SmartTableProcessing />

      {formatters.length && formatters}

      <SmartTable />
      <SmartTableHeader {...props} />
    </Grid>
  );
};

export default Core;
