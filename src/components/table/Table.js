import { ExcelComponents } from '../../core/ExcelComponents';
import { createTable } from './table.template';

export class Table extends ExcelComponents {
  static className = 'excel__table';

  toHTML() {
    return createTable();
  }
}
