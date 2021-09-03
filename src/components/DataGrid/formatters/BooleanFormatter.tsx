import {
  DataTypeProvider,
  DataTypeProviderProps,
} from '@devexpress/dx-react-grid';
import { Checkbox } from '@material-ui/core';
import React from 'react';

const BooleanFormatter = ({ value }: DataTypeProvider.ValueFormatterProps) => (
  <Checkbox disabled checked={!!value} size="small" style={{ padding: 0 }} />
);

const BooleanEditor = ({
  value,
  onValueChange,
}: DataTypeProvider.ValueEditorProps) => {
  const handleValueChange = ({
    target: { checked },
  }: {
    target: { checked: boolean };
  }) => {
    onValueChange(checked ? 1 : 0);
  };

  return (
    <Checkbox
      checked={!!value}
      onChange={handleValueChange}
      size="small"
      style={{ padding: 0 }}
    />
  );
};

export default (props: DataTypeProviderProps) => (
  <DataTypeProvider
    formatterComponent={BooleanFormatter}
    editorComponent={BooleanEditor}
    {...props}
  />
);
