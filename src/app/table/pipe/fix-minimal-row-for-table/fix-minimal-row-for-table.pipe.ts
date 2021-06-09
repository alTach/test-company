import { Pipe, PipeTransform } from '@angular/core';
import { TableData, TableDataItem } from '../../../core/entity/table-data';

@Pipe({
  name: 'fixMinimalRowForTable'
})
export class FixMinimalRowForTablePipe implements PipeTransform {
  private minItems = 4;

  transform(data: TableData | null): Array<TableDataItem>  {
    const arr = data || []
    if (arr.length > 3) {
      return arr;
    }
    return [...arr, ...new Array(this.minItems - arr.length).fill({})]
  }

}
