import { Meta, Story } from '@storybook/react';
import React from 'react';
import { getUserCards } from '../../utils/faker';
import SmartTable from './';
import useSmartTableState from './hooks/useSmartTableState';
import { SmartTableColumn } from './interfaces/column';
import { SmartTableProps } from './props';

const COLUMNS: SmartTableColumn<Faker.ContextualCard>[] = [
  { name: 'name' },
  { name: 'username' },
  { name: 'email' },
  { name: 'avatar' },
  { name: 'phone' },
  { name: 'website' },
];

const DATA = getUserCards({ count: 100 });

export default {
  title: 'Components/SmartTable',
  component: SmartTable,
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
} as Meta<SmartTableProps>;

export const Overview: Story<SmartTableProps> = (args) => {
  const store = useSmartTableState();

  return <SmartTable {...args} store={store} />;
};

export const AllFeatured: Story<SmartTableProps> = (args) => {
  const store = useSmartTableState();

  return <SmartTable {...args} withSorting store={store} />;
};
