import { Plugin } from '@devexpress/dx-react-core';
import { ReactNode } from 'react';

export { default as DataGridBooleanFormatter } from './BooleanFormatter';
export { default as DataGridCustomFormatter } from './CustomFormatter';
export { default as DataGridDateFormatter } from './DateFormatter';

type Props = {
  formatters: ReactNode[];
};

export const DataGridFormatters = ({ formatters }: Props) => (
  <Plugin name="Formatters">{formatters}</Plugin>
);
