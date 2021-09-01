import { Plugin } from '@devexpress/dx-react-core';
import { ReactNode } from 'react';

export { default as SmartTableBooleanFormatter } from './BooleanFormatter';
export { default as SmartTableCustomFormatter } from './CustomFormatter';
export { default as SmartTableDateFormatter } from './DateFormatter';

type Props = {
  formatters: ReactNode[];
};

export const SmartTableFormatters = ({ formatters }: Props) => (
  <Plugin name="Formatters">{formatters}</Plugin>
);
