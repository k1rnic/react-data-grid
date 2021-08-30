import { GridProps } from '@devexpress/dx-react-grid-material-ui';

export type SmartTableColumnType =
  | 'number'
  | 'text'
  | 'date'
  | 'datetime'
  | 'time';

export type SmartTableColumn<T = any> = Omit<
  GridProps['columns'][number],
  'getCellValue'
> & {
  name: keyof T | (string & {});
  type?: SmartTableColumnType;
  width?: number;
  getCellValue?: (row: T, columnName: keyof T | (string & {})) => any;
};
