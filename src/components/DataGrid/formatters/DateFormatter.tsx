import {
  DataTypeProvider,
  DataTypeProviderProps,
} from '@devexpress/dx-react-grid';
import React from 'react';

type Props = {
  format?: 'date' | 'datetime';
};

export const DateFormatter = ({
  value,
  format = 'date',
}: Props & DataTypeProvider.ValueFormatterProps) => (
  <>
    {format === 'date'
      ? new Date(value).toLocaleDateString('RU')
      : `${new Date(value).toLocaleString('RU')}`}
  </>
);

export default (props: DataTypeProviderProps & Props) => (
  <DataTypeProvider
    formatterComponent={(formatterProps) => (
      <DateFormatter {...formatterProps} format={props.format} />
    )}
    {...props}
  />
);
