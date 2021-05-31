import { Meta, Story } from '@storybook/react';
import React from 'react';
import SmartTable, { SmartTableProps } from './';

const columns = [
  { name: 'id', title: 'ID' },
  { name: 'product', title: 'Product' },
  { name: 'owner', title: 'Owner' },
];
const rows = [
  { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
  { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
];

export default {
  title: 'Components/SmartTable',
  component: SmartTable,
} as Meta<SmartTableProps>;

const Template: Story<SmartTableProps> = (args) => (
  <SmartTable {...args} data={rows} columns={columns} />
);

export const Overview = Template.bind({});
Overview.args = {};
