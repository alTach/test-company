import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormOneComponent } from './component/form-one/form-one.component';
import { FormTwoComponent } from './component/form-two/form-two.component';
import { TableComponent } from './component/table/table.component';
import { ModalTableComponent } from './component/modal-table/modal-table.component';
import { TablePageComponent } from './component/table-page/table-page.component';



@NgModule({
  declarations: [
    FormOneComponent,
    FormTwoComponent,
    TableComponent,
    ModalTableComponent,
    TablePageComponent,
  ],
  exports: [TablePageComponent],
  imports: [
    CommonModule
  ]
})
export class TableModule { }
