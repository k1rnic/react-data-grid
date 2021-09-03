import {
  Plugin,
  Template,
  TemplatePlaceholder,
} from '@devexpress/dx-react-core';
import { Toolbar } from '@devexpress/dx-react-grid-material-ui';
import { Grid } from '@material-ui/core';
import React, { ReactNode } from 'react';

type Props = {
  items: ReactNode[];
};

export default ({ items }: Props) => (
  <Plugin name="DataGridToolbar">
    <Toolbar />
    <Template name="toolbarContent">
      <Grid container spacing={1} justifyContent="space-between">
        <Grid item container xs={4} spacing={1} justifyContent="flex-start">
          <TemplatePlaceholder name="toolbarItemLeft" />
        </Grid>
        <Grid item container xs={4} spacing={1} justifyContent="center">
          <TemplatePlaceholder name="toolbarItemCenter" />
        </Grid>
        <Grid item container xs={4} spacing={1} justifyContent="flex-end">
          <TemplatePlaceholder name="toolbarItemRight" />
        </Grid>
      </Grid>
    </Template>
    {items}
  </Plugin>
);
