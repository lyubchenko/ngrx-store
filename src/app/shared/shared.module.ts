import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [TableComponent],
  exports: [
    TableComponent
  ]
})
export class SharedModule {}
