import {
  Grid,
  TableHeaderRow,
  VirtualTable,
} from '@devexpress/dx-react-grid-material-ui';
import React, { useEffect, useState } from 'react';
import useSmartTableStore from './hooks/useSmartTableStore';
import { SmartTableProps } from './props';

const Root = (props: Grid.RootProps) => (
  <Grid.Root {...props} style={{ height: '100%', minHeight: 0 }} />
);

const SmartTable = <T,>({
  data = [],
  columns = [],
  store: outerStore,
}: SmartTableProps<T>) => {
  const [store, setStore] = useState(useSmartTableStore());

  useEffect(() => {
    if (outerStore) {
      setStore(outerStore);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(store);

  return (
    <Grid rows={data} columns={columns} rootComponent={Root}>
      <VirtualTable height="auto" />
      <TableHeaderRow />
    </Grid>
  );
};

export default SmartTable;
