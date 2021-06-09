import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { TableData } from '../../../core/entity/table-data';

@Component({
  selector: 'fd-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  public tableItems: TableData | null = []
  @Input() data: TableData | null = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
   if (this.isDataChange(changes.data)) {

   }
  }

  private isDataChange(data: SimpleChange) {
    return data.previousValue !== data.currentValue;
  }

  onDelete() {

  }

  onEdit() {

  }
}
