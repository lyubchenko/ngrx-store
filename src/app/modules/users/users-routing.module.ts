import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersPageComponent} from './pages/users-page/users-page.component';
import {UserPageComponent} from './pages/user-page/user-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UsersPageComponent
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: UserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
