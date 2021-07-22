import { GridProps } from '@devexpress/dx-react-grid-material-ui';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { getUserCards } from '../../utils/faker';
import SmartTable, { SmartTableProps } from './';

export default {
  title: 'Components/SmartTable',
  component: SmartTable,
} as Meta<SmartTableProps>;

type Column = GridProps['columns'][number];

type UserCardColumn = {
  name: keyof Faker.ContextualCard;
} & Column;

const columns: UserCardColumn[] = [
  { name: 'name' },
  { name: 'username' },
  { name: 'email' },
  { name: 'avatar' },
];

const Template: Story<SmartTableProps> = (args) => {
  const [users] = useState(getUserCards({ count: 10 }));

  return <SmartTable {...args} data={users} columns={columns} />;
};

export const Overview = Template.bind({});
Overview.args = {};
