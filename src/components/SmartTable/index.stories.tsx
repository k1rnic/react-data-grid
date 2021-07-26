import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { getUserCards } from '../../utils/faker';
import SmartTable, { SmartTableProps } from './';
import { SmartTableColumn } from './interfaces/column';

export default {
  title: 'Components/SmartTable',
  component: SmartTable,
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<SmartTableProps>;

const columns: SmartTableColumn<Faker.ContextualCard>[] = [
  { name: 'name' },
  { name: 'username' },
  { name: 'email' },
  { name: 'avatar' },
  { name: 'phone' },
  { name: 'website' },
];

export const Overview: Story<SmartTableProps> = () => {
  const [users] = useState(getUserCards({ count: 100 }));

  return <SmartTable data={users} columns={columns} />;
};
