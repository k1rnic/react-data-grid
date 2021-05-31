import { Meta, Story } from '@storybook/react';
import React from 'react';
import usePokedex from '../../hooks/usePokedex';
import SmartTable, { SmartTableProps } from './';

const columns = [
  { name: 'id', title: 'ID' },
  { name: 'name', title: 'Name' },
];

export default {
  title: 'Components/SmartTable',
  component: SmartTable,
} as Meta<SmartTableProps>;

const Template: Story<SmartTableProps> = (args) => {
  const [{ pokemons }] = usePokedex();

  return <SmartTable {...args} data={pokemons} columns={columns} />;
};

export const Overview = Template.bind({});
Overview.args = {};
