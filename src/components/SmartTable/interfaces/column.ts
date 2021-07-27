import { GridProps } from '@devexpress/dx-react-grid-material-ui';

export type SmartTableColumnType =
  | 'number'
  | 'text'
  | 'date'
  | 'datetime'
  | 'time';

export type SmartTableColumn<T> = {
  name: keyof T;
  type?: SmartTableColumnType;
  getCellValue?: (row: T, columnName: keyof T) => any;
} & GridProps['columns'][number];
