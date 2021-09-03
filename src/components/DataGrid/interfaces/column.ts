import { GridProps } from '@devexpress/dx-react-grid-material-ui';

export type DataGridColumnType =
  | 'number'
  | 'text'
  | 'date'
  | 'datetime'
  | 'time';

export type DataGridColumn<T = any> = Omit<
  GridProps['columns'][number],
  'getCellValue'
> & {
  name: keyof T | (string & {});
  type?: DataGridColumnType;
  width?: number;
  getCellValue?: (row: T, columnName: keyof T | (string & {})) => any;
};
