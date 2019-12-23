import { createSelector } from '@ngrx/store';

import { IAppState } from '@store/state/app.state';
import { IUserState } from '@store/state/user.state';

const selectUsers = (state: IAppState) => state.users;

export const selectUsersList = createSelector(
  selectUsers,
  (state: IUserState) => state.users
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: IUserState) => state.selectedUser
);
