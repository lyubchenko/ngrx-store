import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsPageComponent} from './pages/posts-page/posts-page.component';
import {PostPageComponent} from './pages/post-page/post-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PostsPageComponent
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: PostPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
