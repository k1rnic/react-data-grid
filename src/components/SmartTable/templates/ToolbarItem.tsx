import {
  IDependency,
  Plugin,
  Template,
  TemplatePlaceholder,
} from '@devexpress/dx-react-core';
import { Grid } from '@material-ui/core';
import React, { PropsWithChildren, useMemo } from 'react';

type ToolbarItemPosition = 'left' | 'center' | 'right';

type Props = PropsWithChildren<{
  position: ToolbarItemPosition;
}>;

const dependencies: IDependency[] = [{ name: 'Toolbar' }];

export default ({ position, children }: Props) => {
  const toolbarItemPosition = useMemo(() => {
    switch (position) {
      case 'left':
        return 'toolbarItemLeft';
      case 'center':
        return 'toolbarItemCenter';
      case 'right':
        return 'toolbarItemRight';
    }
  }, [position]);

  return (
    <Plugin name="SmartTableToolbarItem" dependencies={dependencies}>
      <Template name={toolbarItemPosition}>
        <TemplatePlaceholder />
        <Grid item>{children}</Grid>
      </Template>
    </Plugin>
  );
};
