import { Meta, Story } from '@storybook/react';
import React from 'react';
import SmartTable, { SmartTableProps } from './';

export default {
  title: 'Components/SmartTable',
  component: SmartTable,
} as Meta<SmartTableProps>;

const Template: Story<SmartTableProps> = (args) => <SmartTable {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
