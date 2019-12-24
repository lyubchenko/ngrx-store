import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommentTileComponent } from './components/comment-tile/comment-tile.component';
import { PostTileComponent } from './components/post-tile/post-tile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [
    TableComponent,
    CommentTileComponent,
    PostTileComponent
  ],
  exports: [
    TableComponent,
    CommentTileComponent,
    PostTileComponent
  ]
})
export class SharedModule {}
