import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormOneComponent } from './component/form-one/form-one.component';
import { FormTwoComponent } from './component/form-two/form-two.component';
import { TableComponent } from './component/table/table.component';
import { ModalTableComponent } from './component/modal-table/modal-table.component';
import { TablePageComponent } from './component/table-page/table-page.component';
import { FixMinimalRowForTablePipe } from './pipe/fix-minimal-row-for-table/fix-minimal-row-for-table.pipe';
import { FormContainerComponent } from './component/form-container/form-container.component';
import { InputComponent } from './component/input/input.component';



@NgModule({
  declarations: [
    FormOneComponent,
    FormTwoComponent,
    TableComponent,
    ModalTableComponent,
    TablePageComponent,
    FixMinimalRowForTablePipe,
    FormContainerComponent,
    InputComponent,
  ],
  exports: [TablePageComponent],
  imports: [
    CommonModule
  ]
})
export class TableModule { }
