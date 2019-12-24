import { createSelector } from '@ngrx/store';

import { IAppState } from '@store/state/app.state';
import { IUserState } from '@store/state/user.state';
import { IPostState } from '@store/state/post.state';

const selectUsers = (state: IAppState) => state.users;
const selectPosts = (state: IAppState) => state.posts;

export const selectUsersList = createSelector(
  selectUsers,
  (state: IUserState) => state.users
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: IUserState) => state.selectedUser
);

export const selectSelectedUserPosts = createSelector(
  selectUsers,
  (state: IUserState) => state.selectedUserPosts
);
