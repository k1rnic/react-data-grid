import { GridProps } from '@devexpress/dx-react-grid-material-ui';

export type SmartTableColumn<T> = {
  name: keyof T;
  getCellValue?: (row: T, columnName: keyof T) => any;
} & GridProps['columns'][number];
