import { ExcelComponents } from '../../core/ExcelComponents';
import { createTable } from './table.template';

export class Table extends ExcelComponents {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable();
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      console.log('start resizing');
    }
  }
}
