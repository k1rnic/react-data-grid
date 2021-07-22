import { Meta, Story } from '@storybook/react';
import React from 'react';
import SmartTable, { SmartTableProps } from './';

const columns = [
  { name: '1', title: 'Column1' },
  { name: '2', title: 'Column2' },
  { name: '3', title: 'Column3' },
  { name: '4', title: 'Column4' },
  { name: '5', title: 'Column5' },
  { name: '6', title: 'Column6' },
];

export default {
  title: 'Components/SmartTable',
  component: SmartTable,
} as Meta<SmartTableProps>;

const Template: Story<SmartTableProps> = (args) => {
  return <SmartTable {...args} data={[]} columns={columns} />;
};

export const Overview = Template.bind({});
Overview.args = {};
