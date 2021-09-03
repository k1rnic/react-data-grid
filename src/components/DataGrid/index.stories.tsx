import { Meta, Story } from '@storybook/react';
import React, { useEffect } from 'react';
import DataGrid from '.';
import useLocalStorage from '../../hooks/useLocalStorage';
import { getUserCards } from '../../utils/faker';
import { DataGridBooleanFormatter, DataGridDateFormatter } from './formatters';
import useDataGridState from './hooks/useDataGridState';
import { DataGridColumn } from './interfaces/column';
import { DataGridProps } from './props';
import { State } from './store/reducer';
import { DataGridToolbarItem } from './templates';

const COLUMNS: DataGridColumn<Faker.ContextualCard>[] = [
  { name: 'name' },
  { name: 'username' },
  { name: 'email' },
  { name: 'avatar' },
  { name: 'phone' },
  { name: 'website' },
];

const DATA = getUserCards({ count: 100 });

export default {
  title: 'Components/DataGrid',
  component: DataGrid,
  args: {
    data: DATA,
    columns: COLUMNS,
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<DataGridProps>;

export const Overview: Story<DataGridProps> = (args) => {
  const store = useDataGridState();

  return <DataGrid {...args} store={store} />;
};

export const WithSorting: Story<DataGridProps> = (args) => {
  const store = useDataGridState({
    sorting: [{ columnName: 'name', direction: 'desc' }],
  });

  return <DataGrid {...args} withSorting store={store} />;
};

export const WithFormatting: Story<DataGridProps<Faker.ContextualCard>> = (
  args,
) => {
  const store = useDataGridState();

  return (
    <DataGrid
      {...args}
      withSorting
      columns={[
        ...COLUMNS,
        { name: 'dob', title: 'Day of birth' },
        {
          name: 'startsWithA',
          getCellValue: ({ name }) => name.toLowerCase().startsWith('a'),
        },
      ]}
      formatters={[
        <DataGridDateFormatter key="dob" for={['dob']} format="datetime" />,
        <DataGridBooleanFormatter key="startsWithA" for={['startsWithA']} />,
      ]}
      store={store}
    />
  );
};

export const StoredState: Story<DataGridProps> = (args) => {
  const [storedState, setStoredState] = useLocalStorage('meta/stored_state', {
    sorting: [{ columnName: 'name', direction: 'desc' }],
  } as Partial<State>);

  const store = useDataGridState(storedState);

  useEffect(() => {
    setStoredState(store.state);
  }, [store.state]);

  return <DataGrid {...args} withSorting store={store} />;
};

export const WithToolbar: Story<DataGridProps> = (args) => {
  const store = useDataGridState();

  return (
    <DataGrid
      {...args}
      withSorting
      store={store}
      toolbarItems={[
        <DataGridToolbarItem position="left">left</DataGridToolbarItem>,
        <DataGridToolbarItem position="center">center</DataGridToolbarItem>,
        <DataGridToolbarItem position="right">right</DataGridToolbarItem>,
      ]}
    />
  );
};
