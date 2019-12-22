import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

@NgModule({
  imports: [
    UsersRoutingModule
  ],
  declarations: [UsersPageComponent, UserPageComponent],
  exports: []
})
export class UsersModule {}
