import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';

@NgModule({
  imports: [
    BlogRoutingModule
  ],
  declarations: [PostPageComponent, PostsPageComponent],
  exports: []
})
export class BlogModule {}
