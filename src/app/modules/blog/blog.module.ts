import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '@shared/shared.module';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
  declarations: [PostPageComponent, PostsPageComponent],
  exports: []
})
export class BlogModule {}
