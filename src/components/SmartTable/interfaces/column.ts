import { GridProps } from '@devexpress/dx-react-grid-material-ui';

export type SmartTableColumnType =
  | 'number'
  | 'text'
  | 'date'
  | 'datetime'
  | 'time';

export type SmartTableColumn<T = any> = {
  name: keyof T;
  type?: SmartTableColumnType;
  width?: number;
  getCellValue?: (row: T, columnName: keyof T) => any;
} & GridProps['columns'][number];
