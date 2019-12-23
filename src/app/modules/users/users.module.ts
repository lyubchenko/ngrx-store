import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '@shared/shared.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [UsersPageComponent, UserPageComponent],
  exports: []
})
export class UsersModule {}
